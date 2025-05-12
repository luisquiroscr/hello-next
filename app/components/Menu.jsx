"use client";
import { useState } from "react";

export default function Menu() {
  const [elementoActivo, setElementoActivo] = useState(1);

  const opcionesDeMenu = [
    { id: 1, texto: "Quienes somos", link: "about" },
    { id: 2, texto: "Experiencia", link: "experience" },
    { id: 3, texto: "Proyectos", link: "proyects" },
    { id: 4, texto: "Contacto", link: "contact" },
  ];

  return (
    <nav className="flex flex-wrap gap-4 justify-center">
      {opcionesDeMenu.map((opcion) => (
        <a
          key={opcion.id}
          href={opcion.link}
          onClick={() => setElementoActivo(opcion.id)}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all
            ${
              elementoActivo === opcion.id
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
        >
          {elementoActivo === opcion.id && <span>✔</span>}
          {opcion.texto}
        </a>
      ))}
    </nav>
  );
}
