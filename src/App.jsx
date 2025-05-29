// App.jsx
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import { useRef, lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { HelmetProvider } from "react-helmet-async";

// Lazy loaded components
const Nosotros = lazy(() => import("./components/Nosotros"));
const Servicios = lazy(() => import("./components/Servicios"));
const Contact = lazy(() => import("./components/Contact"));
const Testimonios = lazy(() => import("./components/testimonios/testimonios"));

function App() {
  const heroRef = useRef(null);
  const nosotrosRef = useRef(null);
  const testimoniosRef = useRef(null);
  const serviciosRef = useRef(null);
  const contactoRef = useRef(null);

  const { ref: testimoniosInViewRef, inView: isTestimoniosInView } = useInView({
    threshold: 0.2,
  });
  const { ref: serviciosInViewRef, inView: isServiciosInView } = useInView({
    threshold: 0.2,
  });
  const { ref: contactoInViewRef, inView: isContactoInView } = useInView({
    threshold: 1,
    rootMargin: "-100px 0px",
  });

  const shouldUseBlackText = isTestimoniosInView || isServiciosInView;
  const shouldUseWhiteText = isContactoInView;

  return (
    <HelmetProvider>
      <div
        className={`App ${
          shouldUseWhiteText
            ? "text-white"
            : shouldUseBlackText
            ? "text-black"
            : "text-white"
        } transition-colors duration-500`}
      >
        <Navbar
          refs={{ heroRef, nosotrosRef, testimoniosRef, serviciosRef, contactoRef }}
          isDarkSection={shouldUseBlackText && !shouldUseWhiteText}
        />

        <section id="hero" ref={heroRef} className="min-h-screen bg-white">
          <Hero />
        </section>

        <Suspense fallback={<div className="min-h-screen">Cargando...</div>}>
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
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;