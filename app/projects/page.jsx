"use client";

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-indigo-600 dark:text-indigo-400">
        Proyectos
      </h1>

      {/* Proyecto 1 */}
      <section className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur">
        <h2 className="text-xl font-semibold mb-2">💻 Portafolio Web Personal</h2>
        <h3 className="text-lg font-semibold">🔧 Tecnologías: Next.js, Tailwind CSS, Vercel</h3>
        <h3 className="text-lg font-semibold mt-1">📍 Proyecto individual</h3>
        <h3 className="text-lg font-semibold mt-1">🗓️ 2024</h3>
        <p className="text-lg font-playfair text-justify text-gray-800 dark:text-white mt-4">
          Sitio creado con Next.js para presentar mi trayectoria como educador y desarrollador web en formación.
          Incluye mis proyectos, habilidades técnicas, experiencia laboral y sección de contacto. Este portafolio
          está optimizado para modo oscuro, es responsivo y fue desplegado en Vercel.
        </p>
      </section>

      {/* Proyecto 2 */}
      <section className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur">
        <h2 className="text-xl font-semibold mb-2">📚 Guía Interactiva de Estudios Sociales</h2>
        <h3 className="text-lg font-semibold">🔧 Tecnologías: HTML, CSS, JavaScript</h3>
        <h3 className="text-lg font-semibold mt-1">📍 Proyecto educativo</h3>
        <h3 className="text-lg font-semibold mt-1">🗓️ 2023</h3>
        <p className="text-lg font-playfair text-justify text-gray-800 dark:text-white mt-4">
          Plataforma pensada para estudiantes de secundaria en Costa Rica. Incluye mapas interactivos,
          actividades autogestionables y materiales de apoyo que facilitan el aprendizaje en Estudios Sociales
          y Educación Cívica. Utiliza HTML, CSS y JavaScript puro con enfoque didáctico.
        </p>
      </section>

      {/* Proyecto 3 */}
      <section className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur">
        <h2 className="text-xl font-semibold mb-2">📝 App de Tareas con Vue</h2>
        <h3 className="text-lg font-semibold">🔧 Tecnologías: Vue.js, LocalStorage</h3>
        <h3 className="text-lg font-semibold mt-1">📍 Proyecto de práctica</h3>
        <h3 className="text-lg font-semibold mt-1">🗓️ 2024</h3>
        <p className="text-lg font-playfair text-justify text-gray-800 dark:text-white mt-4">
          Aplicación web para gestionar tareas personales. Permite agregar, marcar como completadas y eliminar
          tareas. Almacena la información localmente con LocalStorage. El objetivo fue practicar la reactividad
          y la comunicación entre componentes en Vue.js.
        </p>
      </section>

      {/* Proyecto 4 */}
      <section className="bg-white/70 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur">
        <h2 className="text-xl font-semibold mb-2">📈 Panel de Seguimiento de Estudiantes</h2>
        <h3 className="text-lg font-semibold">🔧 Tecnologías: React, Tailwind, JSON</h3>
        <h3 className="text-lg font-semibold mt-1">📍 Proyecto para educación</h3>
        <h3 className="text-lg font-semibold mt-1">🗓️ En desarrollo</h3>
        <p className="text-lg font-playfair text-justify text-gray-800 dark:text-white mt-4">
          Aplicación que permite registrar el progreso académico de estudiantes por temas, indicadores y desempeño.
          Pensado para docentes de secundaria, facilita el seguimiento y retroalimentación personalizada. En el
          futuro podría integrarse con bases de datos reales y autenticación.
        </p>
      </section>
    </div>
  );
}
