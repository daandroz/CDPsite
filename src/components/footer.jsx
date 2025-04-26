import React from 'react';

function Footer() {
  return (
    <div className="absolute bottom-0 left-0 w-full text-white text-m px-6 py-3 flex justify-between items-center z-10 bg-black/20 backdrop-blur-sm">
      <p className="ml-4 font-semibold drop-shadow-md">© 2025 Casa de Piedra</p>
      <p className="ml-4 font-semibold drop-shadow-md">Mty, N.L. México.</p>
      <div className="mr-4 flex gap-4 font-semibold drop-shadow-md">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#817cff] transition"
        >
          Facebook
        </a>
        <a
          href="https://wa.me/5215555555555"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#7bed9f] transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Footer;