"use client";

import React from "react";
import Menu from "./Menu"; // Asegurate de tener este componente en ./components/Menu.jsx

export default function Navigation({ name }) {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm p-4 text-center space-y-4">
      <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
        Esta es la navegación {name}
      </p>

      {/* Menú de navegación por secciones */}
      <div className="flex justify-center">
        <Menu />
      </div>
    </header>
  );
}
