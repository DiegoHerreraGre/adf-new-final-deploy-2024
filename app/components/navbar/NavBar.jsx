"use client";
import React, { useEffect, useState } from "react";
import { NavBarLarge } from "./navBarLarge";
import { NavBarSmall } from "./navBarSmall";

/**
 * Componente NavBar que renderiza NavBarLarge o NavBarSmall dependiendo del ancho de la ventana.
 * Utiliza un hook de estado para seguir el ancho de la ventana y un efecto para escuchar cambios
 * en el tamaño de la ventana, actualizando el estado según corresponda.
 *
 * @returns {JSX.Element|null} - Retorna el componente NavBarLarge si el ancho de la ventana es mayor a 768,
 *                               de lo contrario retorna NavBarSmall. Si el ancho de la ventana no está definido,
 *                               retorna null.
 */
export const NavBar = () => {
  // Estado para seguir el ancho de la ventana. Inicialmente es indefinido.
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    // Función para actualizar el estado con el nuevo ancho de la ventana.
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Verifica si el objeto `window` está disponible para evitar errores en SSR.
    if (typeof window !== "undefined") {
      // Establece el ancho inicial de la ventana.
      setWindowWidth(window.innerWidth);

      // Agrega un listener para el evento de redimensionamiento de la ventana.
      window.addEventListener("resize", handleResize);

      // Limpieza: remueve el listener cuando el componente se desmonta.
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // El arreglo vacío asegura que el efecto se ejecute solo al montar el componente.

  // Determina si el tamaño de la pantalla es grande basado en el ancho de la ventana.
  const isBigScreen = windowWidth !== undefined && windowWidth > 768;

  // Condiciona la renderización de los componentes a que `windowWidth` tenga un valor definido.
  return windowWidth !== undefined ? (
    isBigScreen ? (
      <NavBarLarge /> // Renderiza este componente para pantallas grandes.
    ) : (
      <NavBarSmall /> // Renderiza este componente para pantallas pequeñas.
    )
  ) : null; // No renderiza nada hasta que `windowWidth` esté definido.
};
