import Image from "next/image";
import { useId } from "react";

// The logo's concentric arcs as a rotating circular-text ring.
export function Ring({
  className = "relative",
  text = "Your journey · Our passion · Sri Lanka · ",
  mark = true,
}: {
  className?: string;
  text?: string;
  mark?: boolean;
}) {
  const id = useId();
  return (
    <div className={`aspect-square ${className}`} aria-hidden>
      <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 size-full">
        <defs>
          <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.6" />
        <text fill="currentColor" style={{ fontSize: 12.4, letterSpacing: "0.32em", textTransform: "uppercase", fontWeight: 500 }}>
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      {mark && <Image src="/brand/mark.png" alt="" width={240} height={240} className="absolute inset-[30%] size-[40%]" />}
    </div>
  );
}
