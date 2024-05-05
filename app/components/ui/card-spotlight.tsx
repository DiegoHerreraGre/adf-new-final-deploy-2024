import React, { useRef, useState } from "react";
import Link from "next/link";
import { ButtonShadowGradient } from "../footer/Footer";

export const CardSpotlight = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w border-t-black dark:border-t-white bg-neutral-550 p-[140px] dark:text-white"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(0,0,0,.25), transparent 40%)`,
        }}
      />
      <h3 className="mb-4 font-bold tracking-tight text-neutral-900 dark:text-white">
        Diseño por Diego Herrera Gré ®
      </h3>
      <p className="text-sm text-neutral-500 w-32 mb-10 sm:mb-20 md:mb-20 lg:mb-20">
        Componentes de: Acertenity UI, Shadcn UI, Tailwind Snippets, React, Next
        JS, React-Icons, Next-Icons, Ibelick UI/BG
      </p>
      <Link href="/ContactMe">
        <ButtonShadowGradient />
      </Link>
    </div>
  );
};
