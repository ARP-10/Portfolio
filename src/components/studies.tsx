import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Studies() {
  return (
    <div className="bg-secondary/10">

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10">
        <h2 className="text-3xl font-bold text-center text-primary mb-10 relative">
          Formación y Experiencia
          <span className="block w-24 h-1 bg-tertiary rounded mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Estudio */}
          <div className="border-l-4 border-secondary bg-white shadow-sm p-4 flex items-start gap-4 rounded-md">
            <FaGraduationCap className="text-xl mt-1 shrink-0 text-primary hover:text-tertiary transition-transform hover:scale-110" />
            <div>
              <p className="font-semibold text-tertiary">2022-2024</p>
              <p className="text-sm">Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</p>
              <p className="text-sm text-gray-500">UEM - Madrid</p>
              <p className="text-sm">Formación intensiva en desarrollo móvil, web y de escritorio con tecnologías actuales.</p>
            </div>
          </div>

          {/* Experiencia */}
          <div className="border-l-4 border-secondary bg-white shadow-sm p-4 flex items-start gap-4 rounded-md">
            <FaBriefcase className="text-xl mt-1 shrink-0 text-primary hover:text-tertiary transition-transform hover:scale-110" />
            <div>
              <p className="font-semibold text-tertiary">2024</p>
              <p className="text-sm">Prácticas - FunTech Rocket</p>
              <p className="text-sm text-gray-500">Responsable de la web</p>
              <p className="text-sm">Encargado del mantenimiento y mejora del sitio web corporativo.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Estudio */}
          <div className="border-l-4 border-secondary bg-white shadow-sm p-4 flex items-start gap-4 rounded-md">
            <FaGraduationCap className="text-xl mt-1 shrink-0 text-primary hover:text-tertiary transition-transform hover:scale-110" />
            <div>
              <p className="font-semibold text-tertiary">2025</p>
              <p className="text-sm">Programación con Lenguajes Orientados a Objetos y Bases de Datos Relacionadas</p>
              <p className="text-sm text-gray-500">Ipartek - Bilbao</p>
              <p className="text-sm">Especialización en Java, Spring, MySQL y estructuras de datos aplicadas a proyectos reales.</p>
            </div>
          </div>

          {/* Experiencia */}
          <div className="border-l-4 border-secondary bg-white shadow-sm p-4 flex items-start gap-4 rounded-md">
            <FaBriefcase className="text-xl mt-1 shrink-0 text-primary hover:text-tertiary transition-transform hover:scale-110" />
            <div>
              <p className="font-semibold text-tertiary">2025</p>
              <p className="text-sm">Prácticas - [Nombre de la empresa]</p>
              <p className="text-sm text-gray-500">[Puesto o actividad]</p>
              <p className="text-sm">[Frase descriptiva opcional, puedes completarla cuando tengas más detalles]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
