"use client";
import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";

export default function Footer() {
  return (
    <>
      <hr />
      <CardSpotlight>
        <footer className="flex flex-row mx-auto h-[500px]">
          <div className="flex flex-col items-center justify-center mx-auto my-auto w-auto"></div>
        </footer>
      </CardSpotlight>
    </>
  );
}

export const ButtonShadowGradient = () => {
  return (
    <button className="relative h-12 flex w-auto mx-auto flex-col items-center justify-center rounded-md dark:bg-white bg-black px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 text-white dark:text-black">
      <div className="absolute -inset-0.5 -z-10 rounded-lg dark:from-[#c7d2fe] dark:to-[#8678f9] bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-35 blur" />
      ¿Te gustó la página?
    </button>
  );
};
