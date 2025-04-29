import React, { useState } from 'react';

const Navbar = ({ refs, isDarkSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full px-6 py-4 flex justify-between items-center fixed top-0 z-50 h-[10vh]
      backdrop-blur-md bg-black/10 transition-colors duration-300
      ${isDarkSection ? 'text-black border-black' : 'text-white border-white'}
      border-b`}
    >
      {/* Logo */}
      <div className="text-3xl font-black pl-2 md:pl-10 mix-blend-difference">
        CASA DE PIEDRA
      </div>

      {/* Links */}
      <ul className={`${
  isOpen ? "flex h-screen bg-black/70 backdrop-blur-md" : "hidden"
} flex-col absolute top-full left-0 w-full text-5xl items-center gap-10 py-10
  md:flex md:flex-row md:static md:w-auto md:pr-10 
  md:bg-transparent md:backdrop-blur-0 md:text-lg md:gap-8 md:py-0 md:h-auto`}
>
        <li>
          <a href="#nosotros" onClick={() => setIsOpen(false)} className="hover:text-purple-600 font-light">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#testimonios" onClick={() => setIsOpen(false)} className="hover:text-purple-600 font-light">
            Testimonios
          </a>
        </li>
        <li>
          <a href="#servicios" onClick={() => setIsOpen(false)} className="hover:text-purple-600 font-light">
            Servicios
          </a>
        </li>
        <li>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-purple-600 font-light">
            Contacto
          </a>
        </li>
      </ul>

      {/* Botón hamburguesa */}
      <button
        className="md:hidden text-5xl focus:outline-none z-50 pr-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;