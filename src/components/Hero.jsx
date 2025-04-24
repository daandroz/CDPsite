import React from "react";


function Hero() {
  return (
    <>
      <div className="h-screen bg-[url('/img/huasteca-hero.jpeg')] bg-cover bg-center">
        <div className="hero-wrapper flex flex-col justify-center h-full px-6 md:pl-25">
          <div className="hero-text text-center md:text-left w-full  md:w-[70%] text-4xl md:text-8xl text-white font-[Inter] font-black mt-10 md:mt-15 animate__fadeInLeft">
            Aprende, crece y desarrolla tus habilidades como escalador
          </div>
          <div className="hero-secondary-text text-center md:text-left text-base md:text-xl text-white font-[Inter] font-normal mt-4 md:mt-1">
            Conviértete en la mejor versión de ti mismo mientras desafías la
            gravedad.
          </div>
          <div className="flex flex-row justify-between gap-2 mt-8 w-full md:w-[30%]">
            <button className="bg-[#4834d4] px-4 py-2  rounded text-white flex-1 animate-pulse">
              Explora ahora
            </button>
            <button className="bg-[#6d5ddd] px-4 py-2 rounded text-white flex-1">
              Explora ahora
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
