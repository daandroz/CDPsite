import React from 'react'

const servicios = [
    {
      duration: "3 días",
      serviceType: "Entrega",
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
      serviceType: "Sesión",
      serviceTitle: "Entrenamiento Grupal en Rocódromo",
      serviceDescription: "Entrena en grupo con acompañamiento profesional y una comunidad que empuja contigo.",
      image: "https://cdn.sanity.io/images/yb9xf4jc/production/e470f77c327e86457795c994350b75f4d484a4d6-600x400.jpg",

    },
  ];

function Servicios() {
  return (
    <>
    <div className='servicios-header text-white flex flex-col justify-center items-center h-[60vh] bg-[url("/img/underside-climber.png")] bg-cover bg-center'>
        <div className=' font-black text-6xl md:text-6xl'>
            Servicios
        </div>
        <div className=' w-[65%] md:w-[35%] mt-5 text-justify font-extralight'>
        Te acompañamos en tu camino como escalador, desde tus primeras clases en rocódromo, hasta escalar rutas reales en montaña. Entrena, aprende y conquista tus metas con nuestra comunidad y coaches especializados.
        </div>
    </div>
    <div className='card-outer bg-white h-auto flex flex-row justify-center'>
        <div className='card-inner text-white w-[88%] text-white flex flex-wrap flex-col md:flex-row justify-around mt-10'>
            <div className='card w-full md:w-[30%] md:my-10'>
                <img className='w-[100%] h-[283px] rounded-t-4xl' src="/img/card-sample-image.png" alt="" />
                <div className='time flex flex-row justify-between mt-2'>
                    <div className='text-gray-400 text-xl'>
                        <img className='inline-block mr-2' src="/img/calendar-icon.png" alt="" />
                        3 dias
                        </div>
                    <div className='text-gray-400 text-xl'>
                    <img className='inline-block mr-2' src="/img/open-folder.png" alt="" />

                        Entrega</div>
                </div>
                <div className='card-text w-[90%] border-l-2 border-gray-400 pl-10 my-4'>
                    <div className='service-name text-black font-black text-2xl'>Planificación Personal de Entrenamiento</div>
                    <div className='service-description text-gray-400 mt-3 mb-8'>Diagnóstico y diseño de tu programa de entrenamiento para escalar</div>
                </div>
                <div className='card-button text-black text-2xl'>
                    <img className='inline-block w-[42px] mr-3' src="/img/green-arrow-icon.png" alt="" />
                    <div className='inline-block mt-1'>
                    Descubre más
                    </div>
                </div>
            </div>
            <div className='card w-full md:w-[30%] my-10'>
                <img className='w-[100%] h-[283px] rounded-t-4xl' src="/img/card-sample-image.png" alt="" />
                <div className='time flex flex-row justify-between mt-2'>
                    <div className='text-gray-400 text-xl'>
                        <img className='inline-block mr-2' src="/img/calendar-icon.png" alt="" />
                        3 dias
                        </div>
                    <div className='text-gray-400 text-xl'>
                    <img className='inline-block mr-2' src="/img/open-folder.png" alt="" />

                        Entrega</div>
                </div>
                <div className='card-text w-[90%] border-l-2 border-gray-400 pl-10 my-4'>
                    <div className='service-name text-black font-black text-2xl'>Planificación Personal de Entrenamiento</div>
                    <div className='service-description text-gray-400 mt-3 mb-8'>Diagnóstico y diseño de tu programa de entrenamiento para escalar</div>
                </div>
                <div className='card-button text-black text-2xl'>
                    <img className='inline-block w-[42px] mr-3' src="/img/green-arrow-icon.png" alt="" />
                    <div className='inline-block mt-1'>
                    Descubre más
                    </div>
                </div>
            </div>
            <div className='card w-full md:w-[30%] my-10'>
                <img className='w-[100%] h-[283px] rounded-t-4xl' src="/img/card-sample-image.png" alt="" />
                <div className='time flex flex-row justify-between mt-2'>
                    <div className='text-gray-400 text-xl'>
                        <img className='inline-block mr-2' src="/img/calendar-icon.png" alt="" />
                        3 dias
                        </div>
                    <div className='text-gray-400 text-xl'>
                    <img className='inline-block mr-2' src="/img/open-folder.png" alt="" />

                        Entrega</div>
                </div>
                <div className='card-text w-[90%] border-l-2 border-gray-400 pl-10 my-4'>
                    <div className='service-name text-black font-black text-2xl'>Planificación Personal de Entrenamiento</div>
                    <div className='service-description text-gray-400 mt-3 mb-8'>Diagnóstico y diseño de tu programa de entrenamiento para escalar</div>
                </div>
                <div className='card-button text-black text-2xl'>
                    <img className='inline-block w-[42px] mr-3' src="/img/green-arrow-icon.png" alt="" />
                    <div className='inline-block mt-1'>
                    Descubre más
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Servicios