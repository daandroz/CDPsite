import React, { useState, useEffect } from 'react';

const logoWhite = '/img/logo2.webp';
const logoBlack = '/img/logo1.webp';

const Navbar = ({ refs, isDarkSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <>
      <nav
        className={`w-full px-6 py-4 flex justify-between items-center fixed top-0 z-50 h-[10vh]
        backdrop-blur-md bg-black/10 transition-colors duration-300
        ${isDarkSection ? 'md:text-black md:border-black' : 'md:text-white md:border-white'} text-white border-white
        border-b`}
      >
        {/* Logo */}
        <div className="pl-2 md:pl-10 flex items-center">
          {/* Imagen solo en mobile */}
          <img
            src={isDarkSection ? logoBlack : logoWhite}
            alt="Logo"
            className="h-12 md:hidden"
          />
          {/* Texto solo en desktop */}
          <div className="text-3xl font-black mix-blend-difference hidden md:block">
            LA CASA DE PIEDRA
          </div>
        </div>

        {/* Links (desktop only) */}
        <ul className="hidden md:flex md:flex-row md:items-center md:gap-8 md:pr-10 md:text-lg">
          <li>
            <a href="#nosotros" className="hover:text-purple-600 font-light">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#testimonios" className="hover:text-purple-600 font-light">
              Testimonios
            </a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-purple-600 font-light">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-purple-600 font-light">
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-5xl focus:outline-none z-50 pr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Overlay + Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Overlay desenfocado */}
          <div
            className="absolute inset-0 backdrop-blur-md bg-black/30"
            onClick={() => setIsOpen(false)}
          />
          {/* Menú móvil */}
          <ul className="absolute top-[10vh] left-0 w-full h-[90vh] z-50 flex flex-col items-center justify-center text-white text-5xl gap-10 bg-black/70 backdrop-blur-md">
            <li>
              <a
                href="#nosotros"
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-600 font-light"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-600 font-light"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-600 font-light"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-600 font-light"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;