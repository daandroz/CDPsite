import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import emailjs from '@emailjs/browser';
import Footer from './footer';

// Claves pegadas directamente en código para que funcione en GitHub Pages
const SERVICE_ID = "service_9ypzsdp";
const TEMPLATE_ID = "template_lrlua6t";
const PUBLIC_KEY = "JTkgeHf5iUW7v_C28";

const MySwal = withReactContent(Swal);

const cursosDisponibles = [
  "Entrenamiento Grupal en Rocódromo",
  "Autogestión del Entrenamiento en Escalada",
  "Curso Básico de Escalada en Roca",
  "Curso Intermedio de Multilargos",
  "Programa ENCANDENA",
  "Curso de Seguridad: Escalada en YoYo",
  "Curso de Seguridad: Escalada en Punta",
  "Planificación Personal de Entrenamiento",
  "Sesiones de Entrenamiento Personal",
];

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    celular: '',
    email: '',
    programa: '',
    notas: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappLink = () => {
    const { nombre, celular, email, programa, notas } = formData;
    const mensaje = `Hola, me gustaría más información.%0A
Nombre: ${nombre || "No especificado"}%0A
Celular: ${celular || "No especificado"}%0A
Email: ${email || "No especificado"}%0A
Programa: ${programa || "No especificado"}%0A
Notas: ${notas || "Ninguna"}`;
    return `https://wa.me/528115310535?text=${mensaje}`;
  };

  const sendEmail = () => {
    const { nombre, celular, email, programa, notas } = formData;

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { nombre, celular, email, programa, notas },
      PUBLIC_KEY
    ).then(() => {
      MySwal.fire({
        icon: 'success',
        title: '¡Correo enviado!',
        text: 'Te hemos enviado un correo de confirmación.',
        confirmButtonColor: '#817cff',
        background: '#f9f9fc',
        customClass: { popup: 'rounded-lg shadow-xl' }
      });
    }).catch(() => {
      MySwal.fire({
        icon: 'error',
        title: 'Error al enviar correo',
        text: 'No se pudo enviar el correo. Intenta más tarde.',
        confirmButtonColor: '#817cff',
        background: '#fdf1f1',
        customClass: { popup: 'rounded-lg shadow-xl' }
      });
    });
  };

  const handleSubmit = (e, viaWhatsapp = true) => {
    e.preventDefault();

    const { nombre, celular, email, programa } = formData;

    if (!viaWhatsapp && (!nombre || !celular || !email || !programa)) {
      MySwal.fire({
        icon: 'warning',
        title: 'Información incompleta',
        text: 'Por favor llena nombre, email y programa para enviar por email.',
        confirmButtonColor: '#817cff',
        background: '#fff8f8',
        customClass: { popup: 'rounded-lg shadow-xl' }
      });
      return;
    }

    if (viaWhatsapp) {
      window.open(whatsappLink(), "_blank");
    } else {
      sendEmail();
    }

    setFormData({ nombre: '', celular: '',  email: '', programa: '', notas: '' });
  };

  return (
    <div id="contacto" className="relative flex flex-col min-h-screen bg-white">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="w-full md:w-1/2 bg-[#4834d4] text-white flex items-center justify-center px-6 py-12">
          <div className="max-w-md w-full">
            <h2 className="font-extralight">Pláticanos tus necesidades.</h2>
            <h1 className="text-4xl mb-8 font-bold">Contáctanos</h1>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <label className="font-extralight">
                Nombre
                <input
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 bg-gray-300 text-black rounded text-sm"
                  placeholder="Tu nombre"
                />
              </label>

              <label className="font-extralight">
                Celular
                <input
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 bg-gray-300 text-black rounded text-sm"
                  placeholder="81 1234 5678"
                />
              </label>

              <label className="font-extralight">
                Email
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 bg-gray-300 text-black rounded text-sm"
                  placeholder="tucorreo@email.com"
                />
              </label>

              <label className="font-extralight">
                Programa / sesión / curso
                <select
                  name="programa"
                  value={formData.programa}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 bg-gray-300 text-black rounded text-sm"
                >
                  <option value="">Selecciona un curso</option>
                  {cursosDisponibles.map((curso, idx) => (
                    <option key={idx} value={curso}>{curso}</option>
                  ))}
                </select>
              </label>

              <label className="font-extralight">
                Notas
                <textarea
                  name="notas"
                  rows="3"
                  value={formData.notas}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 bg-gray-300 text-black rounded text-sm"
                  placeholder="Escribe aquí tus dudas o comentarios"
                />
              </label>

              <div className="flex flex-col md:flex-row justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  className="bg-[#817cff] text-white font-extralight text-sm px-4 py-2 rounded cursor-pointer touch-manipulation"
                >
                  Enviar WhatsApp
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, false)}
                  className="bg-[#7bed9f] text-black font-extralight text-sm px-4 py-2 rounded cursor-pointer touch-manipulation"
                >
                  Enviar Email
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden md:block w-1/2 bg-[url('/img/contact-bg.webp')] bg-cover bg-center" />
      </div>

      <div className="block md:hidden w-full h-60 bg-[url('/img/contact-bg.webp')] bg-cover bg-center" />

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;