"use client";
import React from "react";
import Menu from "./Menu";

export default function Navigation() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm p-4 text-center space-y-4">
      <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
        Bienvenidos al Portafolio de Luis Fernando Quiros N
      </p>
      <div className="flex justify-center">
        <Menu />
      </div>
    </nav>
  );
}
