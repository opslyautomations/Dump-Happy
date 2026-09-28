"""Build the location-page photos with embedded SEO metadata.

Downloads each freely licensed Wikimedia Commons original, crops it to 16:9,
writes a web-ready JPEG to public/locations/, and embeds:
  - EXIF: ImageDescription, Artist, Copyright, Windows XP title/subject/keywords, GPS
  - XMP (IPTC Core/Extension, Dublin Core, xmpRights, Photoshop): title, headline,
    description, alt text, keywords, city/state/country, creator, credit line,
    copyright notice, license URL, web statement, source
  - IPTC IIM (APP13) mirror of the core fields for older readers

The photographers keep credit and license in every file — only the descriptive
SEO fields are ours. The site serves these files unoptimized so the metadata
survives (Next's image optimizer re-encodes and strips it).

Also generates src/lib/data/location-photos.ts for the location pages.

Run from the repo root:  python3 scripts/location-photos/build.py
Requires: Pillow >= 11
"""

import io
import json
import struct
import re
import time
import unicodedata
import urllib.parse
import urllib.request
from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image
from PIL.TiffImagePlugin import IFDRational

ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = ROOT / "public" / "locations"
TS_OUT = ROOT / "src" / "lib" / "data" / "location-photos.ts"
SITE_URL = "https://www.dumphappy.com"
UA = {"User-Agent": "DumpHappySiteBuilder/1.0 (https://dumphappy.com; support@dumphappy.com)"}
WIDTH, HEIGHT = 1600, 900

# focus_y: 0 = keep the top of the photo, 1 = keep the bottom, 0.5 = center.
PHOTOS = [
    {
        "slug": "santa-monica",
        "file": "santa-monica-junk-removal-santa-monica-pier.jpg",
        "commons": "File:Santa Monica Pier (22944807230).jpg",
        "subject": "Santa Monica Pier",
        "alt": "Santa Monica Pier and Pacific Park Ferris wheel at sunset over the beach in Santa Monica, California",
        "lat": 34.0086, "lon": -118.4986, "focus_y": 0.5,
    },
    {
        "slug": "culver-city",
        "file": "culver-city-junk-removal-culver-hotel.jpg",
        "commons": "File:Culver by Night - Seiichi Niitsuma.jpg",
        "subject": "the historic Culver Hotel",
        "alt": "The historic Culver Hotel lit up at twilight in downtown Culver City, California",
        "lat": 34.0232, "lon": -118.3960, "focus_y": 0.55,
    },
    {
        "slug": "beverly-hills",
        "file": "beverly-hills-junk-removal-palm-lined-street.jpg",
        "commons": "File:Beverly Hills11.JPG",
        "subject": "a palm-lined residential street",
        "alt": "Tall palm trees lining a quiet residential street in Beverly Hills, California",
        "lat": 34.0736, "lon": -118.4004, "focus_y": 0.6,
    },
    {
        "slug": "west-hollywood",
        "file": "west-hollywood-junk-removal-sunset-tower.jpg",
        "commons": "File:Sunset Tower, 8358 Sunset Blvd. West Hollywood 2364.jpg",
        "subject": "Sunset Tower on the Sunset Strip",
        "alt": "Art Deco Sunset Tower above the apartments and tree-lined streets of West Hollywood, California",
        "lat": 34.0957, "lon": -118.3747, "focus_y": 0.55,
    },
    {
        "slug": "marina-del-rey",
        "file": "marina-del-rey-junk-removal-harbor.jpg",
        "commons": "File:Marina del Rey.jpg",
        "subject": "the Marina del Rey harbor",
        "alt": "Boats docked in the Marina del Rey harbor with waterfront condos behind, Marina del Rey, California",
        "lat": 33.9803, "lon": -118.4517, "focus_y": 0.5,
    },
    {
        "slug": "venice",
        "file": "venice-junk-removal-venice-canals.jpg",
        "commons": "File:Los Angeles - Venice Canal Historic District 04.jpg",
        "subject": "the Venice Canals",
        "alt": "Homes reflected in the water along the Venice Canal Historic District in Venice, Los Angeles",
        "lat": 33.9850, "lon": -118.4695, "focus_y": 0.5,
    },
    {
        "slug": "sawtelle",
        "file": "sawtelle-junk-removal-west-los-angeles-streetcar-depot.jpg",
        "commons": "File:West Los Angeles Streetcar Depot on the grounds of the Sawtelle Veterans Home.jpg",
        "subject": "the historic West Los Angeles Streetcar Depot",
        "alt": "Historic West Los Angeles Streetcar Depot under palm and eucalyptus trees on the Sawtelle Veterans Home grounds, Los Angeles",
        "lat": 34.0560, "lon": -118.4555, "focus_y": 0.6,
    },
    {
        "slug": "brentwood",
        "file": "brentwood-junk-removal-brentwood-country-mart.jpg",
        "commons": "File:Brentwood Country Mart 2.jpg",
        "subject": "the Brentwood Country Mart",
        "alt": "The red barn-style Brentwood Country Mart on 26th Street in Brentwood, Los Angeles",
        "lat": 34.0467, "lon": -118.4948, "focus_y": 0.55,
    },
    {
        "slug": "westchester",
        "file": "westchester-junk-removal-sepulveda-boulevard.jpg",
        "commons": "File:0745 Westchester shopping district along Sepulveda Blvd North of LAX DSC 0745 (49104179326).jpg",
        "subject": "Westchester along Sepulveda Boulevard",
        "alt": "View over the Westchester neighborhood and Sepulveda Boulevard shopping district near LAX, Los Angeles",
        "lat": 33.9590, "lon": -118.3960, "focus_y": 0.55,
    },
    {
        "slug": "mid-city",
        "file": "mid-city-junk-removal-mid-city-sign.jpg",
        "commons": "File:Mid-Citysignage1.jpg",
        "subject": "the Mid-City neighborhood sign",
        "alt": "City of Los Angeles Mid City neighborhood sign near La Brea Avenue, Mid-City Los Angeles",
        "lat": 34.0355, "lon": -118.3445, "focus_y": 0.45,
    },
    {
        "slug": "koreatown",
        "file": "koreatown-junk-removal-embassy-apartments.jpg",
        "commons": "File:Embassy Apartments roof sign, Koreatown Los Angeles.jpg",
        "subject": "the Embassy Apartments on Mariposa Avenue",
        "alt": "Historic Embassy Apartments building with its rooftop sign on Mariposa Avenue in Koreatown, Los Angeles",
        "lat": 34.0600, "lon": -118.2995, "focus_y": 0.4,
    },
]

LOCATION_NAMES = {
    "santa-monica": "Santa Monica",
    "culver-city": "Culver City",
    "beverly-hills": "Beverly Hills",
    "west-hollywood": "West Hollywood",
    "marina-del-rey": "Marina del Rey",
    "venice": "Venice",
    "sawtelle": "Sawtelle",
    "brentwood": "Brentwood",
    "westchester": "Westchester",
    "mid-city": "Mid-City",
    "koreatown": "Koreatown",
}

# Sub-neighborhoods of the City of LA use "Los Angeles" as the city.
INCORPORATED = {"santa-monica", "culver-city", "beverly-hills", "west-hollywood", "marina-del-rey"}


def fetch_json(url):
    return json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60))


def fetch_bytes(url):
    for attempt in range(4):
        try:
            return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=120).read()
        except Exception:
            if attempt == 3:
                raise
            time.sleep(3 * (attempt + 1))


def strip_html(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", s or "")).strip()


def commons_info(title):
    q = urllib.parse.urlencode(
        {"action": "query", "format": "json", "titles": title, "prop": "imageinfo",
         "iiprop": "url|extmetadata|size", "iiurlwidth": 2400}
    )
    page = next(iter(fetch_json("https://commons.wikimedia.org/w/api.php?" + q)["query"]["pages"].values()))
    ii = page["imageinfo"][0]
    m = ii["extmetadata"]
    lic = strip_html(m.get("LicenseShortName", {}).get("value"))
    return {
        "download": ii.get("thumburl") if ii["width"] > 2400 else ii["url"],
        "page": ii["descriptionurl"],
        "author": strip_html(m.get("Artist", {}).get("value")),
        "license": lic,
        "licenseUrl": strip_html(m.get("LicenseUrl", {}).get("value")) or None,
        "attributionRequired": m.get("AttributionRequired", {}).get("value", "true") == "true",
    }


def crop_16x9(im, focus_y):
    w, h = im.size
    target = WIDTH / HEIGHT
    if w / h > target:
        nw = round(h * target)
        left = (w - nw) // 2
        im = im.crop((left, 0, left + nw, h))
    else:
        nh = round(w / target)
        top = round((h - nh) * focus_y)
        im = im.crop((0, top, w, top + nh))
    return im.resize((WIDTH, HEIGHT), Image.LANCZOS)


def to_dms(value):
    value = abs(value)
    d = int(value)
    m = int((value - d) * 60)
    s = round(((value - d) * 60 - m) * 60 * 100)
    return (IFDRational(d, 1), IFDRational(m, 1), IFDRational(s, 100))


def xp(s):
    return s.encode("utf-16-le") + b"\x00\x00"


def ascii_fold(s):
    # EXIF ASCII fields are 7-bit; the XP*, XMP, and IPTC fields keep full Unicode.
    s = s.replace("©", "(c)").replace("—", "-")
    return unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()


def build_exif(meta):
    ex = Image.Exif()
    ex[0x010E] = ascii_fold(meta["description"])  # ImageDescription
    ex[0x013B] = ascii_fold(meta["author"])  # Artist
    ex[0x8298] = ascii_fold(meta["copyright"])  # Copyright
    ex[0x0131] = "Dump Happy (dumphappy.com)"  # Software
    ex[0x9C9B] = xp(meta["title"])  # XPTitle
    ex[0x9C9C] = xp(meta["alt"])  # XPComment
    ex[0x9C9D] = xp(meta["author"])  # XPAuthor
    ex[0x9C9E] = xp(";".join(meta["keywords"]))  # XPKeywords
    ex[0x9C9F] = xp(meta["headline"])  # XPSubject
    gps = ex.get_ifd(0x8825)
    gps[1] = "N" if meta["lat"] >= 0 else "S"
    gps[2] = to_dms(meta["lat"])
    gps[3] = "E" if meta["lon"] >= 0 else "W"
    gps[4] = to_dms(meta["lon"])
    return ex.tobytes()


def build_xmp(meta):
    e = lambda s: escape(s, {'"': "&quot;"})
    keywords = "".join(f"<rdf:li>{e(k)}</rdf:li>" for k in meta["keywords"])
    return f"""<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about=""
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/"
    xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"
    xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/"
    xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/"
    xmlns:plus="http://ns.useplus.org/ldf/xmp/1.0/"
    xmlns:xmp="http://ns.adobe.com/xap/1.0/"
    xmp:CreatorTool="Dump Happy (dumphappy.com)"
    photoshop:Headline="{e(meta['headline'])}"
    photoshop:Credit="{e(meta['credit'])}"
    photoshop:Source="Wikimedia Commons"
    photoshop:City="{e(meta['city'])}"
    photoshop:State="California"
    photoshop:Country="United States"
    Iptc4xmpCore:CountryCode="US"
    Iptc4xmpCore:Location="{e(meta['sublocation'])}"
    xmpRights:Marked="{'False' if meta['public_domain'] else 'True'}"
    xmpRights:WebStatement="{e(meta['web_statement'])}">
   <dc:title><rdf:Alt><rdf:li xml:lang="x-default">{e(meta['title'])}</rdf:li></rdf:Alt></dc:title>
   <dc:description><rdf:Alt><rdf:li xml:lang="x-default">{e(meta['description'])}</rdf:li></rdf:Alt></dc:description>
   <dc:creator><rdf:Seq><rdf:li>{e(meta['author'])}</rdf:li></rdf:Seq></dc:creator>
   <dc:rights><rdf:Alt><rdf:li xml:lang="x-default">{e(meta['copyright'])}</rdf:li></rdf:Alt></dc:rights>
   <dc:subject><rdf:Bag>{keywords}</rdf:Bag></dc:subject>
   <dc:source>{e(meta['source'])}</dc:source>
   <xmpRights:UsageTerms><rdf:Alt><rdf:li xml:lang="x-default">{e(meta['usage_terms'])}</rdf:li></rdf:Alt></xmpRights:UsageTerms>
   <Iptc4xmpCore:AltTextAccessibility><rdf:Alt><rdf:li xml:lang="x-default">{e(meta['alt'])}</rdf:li></rdf:Alt></Iptc4xmpCore:AltTextAccessibility>
   <Iptc4xmpExt:LocationShown><rdf:Bag><rdf:li rdf:parseType="Resource">
    <Iptc4xmpExt:Sublocation>{e(meta['sublocation'])}</Iptc4xmpExt:Sublocation>
    <Iptc4xmpExt:City>{e(meta['city'])}</Iptc4xmpExt:City>
    <Iptc4xmpExt:ProvinceState>California</Iptc4xmpExt:ProvinceState>
    <Iptc4xmpExt:CountryName>United States</Iptc4xmpExt:CountryName>
    <Iptc4xmpExt:CountryCode>US</Iptc4xmpExt:CountryCode>
    <exif:GPSLatitude xmlns:exif="http://ns.adobe.com/exif/1.0/">{meta['lat']}</exif:GPSLatitude>
    <exif:GPSLongitude xmlns:exif="http://ns.adobe.com/exif/1.0/">{meta['lon']}</exif:GPSLongitude>
   </rdf:li></rdf:Bag></Iptc4xmpExt:LocationShown>
   <plus:Licensor><rdf:Seq><rdf:li rdf:parseType="Resource">
    <plus:LicensorURL>{e(meta['source'])}</plus:LicensorURL>
   </rdf:li></rdf:Seq></plus:Licensor>
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>""".encode("utf-8")


def build_iptc_app13(meta):
    """Photoshop IRB 0x0404 wrapping IPTC IIM records (UTF-8 declared)."""

    def rec(dataset, value, record=2):
        b = value.encode("utf-8")[:2000]
        return struct.pack(">BBBH", 0x1C, record, dataset, len(b)) + b

    iim = rec(90, "\x1b%G", record=1)  # CodedCharacterSet = UTF-8
    iim += rec(5, meta["title"][:64])  # Object Name
    for k in meta["keywords"]:
        iim += rec(25, k[:64])  # Keywords
    iim += rec(80, meta["author"][:32])  # By-line
    iim += rec(90, meta["city"][:32])  # City
    iim += rec(92, meta["sublocation"][:32])  # Sub-location
    iim += rec(95, "California")  # Province/State
    iim += rec(100, "USA")  # Country code
    iim += rec(101, "United States")  # Country
    iim += rec(105, meta["headline"][:256])  # Headline
    iim += rec(110, meta["credit"][:32])  # Credit
    iim += rec(115, "Wikimedia Commons")  # Source
    iim += rec(116, meta["copyright"][:128])  # Copyright Notice
    iim += rec(120, meta["description"])  # Caption/Abstract
    if len(iim) % 2:
        iim += b"\x00"
    irb = b"8BIM" + struct.pack(">H", 0x0404) + b"\x00\x00" + struct.pack(">I", len(iim)) + iim
    payload = b"Photoshop 3.0\x00" + irb
    return b"\xff\xed" + struct.pack(">H", len(payload) + 2) + payload


def insert_app13(jpeg, app13):
    # Place after SOI and any APP0/APP1 segments.
    i = 2
    while jpeg[i] == 0xFF and jpeg[i + 1] in (0xE0, 0xE1):
        seg_len = struct.unpack(">H", jpeg[i + 2 : i + 4])[0]
        i += 2 + seg_len
    return jpeg[:i] + app13 + jpeg[i:]


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    records = []
    for p in PHOTOS:
        name = LOCATION_NAMES[p["slug"]]
        info = commons_info(p["commons"])
        public_domain = info["license"].lower() in ("public domain", "cc0")
        city = name if p["slug"] in INCORPORATED else "Los Angeles"
        if p["slug"] == "marina-del-rey":
            city = "Marina del Rey"
        title = f"{p['subject'][0].upper() + p['subject'][1:]} — Junk Removal in {name}, CA | Dump Happy"
        meta = {
            **p,
            "title": title,
            "headline": f"Junk removal and clean-outs in {name}, Los Angeles",
            "description": (
                f"{p['alt']}. Dump Happy provides junk removal, furniture and appliance "
                f"removal, and clean-outs in {name} and across Los Angeles. {SITE_URL}/locations/{p['slug']}"
            ),
            "keywords": [
                f"junk removal {name}",
                f"{name} junk removal",
                f"junk hauling {name}",
                f"furniture removal {name}",
                f"clean-out {name}",
                f"{name} CA",
                p["subject"].removeprefix("the ").removeprefix("a "),
                "Los Angeles junk removal",
                "Dump Happy",
            ],
            "author": info["author"],
            "credit": f"Photo: {info['author']} / {info['license']} via Wikimedia Commons",
            "copyright": (
                f"Public domain — photo by {info['author']}"
                if public_domain
                else f"© {info['author']}, licensed under {info['license']}"
            ),
            "usage_terms": (
                f"{info['license']}. Original: {info['page']}"
                + ("" if public_domain else f" License: {info['licenseUrl']}. Resized and cropped from the original.")
            ),
            "web_statement": info["licenseUrl"] or info["page"],
            "source": info["page"],
            "city": city,
            "sublocation": p["subject"].removeprefix("the ").removeprefix("a "),
            "public_domain": public_domain,
        }

        im = Image.open(io.BytesIO(fetch_bytes(info["download"])))
        im = crop_16x9(im.convert("RGB"), p["focus_y"])
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=82, optimize=True, progressive=True,
                exif=build_exif(meta), xmp=build_xmp(meta))
        data = insert_app13(buf.getvalue(), build_iptc_app13(meta))
        (OUT_DIR / p["file"]).write_bytes(data)
        print(f"{p['file']}: {len(data) // 1024} KB  ({info['license']}, {info['author']})")

        records.append({
            "slug": p["slug"],
            "src": f"/locations/{p['file']}",
            "width": WIDTH,
            "height": HEIGHT,
            "alt": p["alt"],
            "title": title,
            "caption": f"{p['subject'][0].upper() + p['subject'][1:]}, {name}",
            "lat": p["lat"],
            "lon": p["lon"],
            "credit": {
                "author": info["author"],
                "license": info["license"],
                "licenseUrl": info["licenseUrl"],
                "sourceUrl": info["page"],
                "attributionRequired": info["attributionRequired"] and not public_domain,
            },
        })
        time.sleep(1)

    body = json.dumps({r["slug"]: r for r in records}, indent=2, ensure_ascii=False)
    TS_OUT.write_text(
        "// Generated by scripts/location-photos/build.py — edit the script, not this file.\n"
        "// Photos are freely licensed from Wikimedia Commons; credit stays with each photographer.\n\n"
        "export interface LocationPhoto {\n"
        "  slug: string;\n  src: string;\n  width: number;\n  height: number;\n"
        "  alt: string;\n  title: string;\n  caption: string;\n  lat: number;\n  lon: number;\n"
        "  credit: {\n    author: string;\n    license: string;\n    licenseUrl: string | null;\n"
        "    sourceUrl: string;\n    attributionRequired: boolean;\n  };\n}\n\n"
        f"export const LOCATION_PHOTOS: Record<string, LocationPhoto> = {body};\n\n"
        "export function getLocationPhoto(slug: string): LocationPhoto | undefined {\n"
        "  return LOCATION_PHOTOS[slug];\n}\n"
    )
    print(f"wrote {TS_OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
