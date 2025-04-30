import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Nosotros() {
  const nosotrosRef = useRef(null);
  const { ref: videoRef, inView: isVideoVisible } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const videoElementRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMute = () => {
    const video = videoElementRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <>
      <div className="nosotros-first-section h-[70vh] bg-[#78b9ca] flex flex-col justify-center items-center relative">
        <div
          ref={nosotrosRef}
          id="nosotros"
          className="text-white text-3xl md:text-7xl w-[65%] md:w-[55%] font-[Inter] font-black text-center m-10"
        >
          Transformar a través del cuerpo, la mente y la montaña
        </div>
        <div className="text-white md:text-normal w-[70%] md:w-[50%] font-[Inter] text-justify">
          Somos un equipo con más de 30 años de experiencia donde florecen{" "}
          <span className="font-bold">proyectos de transformación social</span>,
          como la Educación Contempl-Activa y Escalada consciente: Escuela de Escalada,
          que promueven el aprendizaje vivencial y el desarrollo humano.
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-35px] flex justify-center items-center">
          <div className="w-[70px] h-[70px] bg-[url('/img/arrow.png')] bg-contain bg-no-repeat animate-bounce"></div>
        </div>
      </div>

      <div className="nosotros-second-section h-[70vh] md:h-[50vh] flex flex-col md:flex-row text-white bg-[url('/img/montana-quienesomos.png')] bg-cover bg-center">
        <div className="h-[100%] md:w-[50vw]"></div>

        <div className="w-full md:w-[50vw] bg-[#4834d4] md:bg-[#5447b4]/90 flex flex-col justify-center items-center">
          <div className="w-[70%] m-10">
            A través de la escalada, ofrecemos clases para{" "}
            <span className="font-bold italic">niños, jóvenes y adultos</span>,
            en un ambiente inclusivo, seguro y retador.
          </div>
          <div className="w-[70%] mb-10">
            Entrenamos en rocódromo con la{" "}
            <span className="font-bold italic">
              mirada puesta en la montaña
            </span>
            , como medio para cultivar la confianza, la presencia y la conexión
            con la naturaleza. Aquí, cada ruta es una oportunidad para crecer
            desde adentro hacia afuera.
          </div>
        </div>
      </div>

      {/* Sección del video */}
      <div
        ref={videoRef}
        className="relative photo-section h-[70vh] w-full flex items-center justify-center bg-black overflow-hidden"
      >
        <video
          ref={videoElementRef}
          src={isMobile ? "/img/cdpsite-mobile.mov" : "/img/cdpsite-v1.mov"}
          className={`h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            isVideoVisible ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted={isMuted}
          playsInline
          loop
        />

        {/* Botón para mute/unmute */}
        {isVideoVisible && (
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-black/60 text-white px-3 py-2 rounded-full text-sm hover:bg-black/80 transition"
          >
            {isMuted ? "🔇 Activar Audio" : "🔊 Silenciar"}
          </button>
        )}
      </div>
    </>
  );
}

export default Nosotros;