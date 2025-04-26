import React from 'react';

function Footer() {
  return (
    <div className="w-full bg-black/100 text-white text-m px-6 py-4 flex justify-between items-center font-semibold">
      <p>© 2025 Casa de Piedra</p>
      <p>MTY. N.L.</p>
      <div className="flex gap-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#817cff] transition">
          Facebook
        </a>
        <a href="https://wa.me/5215555555555" target="_blank" rel="noopener noreferrer" className="hover:text-[#7bed9f] transition">
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Footer;