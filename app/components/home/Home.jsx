"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./hero-highlight";

export function HeroHighlightDemo() {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-left text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto "
          >
            Enseñando Economía Internacional y Relaciones Económicas
            Internacionales desde una mirada{" "}
            <Highlight className="text-black dark:text-white">
              histórico-estructural
            </Highlight>
          </motion.h1>
        </HeroHighlight>
        <div className="animate-pulse bg-gray-800 dark:bg-blue-900 h-fit w-fit text-3xl p-5 rounded-lg text-white mx-[200px]">
          Pensamiento CEPAL para la economía latinoamericana
        </div>
      </section>
    </>
  );
}
