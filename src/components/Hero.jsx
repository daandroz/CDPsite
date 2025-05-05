import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Espera un pequeño tiempo para forzar el render y que se note la transición
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // puedes ajustar el tiempo si lo deseas

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Helmet>
        <title>Escalada Consciente Monterrey | Aprende y Desafía la Gravedad</title>
        <meta
          name="description"
          content="Cursos de escalada en Monterrey para todos los niveles. Desarrolla tu técnica, mente y cuerpo mientras te conectas con la naturaleza."
        />
        <meta property="og:title" content="Escalada Consciente Monterrey" />
        <meta
          property="og:description"
          content="Desarrolla tus habilidades como escalador en montaña y crece en un entorno natural con nuestros programas personalizados."
        />
        <meta property="og:image" content="/img/huasteca-hero.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://escaladaconsciente.mx" />
        <meta name="keywords" content="escalada, Monterrey, cursos de escalada, escalada deportiva, coaching de escalada, naturaleza, crecimiento personal" />
      </Helmet>

      <div className="hero-section h-screen bg-[url('/img/huasteca-hero.webp')] bg-cover bg-center overflow-x-hidden">
        <div className="hero-wrapper flex flex-col justify-center h-full px-6 md:pl-25">
          <div
            className={`hero-text text-center md:text-left w-full md:w-[70%] text-4xl md:text-8xl text-white font-[Inter] font-black mt-10 md:mt-15 transition-all duration-1000 ease-[cubic-bezier(0.33,_1,_0.68,_1)] transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            Aprende, crece y desarrolla tus habilidades como escalador
          </div>

          <div className="hero-secondary-text text-center md:text-left text-base md:text-xl text-white font-[Inter] font-normal mt-4 md:mt-1">
            Conviértete en la mejor versión de ti mismo mientras desafías la gravedad.
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 w-full">
            <a href="#testimonios">
              <button className="bg-[#4834d4] w-[208px] px-6 py-3 rounded text-white text-sm sm:text-base animate-pulse text-center whitespace-nowrap mx-auto sm:mx-0">
                Explora ahora
              </button>
            </a>
            <a href="#servicios">
              <button className="bg-[#6d5ddd] w-[208px] px-6 py-3 rounded text-white text-sm sm:text-base text-center whitespace-nowrap mx-auto sm:mx-0">
                Nuestros paquetes
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;