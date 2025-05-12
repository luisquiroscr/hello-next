"use client";

import React from "react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-indigo-600 dark:text-indigo-400">
        Acerca de mí
      </h1>

      
      <section className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur">
        <h2 className="text-xl font-semibold mb-2">🧑‍🏫 Perfil Profesional</h2>
        <p>
          Educador costarricense con formación en Estudios Sociales y Educación Cívica. Combina su experiencia docente con estudios en Educación de Adultos y desarrollo Front-End, integrando tecnología y pedagogía.
        </p>
      </section>

      
      <section className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur">
        <h2 className="text-xl font-semibold mb-2">💡 Innovación educativa</h2>
        <p>
          Apasionado por crear experiencias de aprendizaje significativas usando herramientas digitales. Promueve el pensamiento crítico, la participación ciudadana y la transformación del aula con ayuda de la tecnología.
        </p>
      </section>

     
      <section className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur">
        <h2 className="text-xl font-semibold mb-2">💻 Desarrollo web</h2>
        <p>
          Con conocimientos en HTML, CSS, JavaScript, React y Vue, busca crear soluciones digitales aplicadas a la educación. Su objetivo es fusionar lo pedagógico con lo tecnológico.
        </p>
      </section>

      
      <section className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur">
        <h2 className="text-xl font-semibold mb-2">📈 Finanzas e inversión</h2>
        <p>
          Interesado en el análisis de empresas y el mercado bursátil estadounidense. Estudia finanzas para ampliar su impacto en proyectos educativos y personales.
        </p>
      </section>


      <section className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur">
        <h2 className="text-xl font-semibold mb-2">🤝 Conectemos</h2>
        <p>
          Abierto a colaboraciones en proyectos educativos y tecnológicos. Si compartís intereses o querés intercambiar ideas, ¡estás invitado a conectar!
        </p>
      </section>
    </div>
  );
}
