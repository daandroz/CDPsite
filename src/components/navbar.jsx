import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full px-0 py-4 flex justify-between items-center  outline outline-1 outline-white fixed top-0 z-100 h-[10vh] backdrop-blur-xs">
      <div className="text-xl font-black pl-10 md:pl-30 text-white mix-blend-difference">
        CASA DE PIEDRA
      </div>

      {/* Menú móvil y desktop */}
      <ul
        className={`${
          isOpen ? "flex h-screen" : "hidden"
        } flex-col absolute top-full left-0 w-full backdrop-blur bg-black/60 text-white text-4xl items-center gap-6 py-6
  md:flex md:flex-row md:static md:w-[30%] md:pr-20 md:bg-transparent md:backdrop-blur-0 md:text-base md:gap-6 md:py-6 md:h-auto`}
      >
        <li>
          <a href="#inicio" className="hover:text-gray-700 font-extralight">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#servicios" className="hover:text-gray-700 font-extralight">
            Servicios
          </a>
        </li>
        <li>
          <a href="#contacto" className="hover:text-gray-700 font-extralight">
            Testimonios
          </a>
        </li>
        <li>
          <a href="#contacto" className="hover:text-gray-700 font-extralight">
            Contacto
          </a>
        </li>
      </ul>

      {/* Botón hamburguesa solo en mobile */}
      <button
        className="md:hidden text-white text-xl focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
}

export default Navbar