"use client";

import React from "react";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-indigo-600 dark:text-indigo-400">
        Contáctame
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        
        <form
          action="mailto:luis.quiros.navarro@mep.go.cr"
          method="POST"
          encType="text/plain"
          className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
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
            <label htmlFor="email" className="block text-sm font-medium">
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
            <label htmlFor="message" className="block text-sm font-medium">
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

        
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Información personal
          </h2>
          <p><strong>Correo principal:</strong><br /> luis.quiros.navarro@mep.go.cr</p>
          <p><strong>Correo alternativo:</strong><br /> lfernandoqn@gmail.com</p>
          <p><strong>Teléfono:</strong><br /> +506 8816-1688</p>
          <p><strong>Dirección:</strong><br /> San José de Upala, Alajuela, Costa Rica</p>
          <p>
            <strong>LinkedIn:</strong><br />
            <a
              href="https://www.linkedin.com/in/luisferquirosnavarro"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/luisferquirosnavarro
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
