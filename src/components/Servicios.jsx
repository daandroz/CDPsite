import React from 'react'

const servicios = [
  {
    duration: "3 días",
    serviceType: "Documento",
    serviceTitle: "Planificación Personal de Entrenamiento",
    serviceDescription: "Diagnóstico y diseño de tu programa de entrenamiento para escalar",
    image: "https://cdn.sanity.io/images/yb9xf4jc/production/e470f77c327e86457795c994350b75f4d484a4d6-600x400.jpg",
  },
  {
    duration: "1 día",
    serviceType: "Sesión",
    serviceTitle: "Sesiones de Entrenamiento Personal",
    serviceDescription: "Una hora enfocada 100% en ti. Técnica, fuerza o táctica, tú eliges la prioridad.",
    image: "https://cdn.sanity.io/images/yb9xf4jc/production/e470f77c327e86457795c994350b75f4d484a4d6-600x400.jpg",
  },
  {
    duration: "8 horas al mes",
    serviceType: "Curso",
    serviceTitle: "Entrenamiento Grupal en Rocódromo",
    serviceDescription: "Entrena en grupo con acompañamiento profesional y una comunidad que empuja contigo.",
    image: "https://cdn.sanity.io/images/yb9xf4jc/production/e470f77c327e86457795c994350b75f4d484a4d6-600x400.jpg",
  },
  {
    duration: "3 días",
    serviceType: "Curso",
    serviceTitle: "Autogestión del Entrenamiento en Escalada",
    serviceDescription: "Curso completo para que diseñes y gestiones tu propio entrenamiento, ideal si ya tienes experiencia.",
    image: "https://cdn.sanity.io/images/yb9xf4jc/production/e470f77c327e86457795c994350b75f4d484a4d6-600x400.jpg",
    
  },
  {
    duration: "2 sesiones",
    serviceType: "Sesiones",
    serviceTitle: "Curso de Seguridad: Escalada en YoYo",
    serviceDescription: "Aprende a asegurar y escalar con seguridad en modalidad top rope (yo-yo).",
    image: "https://cdn.sanity.io/images/yb9xf4jc/production/e470f77c327e86457795c994350b75f4d484a4d6-600x400.jpg",
    
  },
  {
    duration: "4 sesiones",
    serviceType: "Sesiones",
    serviceTitle: "Curso de Seguridad: Escalada en Punta",
    serviceDescription: "Sube de nivel: aprende a escalar y asegurar en punta de forma segura y técnica.",
    image: "https://cdn.sanity.io/images/yb9xf4jc/production/e470f77c327e86457795c994350b75f4d484a4d6-600x400.jpg",
    
  },
  
  {
    duration: "Indefinido",
    serviceType: "Curso",
    serviceTitle: "Curso Básico de Escalada en Roca",
    serviceDescription: "1 mes / 4 clases, Nivel 1 (12), nivel 2 (12), Aprende a moverte, leer roca, usar equipo y escalar con seguridad.",
    image: "https://cdn.sanity.io/images/yb9xf4jc/production/e470f77c327e86457795c994350b75f4d484a4d6-600x400.jpg",
    
  },
  {
    duration: "Indefinido",
    serviceType: "Curso",
    serviceTitle: "Curso Intermedio de Multilargos",
    serviceDescription: "Lleva tu escalada a nuevas alturas con técnicas para rutas de varios largos. Ideal si ya escalas en punta.",
    image: "https://cdn.sanity.io/images/yb9xf4jc/production/e470f77c327e86457795c994350b75f4d484a4d6-600x400.jpg",
    
  },
  {
    duration: "12 sesiones",
    serviceType: "Curso",
    serviceTitle: "Programa ENCANDENA",
    serviceDescription: "Entrena con foco en encadenar rutas. Mentalidad, técnica, descanso, proyección. ¡A romper tus límites!",
    image: "https://cdn.sanity.io/images/yb9xf4jc/production/e470f77c327e86457795c994350b75f4d484a4d6-600x400.jpg",
    
  },
]

function ServicioCard({ duration, serviceType, serviceTitle, serviceDescription, image }) {
    const whatsappMsg = `https://wa.me/528115310535?text=Hola Casa de Piedra! Estoy interesado en escalar y me interesa el paquete: ${encodeURIComponent(serviceTitle)}.`;
  
    return (
      <div className="w-full sm:w-[48%] md:w-[30%] p-3 flex flex-col justify-between">
        <img
          className="w-full h-[200px] md:h-[240px] object-cover rounded-t-2xl"
          src={image}
          alt={serviceTitle}
        />
        <div className="text-gray-400 text-sm md:text-base flex justify-between mt-2">
          <div className="flex items-center">
            <img className="inline-block w-5 mr-2" src="/img/calendar-icon.png" alt="duración" />
            {duration}
          </div>
          <div className="flex items-center">
            <img className="inline-block w-5 mr-2" src="/img/open-folder.png" alt="tipo" />
            {serviceType}
          </div>
        </div>
        <div className="border-l-2 border-gray-400 pl-4 my-3">
          <h3 className="text-black font-bold text-lg md:text-xl">{serviceTitle}</h3>
          <p className="text-gray-500 text-sm md:text-base mt-2">{serviceDescription}</p>
        </div>
        <a
          href={whatsappMsg}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-semibold text-sm md:text-base mt-auto flex items-center"
        >
          <img className="inline-block w-6 mr-2" src="/img/green-arrow-icon.png" alt="ver más" />
          Descubre más
        </a>
      </div>
    );
  }
  
  function Servicios() {
    return (
      <>
        <div className='text-white flex flex-col justify-center items-center h-[60vh] bg-[url("/img/hugo-header-servicios.png")] bg-cover bg-center'>
          <h2 className='font-black text-4xl md:text-6xl'>Servicios</h2>
          <p className='w-[85%] md:w-[50%] mt-5 text-justify font-light text-sm md:text-base'>
            Te acompañamos en tu camino como escalador, desde tus primeras clases en rocódromo, hasta escalar rutas reales en montaña. Entrena, aprende y conquista tus metas con nuestra comunidad y coaches especializados.
          </p>
        </div>
  
        <div className="bg-white py-10 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
            {servicios.map((servicio, index) => (
              <ServicioCard key={index} {...servicio} />
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default Servicios;