import { useState } from "react";

export default function Minavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary text-primary p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Alejandra Rodríguez</h1>

        {/* Botón hamburguesa */}
        <button 
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" 
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-8 6h8" />
          </svg>
        </button>

        {/* Enlaces */}
        <div className={`absolute md:static top-16 right-0 w-full md:w-auto bg-secondary 
                md:bg-transparent flex flex-col md:flex-row space-y-4 md:space-y-0 
                md:space-x-6 p-4 md:p-0 transition-all duration-300 
                ${menuOpen ? "block" : "hidden"} md:flex`}>
          <a href="#about" className="hover:bg-primary/25 hover:text-white p-2 rounded transition duration-300">Sobre mí</a>
          <a href="#projects" className="hover:bg-primary/25 hover:text-white p-2 rounded transition duration-300">Proyectos</a>
          <a href="#contact" className="hover:bg-primary/25 hover:text-white p-2 rounded transition duration-300">Contacto</a>
        </div>
      </div>
    </nav>
  );
}