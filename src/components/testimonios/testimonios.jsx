import { useEffect, useRef, useState } from 'react';
import './testimonios.css'; 

const testimonios = [
  {
    texto: 'Llegué sin saber usar un arnés y ahora encadené mi primera ruta en roca. Se siente increíble crecer así.',
    autor: 'Dani, 32 años',
    tipo: 'texto',
    fondo: 'bg-sky-200',
  },
  {
    src: '/img/testimonio1.png',
    tipo: 'imagen',
  },
  {
    texto: 'Creí que era solo un deporte, pero terminó siendo parte de mi vida.',
    autor: 'Hugo, 24 años',
    tipo: 'texto',
    fondo: 'bg-lime-300',
  },
  {
    src: '/img/testimonio2.png',
    tipo: 'imagen',
  },
  {
    texto: 'Desde que llegué me sentí escuchada. Cada sesión me ayudó a conectar conmigo misma de una manera que jamás había experimentado.',
    autor: 'Anneth, 23 años',
    tipo: 'texto',
    fondo: 'bg-pink-300',
  },
  {
    src: '/img/testimonio3.jpg',
    tipo: 'imagen',
  },
  {
    texto: 'Al principio dudaba, pero me sorprendió la manera tan humana y cercana en la que trabajan. Realmente sales transformado de cada encuentro.',
    autor: 'Luis, 31 años',
    tipo: 'texto',
    fondo: 'bg-sky-200',
  },
  {
    src: '/img/testimonio4.jpg',
    tipo: 'imagen',
  },
  {
    texto: 'Me sentí acompañado todo el proceso, no como un número más. Aquí entienden lo que de verdad importa para crecer y sanar.',
    autor: 'Jorge, 25 años',
    tipo: 'texto',
    fondo: 'bg-lime-300',
  },
  {
    src: '/img/testimonio5.jpg',
    tipo: 'imagen',
  },
  {
    texto: 'Nunca es tarde para empezar de nuevo. Gracias a ustedes recuperé partes de mí que pensaba que ya había perdido para siempre.',
    autor: 'Denni, 60 años',
    tipo: 'texto',
    fondo: 'bg-pink-300',
  },
  {
    src: '/img/testimonio6.jpg',
    tipo: 'imagen',
  },
  {
    texto: 'Encontré un espacio donde pude ser yo mismo, sin miedo al juicio. Me ayudaron a confiar más en mí y en mi camino.',
    autor: 'David, 18 años',
    tipo: 'texto',
    fondo: 'bg-sky-200',
  },
  {
    src: '/img/testimonio7.jpg',
    tipo: 'imagen',
  },
  {
    texto: 'Aquí aprendí que no hay edad para buscar ayuda. Me escucharon con el corazón y me dieron herramientas que me sirven día a día.',
    autor: 'Dante, 19 años',
    tipo: 'texto',
    fondo: 'bg-lime-300',
  },
  {
    src: '/img/testimonio8.jpg',
    tipo: 'imagen',
  },
  {
    texto: 'No sabía qué esperar, pero salí renovado. Cada palabra, cada momento compartido, hizo una diferencia real en mi forma de ver la vida.',
    autor: 'Guido, 25 años',
    tipo: 'texto',
    fondo: 'bg-pink-300',
  },
  {
    src: '/img/testimonio9.jpg',
    tipo: 'imagen',
  },
  {
    texto: 'No imaginaba lo mucho que podía avanzar en tan poco tiempo. Me llevo herramientas valiosas para mi vida personal y profesional.',
    autor: 'Edgar, 29 años',
    tipo: 'texto',
    fondo: 'bg-sky-200',
  },
  {
    src: '/img/testimonio10.jpg',
    tipo: 'imagen',
  },
  {
    texto: 'Cada sesión fue un paso más hacia una mejor versión de mí. Estoy profundamente agradecida por el acompañamiento recibido aquí.',
    autor: 'Ary, 28 años',
    tipo: 'texto',
    fondo: 'bg-lime-300',
  },
  {
    src: '/img/testimonio11.jpg',
    tipo: 'imagen',
  },
];

const Testimonios = () => {
  const scrollRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        const width = scrollRef.current.offsetWidth;
        const baseItemWidth = 300;
        const visibleItems = Math.ceil(width / baseItemWidth);
        setRepeatCount(visibleItems * 2); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-10">
        <p className="text-indigo-600 font-semibold">“No solo es escalar, es descubrir de lo que eres capaz.”</p>
        <h2 className="text-4xl md:text-6xl font-black mt-2">Historias desde la pared</h2>
        <p className="mt-4 text-gray-600 text-lg">Cada ruta es una historia. Cada historia, una transformación.</p>
      </div>

      <div className="overflow-hidden relative">
        <div
          className="flex gap-6 animate-scroll-left"
          ref={scrollRef}
          style={{
            animation: 'scrollLeft 60s linear infinite',
          }}
        >
          {Array.from({ length: repeatCount }).flatMap((_, i) =>
            testimonios.map((item, index) =>
              item.tipo === 'texto' ? (
                <div
                  key={`text-${i}-${index}`}
                  className={`min-w-[300px] max-w-[300px] p-6 rounded-3xl ${item.fondo} text-black`}
                >
                  <p className="text-lg font-light italic">“{item.texto}”</p>
                  <p className="mt-2 font-bold">— {item.autor}</p>
                </div>
              ) : (
                <div key={`img-${i}-${index}`} className="min-w-[300px] max-w-[300px] rounded-3xl overflow-hidden">
                  <img src={item.src} alt="testimonio" className="h-[300px] object-cover w-full" />
                </div>
              )
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;