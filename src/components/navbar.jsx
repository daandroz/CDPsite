import React from 'react'

const Navbar = () => {
  return (
    
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md">
      <div className="text-xl font-bold">CDPLogo</div>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><a href="#inicio" className="hover:text-blue-500">Inicio</a></li>
        <li><a href="#servicios" className="hover:text-blue-500">Servicios</a></li>
        <li><a href="#contacto" className="hover:text-blue-500">Contacto</a></li>
      </ul>
      <button className="md:hidden text-gray-700 focus:outline-none">
        {/* Aquí iría un ícono de menú (hamburguesa) si decides usar uno */}
        ☰
      </button>
    </nav>
  )
}

export default Navbar