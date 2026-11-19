import type { CSSProperties, ReactNode } from "react";

/**
 * Splits a headline into words that slide up out of a mask on load.
 * Real spaces stay between words, so screen readers and crawlers read the
 * plain sentence. Non-string children render untouched.
 */
export function SplitText({
  children,
  baseDelay = 0,
  wordClassName,
}: {
  children: ReactNode;
  baseDelay?: number;
  wordClassName?: (word: string, index: number) => string | undefined;
}) {
  if (typeof children !== "string") return <>{children}</>;
  const words = children.split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="split-word" style={{ "--base-delay": `${baseDelay}ms` } as CSSProperties}>
            <span className={wordClassName?.(word, i)} style={{ "--i": i } as CSSProperties}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
