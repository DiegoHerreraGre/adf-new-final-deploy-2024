"use client";
import React, { useEffect, useState } from "react";
import { NavBarLarge } from "./navBarLarge";
import { NavBarSmall } from "./navBarSmall";

export const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(undefined); // Estado inicial indefinido

  useEffect(() => {
    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Verifica si el objeto `window` está disponible
    if (typeof window !== "undefined") {
      // Establece el ancho inicial de la ventana
      setWindowWidth(window.innerWidth);

      // Agrega oyentes al redimensionamiento de la ventana
      window.addEventListener("resize", handleResize);

      // Remueve el oyente cuando el componente se desmonta
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // El arreglo vacío asegura que el efecto solo se ejecute una vez

  const isBigScreen = windowWidth !== undefined && windowWidth > 768; // Define si el tamaño de la ventana es grande

  // Renderiza los componentes solo si `windowWidth` tiene un valor definido
  return windowWidth !== undefined ? (
    isBigScreen ? (
      <NavBarLarge />
    ) : (
      <NavBarSmall />
    )
  ) : null;
};
