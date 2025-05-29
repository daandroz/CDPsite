import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [useHeavyImage, setUseHeavyImage] = useState(true);

  useEffect(() => {
    // Detecta tipo de red y decide si cargar imagen pesada
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slowTypes = ["slow-2g", "2g", "3g"];
    if (connection && slowTypes.includes(connection.effectiveType)) {
      setUseHeavyImage(false); // no cargar fondo pesado
    }

    const img = new Image();
    img.src = useHeavyImage ? "/img/huasteca-hero.webp" : "/img/huasteca-hero-light.jpg";
    img.onload = () => {
      setBgLoaded(true);
    };
  }, [useHeavyImage]);

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
        <meta property="og:image" content="/img/huasteca-hero.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lacasadepiedra.mx" />
        <meta name="keywords" content="escalada, Monterrey, cursos de escalada, escalada deportiva, coaching de escalada, naturaleza, crecimiento personal, climbing, lead climb, cursos y programas de escalada Monterrey" />

        {/* Preload solo si se va a usar la imagen pesada */}
        {useHeavyImage && (
          <link rel="preload" as="image" href="/img/huasteca-hero.webp" />
        )}
      </Helmet>

      <div className="hero-section h-screen overflow-x-hidden relative">
        {/* Imagen con <picture> adaptativa */}
        <picture>
          <source
            srcSet="/img/huasteca-hero.webp"
            type="image/webp"
            media="(min-width: 640px)"
          />
          <img
            src={useHeavyImage ? "/img/huasteca-hero.webp" : "/img/huasteca-hero-light.jpg"}
            alt="Escalada en la Huasteca"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              bgLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading={useHeavyImage ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={useHeavyImage ? "high" : "low"}
          />
        </picture>

        {/* Placeholder en baja calidad */}
        {!bgLoaded && (
          <img
            src="/img/huasteca-hero-lazy.jpg"
            alt="Preload bajo"
            className="absolute inset-0 w-full h-full object-cover object-center blur-md"
            loading="lazy"
          />
        )}

        {/* Contenido */}
        <div className="hero-wrapper relative z-10 flex flex-col justify-center h-full px-6 md:pl-25 bg-black/10">
          <h1 className="hero-text text-center md:text-left w-full md:w-[70%] text-4xl md:text-8xl text-white font-black mt-10 md:mt-15 font-[Inter]">
            Aprende, crece y desarrolla tus habilidades como escalador
          </h1>

          <p className="hero-secondary-text text-center md:text-left text-base md:text-xl text-white font-normal mt-4 md:mt-1 font-[Inter]">
            Conviértete en la mejor versión de ti mismo mientras desafías la gravedad.
          </p>

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