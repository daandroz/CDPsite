import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import emailjs from '@emailjs/browser';
import Footer from './Footer'; // Footer importado

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const MySwal = withReactContent(Swal);

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    programa: '',
    notas: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappLink = () => {
    const { nombre, email, programa, notas } = formData;
    const mensaje = `Hola, me gustaría más información.%0A
Nombre: ${nombre || "No especificado"}%0A
Email: ${email || "No especificado"}%0A
Programa: ${programa || "No especificado"}%0A
Notas: ${notas || "Ninguna"}`;
    return `https://wa.me/5215555555555?text=${mensaje}`; // Cambia el número real
  };

  const sendEmail = () => {
    const { nombre, email, programa, notas } = formData;

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { nombre, email, programa, notas },
      PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      MySwal.fire({
        icon: 'success',
        title: '¡Correo enviado!',
        text: 'Te hemos enviado un correo de confirmación.',
        confirmButtonColor: '#817cff',
        background: '#f9f9fc',
        customClass: {
          popup: 'rounded-lg shadow-xl'
        }
      });
    }, (error) => {
      console.error(error.text);
      MySwal.fire({
        icon: 'error',
        title: 'Error al enviar correo',
        text: 'No se pudo enviar el correo. Intenta más tarde.',
        confirmButtonColor: '#817cff',
        background: '#fdf1f1',
        customClass: {
          popup: 'rounded-lg shadow-xl'
        }
      });
    });
  };

  const handleSubmit = async (e, viaWhatsapp = true) => {
    e.preventDefault();

    const { nombre, email, programa } = formData;

    if (!nombre || !email || !programa) {
      MySwal.fire({
        icon: 'warning',
        title: 'Faltan datos importantes',
        text: 'Por favor llena todos los campos obligatorios (nombre, email y programa).',
        confirmButtonColor: '#817cff',
        background: '#f9f9fc',
        customClass: {
          popup: 'rounded-lg shadow-xl'
        }
      });
      return;
    }

    try {
      await addDoc(collection(db, "clientes"), formData);

      if (viaWhatsapp) {
        MySwal.fire({
          icon: 'success',
          title: '¡Gracias!',
          text: 'Tu información ha sido enviada con éxito. Te llevamos a WhatsApp...',
          confirmButtonColor: '#817cff',
          background: '#f9f9fc',
          customClass: {
            popup: 'rounded-lg shadow-xl'
          }
        }).then(() => {
          window.open(whatsappLink(), "_blank");
        });
      } else {
        sendEmail();
      }

      setFormData({ nombre: '', email: '', programa: '', notas: '' });
    } catch (err) {
      console.error("Error al enviar: ", err);
      MySwal.fire({
        icon: 'error',
        title: 'Error al enviar',
        text: 'No pudimos enviar tu mensaje. Intenta de nuevo más tarde.',
        confirmButtonColor: '#817cff',
        background: '#fdf1f1',
        customClass: {
          popup: 'rounded-lg shadow-xl'
        }
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Main content */}
      <div className="flex flex-1 flex-row">
        <div className="w-[40%] bg-[#4834d4]">
          <div className="h-full flex flex-col items-center justify-center px-6 text-white">
            <div className="max-w-md w-full">
              <h2 className="font-extralight">Pláticanos tus necesidades.</h2>
              <h1 className="text-4xl mb-8">Contáctanos</h1>

              <form className="flex flex-col gap-4">
                <label className="font-extralight">
                  Nombre
                  <input
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 bg-gray-300 text-black rounded"
                  />
                </label>

                <label className="font-extralight">
                  Email
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 bg-gray-300 text-black rounded"
                  />
                </label>

                <label className="font-extralight">
                  Programa / sesión / curso
                  <input
                    name="programa"
                    value={formData.programa}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 bg-gray-300 text-black rounded"
                  />
                </label>

                <label className="font-extralight">
                  Notas
                  <textarea
                    name="notas"
                    rows="4"
                    value={formData.notas}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 bg-gray-300 text-black rounded"
                  />
                </label>

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(e, true)}
                    className="cursor-pointer bg-[#817cff] text-white font-extralight px-4 py-2 rounded"
                  >
                    Enviar WhatsApp
                  </button>

                  <button
                    type="submit"
                    onClick={(e) => handleSubmit(e, false)}
                    className="cursor-pointer bg-[#7bed9f] text-black font-extralight px-4 py-2 rounded"
                  >
                    Enviar Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-[60%] bg-[url('/img/contact-bg.png')] bg-cover bg-center" />
      </div>

      {/* Footer abajo */}
      <Footer />

    </div>
  );
}

export default Contact;