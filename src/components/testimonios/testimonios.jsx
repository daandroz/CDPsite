import { useEffect, useRef, useState } from 'react';

const testimonios = [
  {
    texto: 'Llegué sin saber usar un arnés y ahora encadené mi primera ruta en roca. Se siente increíble crecer así.',
    autor: 'Dani, 32 años',
    tipo: 'texto',
    fondo: 'bg-sky-200',
    forma: 'rounded-3xl',
  },
  { src: '/img/testimonio1.png', tipo: 'imagen', forma: 'rounded-full' },
  {
    texto: 'Creí que era solo un deporte, pero terminó siendo parte de mi vida.',
    autor: 'Hugo, 24 años',
    tipo: 'texto',
    fondo: 'bg-lime-300',
    forma: 'rounded-tl-[80px] rounded-br-[30px]',
  },
  { src: '/img/testimonio2.png', tipo: 'imagen', forma: 'rounded-2xl' },
  {
    texto: 'Desde que llegué me sentí escuchada. Cada sesión me ayudó a conectar conmigo misma de una manera que jamás había experimentado.',
    autor: 'Anneth, 23 años',
    tipo: 'texto',
    fondo: 'bg-pink-300',
    forma: 'rounded-b-[60px] rounded-t-[20px]',
  },
  { src: '/img/testimonio3.jpg', tipo: 'imagen', forma: 'rounded-full' },
  {
    texto: 'Al principio dudaba, pero me sorprendió la manera tan humana y cercana en la que trabajan. Realmente sales transformado de cada encuentro.',
    autor: 'Luis, 31 años',
    tipo: 'texto',
    fondo: 'bg-sky-200',
    forma: 'rounded-3xl',
  },
  { src: '/img/testimonio4.jpg', tipo: 'imagen', forma: 'rounded-2xl' },
  {
    texto: 'No solo me enseñaron a escalar, sino que también me ayudaron a fortalecer mi mente.',
    autor: 'Jorge, 25 años',
    tipo: 'texto',
    fondo: 'bg-lime-300',
    forma: 'rounded-tl-[40px] rounded-br-[70px]',
  },
  { src: '/img/testimonio5.jpg', tipo: 'imagen', forma: 'rounded-full' },
  {
    texto: 'Nunca es tarde para empezar de nuevo. Gracias a ustedes recuperé partes de mí que pensaba que ya había perdido para siempre.',
    autor: 'Denni, 60 años',
    tipo: 'texto',
    fondo: 'bg-pink-300',
    forma: 'rounded-3xl',
  },
  { src: '/img/testimonio6.jpg', tipo: 'imagen', forma: 'rounded-2xl' },
  {
    texto: 'Encontré un espacio donde pude ser yo mismo, sin miedo al juicio. Me ayudaron a confiar más en mí y en mi camino.',
    autor: 'David, 18 años',
    tipo: 'texto',
    fondo: 'bg-sky-200',
    forma: 'rounded-t-[80px] rounded-b-[20px]',
  },
  { src: '/img/testimonio7.jpg', tipo: 'imagen', forma: 'rounded-full' },
  {
    texto: 'Aquí aprendí que no hay edad para buscar ayuda. Me escucharon con el corazón y me dieron herramientas que me sirven día a día.',
    autor: 'Dante, 19 años',
    tipo: 'texto',
    fondo: 'bg-lime-300',
    forma: 'rounded-2xl',
  },
  { src: '/img/testimonio8.jpg', tipo: 'imagen', forma: 'rounded-3xl' },
  {
    texto: 'Salí renovado. Cada palabra, cada momento compartido, hizo una diferencia real en mi forma de ver la vida.',
    autor: 'Guido, 25 años',
    tipo: 'texto',
    fondo: 'bg-pink-300',
    forma: 'rounded-b-[80px] rounded-t-[20px]',
  },
  { src: '/img/testimonio9.jpg', tipo: 'imagen', forma: 'rounded-2xl' },
  {
    texto: 'No imaginaba lo mucho que podía avanzar en tan poco tiempo. Me llevo herramientas valiosas para mi vida personal y profesional.',
    autor: 'Edgar, 29 años',
    tipo: 'texto',
    fondo: 'bg-sky-200',
    forma: 'rounded-3xl',
  },
  { src: '/img/testimonio10.jpg', tipo: 'imagen', forma: 'rounded-full' },
  {
    texto: 'Cada sesión fue un paso más hacia una mejor versión de mí. Estoy profundamente agradecida por el acompañamiento recibido aquí.',
    autor: 'Ary, 28 años',
    tipo: 'texto',
    fondo: 'bg-lime-300',
    forma: 'rounded-2xl',
  },
  { src: '/img/testimonio11.jpg', tipo: 'imagen', forma: 'rounded-3xl' },
];

const formas = [
  "rounded-full",
  "rounded-tl-3xl rounded-br-3xl",
  "rounded-2xl",
  "rounded-tr-[80px] rounded-bl-[20px] rounded-tl-[30px] rounded-br-[10px]",
  "rounded-[50%_50%_30%_70%/50%_30%_70%_50%]",
  "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
  "rounded-[40%_60%_30%_70%/60%_30%_70%_40%]",
  "rounded-[60%_40%_60%_40%/40%_60%_40%_60%]",
  "rounded-[70%_30%_30%_70%/60%_60%_40%_40%]",
  "rounded-[80%_20%_70%_30%/50%_70%_30%_50%]",
];

const formasHover = [
  "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
  "rounded-[50%_30%_60%_40%/40%_60%_40%_60%]",
  "rounded-[70%_30%_30%_70%/50%_70%_30%_50%]",
  "rounded-[40%_60%_30%_70%/30%_70%_30%_70%]",
  "rounded-[60%_40%_60%_40%/50%_50%_50%_50%]",
  "rounded-[80%_20%_70%_30%/30%_70%_30%_70%]",
  "rounded-[30%_70%_70%_30%/50%_50%_50%_50%]",
  "rounded-[70%_30%_30%_70%/30%_30%_70%_70%]",
  "rounded-[60%_40%_60%_40%/30%_70%_30%_70%]",
  "rounded-[50%_50%_30%_70%/70%_30%_50%_50%]",
];

const Testimonios = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let requestId;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 0.5;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      requestId = requestAnimationFrame(scroll);
    };

    requestId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-10 px-4">
        <p className="text-indigo-600 font-semibold text-base md:text-lg">“No solo es escalar, es descubrir de lo que eres capaz.”</p>
        <h2 className="text-4xl md:text-6xl font-black mt-2">Historias desde la pared</h2>
        <p className="mt-4 text-gray-600 text-lg">Cada ruta es una historia. Cada historia, una transformación.</p>
      </div>

      <div className="overflow-x-scroll overflow-y-hidden scrollbar-hide" ref={scrollRef}>
        <div className="flex gap-6 w-max py-4 px-2">
          {Array.from({ length: 10 }).flatMap((_, repeatIndex) =>
            testimonios.map((item, index) => {
              const formaBase = formas[index % formas.length];
              const formaHover = formasHover[index % formasHover.length];
              const isHovered = hoveredIndex === `${repeatIndex}-${index}`;
              return item.tipo === 'texto' ? (
                <div
                  key={`text-${repeatIndex}-${index}`}
                  onMouseEnter={() => setHoveredIndex(`${repeatIndex}-${index}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`min-w-[250px] max-w-[250px] p-6 ${item.fondo} ${
                    isHovered ? formaHover : formaBase
                  } text-black flex flex-col justify-center transform transition-all duration-500 hover:scale-105`}
                >
                  <p className="text-sm font-light italic leading-relaxed text-center">“{item.texto}”</p>
                  <p className="mt-4 font-bold text-right text-xs">— {item.autor}</p>
                </div>
              ) : (
                <div
                  key={`img-${repeatIndex}-${index}`}
                  className="min-w-[250px] max-w-[250px] rounded-3xl overflow-hidden flex-shrink-0"
                >
                  <img
                    src={item.src}
                    alt="testimonio"
                    className="h-[250px] w-full object-cover"
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;