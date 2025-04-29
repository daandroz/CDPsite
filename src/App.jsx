import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Contact from "./components/Contact";
import Testimonios from "./components/testimonios/testimonios";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

function App() {
  // Refs para scroll manual
  const heroRef = useRef(null);
  const nosotrosRef = useRef(null);
  const testimoniosRef = useRef(null);
  const serviciosRef = useRef(null);
  const contactoRef = useRef(null);

  // Intersection observers independientes
  const { ref: testimoniosInViewRef, inView: isTestimoniosInView } = useInView({
    threshold: 0.2, // Umbral bajo para capturar la sección en cuanto se empieza a mostrar
  });
  const { ref: serviciosInViewRef, inView: isServiciosInView } = useInView({
    threshold: 0.2, // Umbral bajo para capturar la sección en cuanto se empieza a mostrar
  });
  const { ref: contactoInViewRef, inView: isContactoInView } = useInView({
    threshold: 1, // Solo se activa cuando la sección de Contacto está completamente visible
    rootMargin: "-100px 0px", // Ajusta para evitar que detecte antes de tiempo
  });

  // Color del texto según en qué sección estoy
  const shouldUseBlackText = isTestimoniosInView || isServiciosInView; // Negro si estamos en Testimonios o Servicios
  const shouldUseWhiteText = isContactoInView; // Blanco cuando Contacto está completamente visible

  return (
    <div
      className={`App ${
        shouldUseWhiteText
          ? "text-white"
          : shouldUseBlackText
          ? "text-black"
          : "text-white"
      } transition-colors duration-500`}
    >
      {/* Navbar */}
      <Navbar
        refs={{ heroRef, nosotrosRef, testimoniosRef, serviciosRef, contactoRef }}
        isDarkSection={shouldUseBlackText && !shouldUseWhiteText}
      />

      {/* Secciones */}
      <section id="hero" ref={heroRef} className="min-h-screen bg-white">
        <Hero />
      </section>

      <section id="nosotros" ref={nosotrosRef} className="min-h-screen bg-white">
        <Nosotros />
      </section>

      <section
        id="testimonios"
        ref={(el) => {
          testimoniosRef.current = el;
          testimoniosInViewRef(el);
        }}
      >
        <Testimonios />
      </section>

      <section
        id="servicios"
        ref={(el) => {
          serviciosRef.current = el;
          serviciosInViewRef(el);
        }}
        className="min-h-screen bg-black"
      >
        <Servicios />
      </section>

      <section
        id="contacto"
        ref={(el) => {
          contactoRef.current = el;
          contactoInViewRef(el);
        }}
        className="min-h-screen bg-white"
      >
        <Contact />
      </section>
    </div>
  );
}

export default App;