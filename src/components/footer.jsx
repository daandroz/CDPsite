import React from 'react';

function Footer() {
  return (
    <div className="absolute bottom-0 left-0 w-full px-6 py-3 z-10 text-white text-sm 
                    flex flex-col md:flex-row justify-between items-center
                    bg-black/40 backdrop-blur-sm">
      <div className="font-semibold drop-shadow-md mb-1 md:mb-0">© 2025 Casa de Piedra</div>
      <div className="font-semibold drop-shadow-md mb-1 md:mb-0">Mty, N.L. México.</div>
      <div className="flex gap-4 font-semibold drop-shadow-md">
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