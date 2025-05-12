"use client";

import React from "react";

export default function contact() {
  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8 text-gray-800 dark:text-gray-200">
         
      <section id="contacto" className="max-w-xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl font-extrabold text-center mb-4 text-indigo-600 dark:text-indigo-400">
    Contáctame
  </h1>

  <form
    action="mailto:luis.quiros.navarro@mep.go.cr"
    method="POST"
    encType="text/plain"
    className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
  >
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Nombre
      </label>
      <input
        type="text"
        name="name"
        id="name"
        required
        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Correo electrónico
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Mensaje
      </label>
      <textarea
        name="message"
        id="message"
        rows="4"
        required
        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition"
    >
      Enviar mensaje
    </button>
  </form>
</section>

    </div>
  );
}
