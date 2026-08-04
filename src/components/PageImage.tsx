import Image from "next/image";

export function PageImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className = "",
  objectPosition,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
