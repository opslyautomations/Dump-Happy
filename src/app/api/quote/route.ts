import { NextResponse } from "next/server";

interface QuotePayload {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  city?: string;
  message?: string;
}

// Webhook-ready: set GHL_WEBHOOK_URL in the environment to forward every
// submission to GoHighLevel (or any CRM webhook). Until it's configured,
// submissions are just logged server-side so the form still works end to end.
export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload.name || !payload.phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "dumphappy.com" }),
      });

      if (!webhookRes.ok) {
        console.error("GHL webhook responded with", webhookRes.status);
        return NextResponse.json({ error: "Could not submit quote request." }, { status: 502 });
      }
    } catch (err) {
      console.error("GHL webhook request failed", err);
      return NextResponse.json({ error: "Could not submit quote request." }, { status: 502 });
    }
  } else {
    console.log("New quote request (no GHL_WEBHOOK_URL configured):", payload);
  }

  return NextResponse.json({ ok: true });
}
