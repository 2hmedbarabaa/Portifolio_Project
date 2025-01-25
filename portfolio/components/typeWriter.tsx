"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typewriter({
  sequence,
  className,
}: {
  sequence: Array<string | number>;
  className?: string;
}) {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={40}
      deletionSpeed={50}
      cursor={true}
      repeat={Infinity}
      className={className}
    />
  );
}