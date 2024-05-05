"use client";

import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-sm flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="medium"
        pauseOnHover={true}
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "El capitalismo es un sistema económico que se fortaleció durante las primeras etapas de la Revolución Industrial y hoy es el sistema predominante de comercio que ha logrado llegar a todas las otras capas de nuestras vidas. ",
    name: "Concepto: Capitalismo",
    title: "Armando Di Filippo",
  },
  {
    quote:
      "Es la forma en que los Estados interaccionan usando la economía como su mecanismo de intercambio de intereses, pujando así la diferencia de poder y la estructura que hay actualmente en nuestro mundo",
    name: "Relaciones Económicas Internacionales",
    title: "Armando Di Filippo",
  },
];
