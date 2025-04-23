import React from 'react'

const Navbar = () => {
  return (
    
    <nav className="w-full px-6 py-4 flex justify-between items-center outline outline-1 outline-white fixed top-0 z-100 h-[10vh] backdrop-blur-xs">
      <div className="text-xl font-black pl-30 text-white">CASA DE PIEDRA</div>
      <ul className="flex flex-row justify-between text-white w-[37%] pr-20">
        <li><a href="#inicio" className="hover:text-gray-700 text-white font-extralight">Nosotros</a></li>
        <li><a href="#servicios" className="hover:text-gray-700 text-white font-extralight">Servicios</a></li>
        <li><a href="#contacto" className="hover:text-gray-700 text-white font-extralight">Testimonios</a></li>
        <li><a href="#contacto" className="hover:text-gray-700 text-white font-extralight">Contacto</a></li>
      </ul>
      <button className="md:hidden text-gray-700 focus:outline-none">
        {/* Aquí iría un ícono de menú (hamburguesa) si decides usar uno */}
        ☰
      </button>
    </nav>
  )
}

export default Navbar