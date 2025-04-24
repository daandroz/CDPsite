import React from 'react'

function Contact() {
  return (
    <>
      <div className="contact-wrapper h-screen flex flex-row bg-white">
        <div className="form w-[40%] bg-[#4834d4]">
          <div className="h-full flex flex-col items-center justify-center px-6 my-15 text-white">
            <div className="max-w-md w-full">
              <h2 className="font-extralight">Pláticanos tus necesidades.</h2>
              <h1 className="text-4xl  mb-8">Contáctanos</h1>

              <form className="flex flex-col gap-4">
                <label className="font-extralight">
                  Nombre
                  <input
                    type="text"
                    className="w-full mt-1 p-2 bg-gray-300 text-black rounded"
                  />
                </label>

                <label className="font-extralight">
                  Email
                  <input
                    type="email"
                    className="w-full mt-1 p-2 bg-gray-300 text-black rounded"
                  />
                </label>

                <label className="font-extralight">
                  Programa / sesión / curso
                  <input
                    type="text"
                    className="w-full mt-1 p-2 bg-gray-300 text-black rounded"
                  />
                </label>

                <label className="font-extralight">
                  Notas
                  <textarea
                    rows="4"
                    className="w-full mt-1 p-2 bg-gray-300 text-black rounded"
                  ></textarea>
                </label>

                <div className="button-wrapper flex justify-end gap-4 mt-4">
                  <a
                    href="https://wa.me/5215555555555?text=Hola%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20programas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white font-extralight px-4 py-2 rounded text-center"
                  >
                    Whatsapp
                  </a>
                  <button
                    type="submit"
                    className="bg-[#817cff] text-white font-extralight px-4 py-2 rounded"
                  >
                    Enviar
                  </button>
                </div>
                <div className='icon-wrapper flex justify-'>
                    <img className='inline-block m-2' src="/img/fb-icon.png" alt="" />
                    <img className='inline-block m-2' src="/img/wa-icon.png" alt="" />

                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-[url('/img/contact-bg.png')] bg-cover bg-center w-[60%] flex flex-col justify-end ">
        <div className='contact-footer flex flex-row justify-between mb-10'>
            <div className='text-white font-bold ml-20'>MTY,N.L.</div>
            <div className='text-white font-bold mr-20'>CASA DE PIEDRA</div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Contact