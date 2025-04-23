import React from "react";

function Hero() {
  return (
    <>
      <div className="h-screen utline outline-1 outline-red-500 bg-[url('/img/huasteca-hero.jpeg')] bg-cover bg-center">
        <div className="hero-wrapper flex flex-col justify-center h-full pl-25">
          <div className="hero-text w-[70%] text-8xl text-white font-[Inter] font-black mt-15">
            Aprende, crece y desarrolla tus habilidades como escalador
          </div>
          <div className="hero-secondary-text text-xl text-white font-[Inter] font-normal mt-1">
            Conviértete en la mejor versión de ti mismo mientras desafías la
            gravedad.
          </div>
          <div className="button-wrapper w-[20%] flex flex-row justify-around mt-9">
            <button className="bg-[#4834d4] p-2 rounded text-white">
              Explora ahora
            </button>
            <button className="bg-[#6d5ddd] p-2 rounded text-white">
              Explora ahora
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
