"use client";
import React, { useState, useRef } from "react";

export const Input2 = ({ className2, type, ...props2 }) => {
  const radius = 100; // change this to increase the rdaius of the hover effect
  const [visible, setVisible] = useState(false);
  let mouseX = 0;
  let mouseY = 0;
  const ref = useRef();

  function handleMouseMove2({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX = clientX - left;
    mouseY = clientY - top;
  }
  return (
    <div
      onMouseMove={handleMouseMove2}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <input
        type={type}
        className={`${className2} flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400`}
        ref={ref}
        {...props2}
      />
    </div>
  );
};
