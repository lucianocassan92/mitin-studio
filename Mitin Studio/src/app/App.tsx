import image_38b9e8caabd18994531c10195796a44535b96a9d from 'figma:asset/38b9e8caabd18994531c10195796a44535b96a9d.png'
import image_a7ec64405f3af286fe5684ab2c4dda16bd6f6981 from 'figma:asset/a7ec64405f3af286fe5684ab2c4dda16bd6f6981.png'
import image_81aa8fe3a4228a9160f66a4537389eb77969fcc8 from 'figma:asset/81aa8fe3a4228a9160f66a4537389eb77969fcc8.png'
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Star, MapPin, Clock, Phone, Instagram, Facebook, MessageCircle, ArrowRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Scrollbar from 'smooth-scrollbar';
import keuneLogo from 'figma:asset/e171f66c4e2be75ae95937046439793161211834.png';
import customImage from 'figma:asset/854c6198f4803d1591af952ed1bbaf767a149818.png';

// Color Palette Variables for Tailwind utility
// Black: #0a0a0a
// Charcoal: #1f1f1f
// Espresso: #332722
// Off-white: #fdfcfb
// Warm beige: #e8e0d5
// Stone gray: #8a8a8a

const images = {
  hero: "https://images.unsplash.com/photo-1764844463777-2accb463f1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9uZGUlMjBtb2RlbCUyMG5hdHVyYWwlMjBtYWtldXAlMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM4NDYxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  about: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzcGF8ZW58MXx8fHwxNzIxMTg2MjY3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  gallery1: "https://images.unsplash.com/photo-1633681140152-3b8726450518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwc2Fsb24lMjBkZXRhaWx8ZW58MXx8fHwxNzczODQ1MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  gallery2: "https://images.unsplash.com/photo-1571666411642-b7636bdf4fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhhaXIlMjBzYWxvbiUyMGludGVyaW9yJTIwbWluaW1hbHxlbnwxfHx8fDE3NzM4NDU2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  gallery3: "https://images.unsplash.com/photo-1712641970791-ea9a566c93bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMGVsZWdhbnQlMjBzYWxvbnxlbnwxfHx8fDE3NzM4NDUxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  gallery4: "https://images.unsplash.com/photo-1689893265427-d7da200eff05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGFpciUyMHdhc2hpbmclMjBiYXNpbiUyMHNhbG9ufGVufDF8fHx8MTc3Mzg0NTE5NHww&ixlib=rb-4.1.0&q=80&w=1080"
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleNativeScroll = () => setScrolled(window.scrollY > 50);
    const handleSmoothScroll = (event: Event) => {
      const customEvent = event as CustomEvent<{ y?: number }>;
      setScrolled((customEvent.detail?.y ?? 0) > 50);
    };

    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    window.addEventListener('smooth-scroll', handleSmoothScroll as EventListener);
    handleNativeScroll();

    return () => {
      window.removeEventListener('scroll', handleNativeScroll);
      window.removeEventListener('smooth-scroll', handleSmoothScroll as EventListener);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#fdfcfb]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-[#0a0a0a]">
        <div className="font-sans font-medium text-lg tracking-tighter">
          Mitin Studio.
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium tracking-tight text-[#8a8a8a] hover:text-[#0a0a0a] transition-colors">
            Reservar cita
          </button>
          <button className="px-5 py-2.5 rounded-full text-sm font-medium tracking-tight transition-colors bg-[#0a0a0a] text-white hover:bg-[#1f1f1f] flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>Asesoramiento gratuito</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 pb-8 md:pb-12 w-full bg-[#fdfcfb] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col">
        
        {/* Top minimal layout */}
        <div className="flex flex-row justify-start items-center gap-2 text-left mx-[0px] my-[16px]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-row items-center justify-start gap-1.5 md:gap-3"
          >
            <div className="flex text-[#0a0a0a]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
              ))}
            </div>
            <span className="text-[#0a0a0a] font-medium tracking-tight text-xs md:text-sm whitespace-nowrap">4.9/5 en Google · Barcelona · KEUNE Ambassador</span>
          </motion.div>
        </div>

        {/* The huge text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-start mx-[0px] mt-[0px] mb-[16px]"
        >
          <h1 className="font-sans font-medium text-[#1f1f1f] leading-[0.85] md:leading-[0.8] tracking-[-0.05em] md:tracking-[-0.07em] text-[20vw] md:text-[14vw] lg:text-[160px] text-left flex flex-col md:block">
            <span>Mitin</span>
            <span className="md:ml-4">Studio</span>
          </h1>
        </motion.div>

        {/* The description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex justify-start mx-[0px] mt-[0px] mb-[16px]"
        >
          <p className="text-[#0a0a0a] text-lg md:text-2xl font-normal tracking-tight text-left max-w-3xl leading-snug md:leading-snug">
            El arte de la colorimetría en equilibrio
          </p>
        </motion.div>

        {/* CTAs above the image (hidden on mobile since they are sticky) */}
        <div className="hidden md:flex justify-start w-full mx-[0px] mt-[0px] mb-[24px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full sm:w-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#0a0a0a] text-white rounded-full hover:bg-[#1f1f1f] transition-colors text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-lg">
                <MessageCircle className="w-5 h-5" />
                Asesoramiento gratuito
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#0a0a0a]/20 text-[#0a0a0a] rounded-full hover:bg-[#0a0a0a]/5 transition-colors text-sm font-medium tracking-wide flex items-center justify-center">
                Ver servicios
              </button>
            </div>
          </motion.div>
        </div>

        {/* The huge image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden rounded-2xl md:rounded-sm shadow-xl md:shadow-none mt-4 md:mt-8"
        >
          <div className="absolute top-4 md:top-6 left-4 md:left-6 z-10 w-24 md:w-32 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-white/20 shadow-sm">
            <img 
              src={keuneLogo} 
              alt="Keune" 
              className="w-full h-auto object-contain brightness-0 invert"
            />
          </div>
          <img 
            src={image_81aa8fe3a4228a9160f66a4537389eb77969fcc8} 
            alt="Mitin Studio Model" 
            className="w-full h-full object-cover object-center md:object-top"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Treatments = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with "Specialist minds" equivalent open

  const treatments = [
    {
      title: "Corte y diseño.",
      description: "Creamos formas precisas y orgánicas que respetan la caída natural de tu cabello, asegurando que tu estilo se mantenga impecable día tras día.",
      image: customImage,
      modelName: "@sofiamartin",
      modelUrl: "https://www.instagram.com/sofiamartin?igsh=aTR0ZnF2dHozNTY1"
    },
    {
      title: "Color y dimensión.",
      description: "Dominamos las técnicas más avanzadas para lograr tonos luminosos, multidimensionales y sobre todo, un cabello sano y brillante.",
      image: "https://images.unsplash.com/photo-1562940215-4314619607a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3JpbmclMjBwcmVtaXVtJTIwc2Fsb258ZW58MXx8fHwxNzczODQ2NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      modelName: "@isabeldiaz",
      modelUrl: "#"
    },
    {
      title: "Rituales capilares.",
      description: "Diagnósticos personalizados y curas profundas para recuperar la fuerza, hidratación y vitalidad desde el cuero cabelludo hasta las puntas.",
      image: "https://images.unsplash.com/photo-1728949202477-bad2935775cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwdHJlYXRtZW50JTIwbWFzayUyMHJlbGF4fGVufDF8fHx8MTc3Mzg0Njc2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      modelName: "@carmenruiz",
      modelUrl: "#"
    },
    {
      title: "Estética holística.",
      description: "Nuestros protocolos faciales y corporales combinan cosmética de autor con maniobras expertas para un resultado visible y duradero.",
      image: "https://images.unsplash.com/photo-1761839256840-7780a45b85dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjB3YXNoaW5nJTIwc3RhdGlvbnxlbnwxfHx8fDE3NzM3NzQ5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      modelName: "@lauragomez",
      modelUrl: "#"
    }
  ];

  return (
    <section id="servicios" className="text-[#0a0a0a] bg-[#f4f4f4] px-[0px] pt-[24px] pb-[72px] md:pb-[96px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Intro text and Image */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <div className="mb-12 lg:mb-0 lg:pt-2">
            <p className="text-sm font-medium text-[#0a0a0a] leading-snug max-w-[280px] tracking-tight">
              La comunicación, la precisión y la claridad son clave. No dejamos nada al azar para asegurar resultados extraordinarios.
            </p>
          </div>
          
          <div className="w-full mt-auto flex flex-col gap-3">
            <div className="flex items-center gap-1.5 text-xs font-medium text-[#666666]">
              
              <a 
                href="https://www.instagram.com/sofiamartin?igsh=aTR0ZnF2dHozNTY1"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-[#0a0a0a] hover:underline flex items-center gap-1 transition-colors"
              >
                @sofiamartin
                <ArrowRight className="w-3 h-3 -rotate-45" />
              </a>
            </div>
            <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-[350px] overflow-hidden rounded-sm">
              <img 
                src={image_38b9e8caabd18994531c10195796a44535b96a9d}
                alt="Sofia Martin - Corte y diseño"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-16 text-[#0a0a0a]">
            NUESTROS TRATAMIENTOS
          </p>
          
          <div className="flex flex-col">
            {treatments.map((treatment, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`border-t border-[#e8e0d5] py-5 md:py-8 cursor-pointer group transition-colors duration-300 flex flex-col ${isActive ? 'pb-10 md:pb-14' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <h3 className={`font-sans font-medium text-4xl md:text-6xl lg:text-[72px] tracking-[-0.05em] leading-[1.1] transition-colors duration-500 ${isActive ? 'text-[#0a0a0a]' : 'text-[#d4d4d4] group-hover:text-[#a3a3a3]'}`}>
                    {treatment.title}
                  </h3>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-base md:text-lg text-[#4e4e4e] max-w-2xl pt-4 md:pt-6 tracking-tight leading-relaxed font-normal">
                          {treatment.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="border-t border-[#e8e0d5]"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

const KeuneSection = () => {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [isKeuneBgActive, setIsKeuneBgActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    let rafId = 0;

    const updateBackgroundState = () => {
      rafId = 0;
      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const shouldActivate = rect.top <= viewportHeight * 0.55 && rect.bottom >= viewportHeight * 0.45;

      setIsKeuneBgActive((prev) => (prev === shouldActivate ? prev : shouldActivate));
    };

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateBackgroundState);
      }
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('smooth-scroll', scheduleUpdate as EventListener);
    window.addEventListener('resize', scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('smooth-scroll', scheduleUpdate as EventListener);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-[0px] pt-[40px] pb-[96px]"
      style={{
        backgroundColor: isKeuneBgActive ? '#eef2f6' : '#ffffff',
        transition: 'background-color 460ms ease',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Intro */}
        <div className="flex flex-col mb-20 items-center w-full">
          <img 
            src={keuneLogo} 
            alt="Keune Logo" 
            className="h-24 md:h-32 lg:h-40 object-contain mb-16 mix-blend-multiply"
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start w-full justify-between text-left">
            <h2 className="flex-1 text-4xl md:text-5xl lg:text-[64px] font-sans font-medium tracking-tight text-[#0a0a0a] leading-[1.1]">
              Cuidado profesional, <br className="hidden lg:block" />dentro y fuera del salón.
            </h2>
            <div className="flex-1 md:pt-4">
              <p className="text-lg md:text-xl text-[#4e4e4e] font-normal tracking-tight leading-relaxed max-w-xl">
                Trabajamos con Keune, una marca profesional reconocida por la calidad de sus fórmulas y su enfoque experto. Como salón embajador, confiamos en sus productos para acompañar cada diagnóstico, tratamiento y acabado con el nivel de excelencia que define nuestra experiencia.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              title: "Cuidado capilar",
              desc: "Rutinas adaptadas a distintas necesidades con champús y acondicionadores premium.",
              img: "https://images.unsplash.com/photo-1572566202186-611ceb4042f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFtcG9vJTIwY29uZGl0aW9uZXIlMjBib3R0bGVzJTIwYWVzdGhldGljJTIwbWluaW1hbHxlbnwxfHx8fDE3NzM4NDc1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              title: "Protección del color",
              desc: "Productos pensados para prolongar la luminosidad, nutrición y belleza del color.",
              img: "https://images.unsplash.com/photo-1745138806610-cfbd14b3d18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVhdXR5JTIwcHJvZHVjdCUyMHR1YmV8ZW58MXx8fHwxNzczODQ3NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              title: "Styling profesional",
              desc: "Texturas, acabados y productos para mantener el look con resultado de salón.",
              img: "https://images.unsplash.com/photo-1614329850775-e9d80a40d73a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGFpciUyMHN0eWxpbmclMjBwcm9kdWN0cyUyMG1pbmltYWx8ZW58MXx8fDE3NzM4NDc1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              title: "Tratamientos específicos",
              desc: "Soluciones para nutrición, reparación, brillo, suavidad o cuero cabelludo.",
              img: "https://images.unsplash.com/photo-1763503834047-ac85c4105c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVhdXR5JTIwY29zbWV0aWMlMjBqYXJ8ZW58MXx8fHwxNzczODQ3NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            }
          ].map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="w-full aspect-[4/5] bg-[#dce4ec]/40 mb-6 overflow-hidden rounded-sm relative">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h4 className="text-xl font-medium tracking-tight text-[#0a0a0a] mb-2">{cat.title}</h4>
              <p className="text-sm text-[#8a8a8a] leading-relaxed max-w-xs">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits & CTA */}
        <div className="rounded-2xl p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 bg-[#e6edf4] border border-[#d6e0ea]">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {[
              "Fórmulas profesionales seleccionadas con criterio",
              "Recomendación personalizada según cada cabello",
              "Continuidad del cuidado en casa",
              "Resultados más duraderos y cuidados"
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] mt-2 shrink-0" />
                <p className="text-[#0a0a0a] font-normal tracking-tight text-sm md:text-base leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="hidden lg:block w-px h-32 bg-[#c4b9aa]/30" />
          <div className="block lg:hidden w-full h-px bg-[#c4b9aa]/30" />

          <div className="flex-[0.8] flex flex-col items-start lg:items-start text-left w-full">
            <h4 className="text-2xl font-medium text-[#0a0a0a] tracking-tight mb-3">Encuentra tu rutina ideal</h4>
            <p className="text-[#8a8a8a] text-sm max-w-sm tracking-tight leading-relaxed m-[0px]">
              Te ayudamos a elegir los productos adecuados según tu tipo de cabello, color o tratamiento.
            </p>
            
          </div>
        </div>

      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Escuchamos", desc: "Entendemos lo que buscas y te asesoramos con criterio profesional." },
    { num: "02", title: "Personalizamos", desc: "Adaptamos cada servicio a tu estilo, tu cabello, tu piel y tus necesidades." },
    { num: "03", title: "Transformamos", desc: "Sales con resultados cuidados, naturales y una experiencia que dan ganas de repetir." }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#e8e0d5]/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-sans font-medium tracking-tight text-[#0a0a0a] leading-tight">
              Nuestro método.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#4e4e4e] max-w-md text-lg tracking-tight leading-relaxed"
          >
            Tres pasos esenciales para garantizar que tu experiencia y los resultados superen siempre tus expectativas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col border-t border-[#0a0a0a]/10 pt-8"
            >
              <div className="text-sm font-semibold tracking-widest text-[#8a8a8a] mb-6">
                {step.num}
              </div>
              <h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-[#0a0a0a] mb-4">
                {step.title}
              </h3>
              <p className="text-[#4e4e4e] font-normal leading-relaxed tracking-tight">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScrollPaintText = ({ text, className }: { text: string; className: string }) => {
  const textRef = React.useRef<HTMLHeadingElement | null>(null);
  const [revealedChars, setRevealedChars] = useState(0);
  const chars = Array.from(text);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setRevealedChars(chars.length);
      return;
    }

    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const element = textRef.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const start = viewportHeight * 0.85;
      const end = viewportHeight * 0.2;
      const rawProgress = (start - rect.top) / (start - end);
      const progress = Math.max(0, Math.min(1, rawProgress));
      const nextRevealed = Math.round(progress * chars.length);

      setRevealedChars((prev) => (prev === nextRevealed ? prev : nextRevealed));
    };

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('smooth-scroll', scheduleUpdate as EventListener);
    window.addEventListener('resize', scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('smooth-scroll', scheduleUpdate as EventListener);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [chars.length]);

  return (
    <h3
      ref={textRef}
      className={className}
      style={{ whiteSpace: 'normal', overflowWrap: 'normal', maxWidth: '100%' }}
    >
      {chars.map((char, index) => {
        if (char === ' ') {
          return <React.Fragment key={`space-${index}`}> </React.Fragment>;
        }

        return (
          <span
            key={`${char}-${index}`}
            style={{
              color: index < revealedChars ? '#0a0a0a' : '#cfcfcf',
              transition: 'color 180ms linear',
              display: 'inline',
            }}
          >
            {char}
          </span>
        );
      })}
    </h3>
  );
};

const FounderNote = () => {
  const founderManifesto =
    'Creemos que el color no se aplica, se interpreta. Trabajamos la colorimetría como un equilibrio entre luz, armonía y técnica. Nuestro propósito es revelar tonos que eleven tu belleza con naturalidad y elegancia.';

  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="w-full lg:col-span-8 lg:col-start-5 flex flex-col gap-16 md:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ScrollPaintText
              text={founderManifesto}
              className="font-sans font-medium tracking-tight text-3xl md:text-5xl lg:text-[52px] leading-[1.2] md:leading-[1.15]"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <img 
              src={image_a7ec64405f3af286fe5684ab2c4dda16bd6f6981} 
              alt="Ilya Mitin, fundador y director creativo" 
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover grayscale-[20%]"
            />
            <div>
              <p className="font-sans tracking-tight font-medium text-2xl md:text-3xl text-[#0a0a0a]">Ilya Mitin</p>
              <p className="font-normal text-[#8a8a8a] text-base md:text-lg tracking-tight mt-1">Fundador y Director Creativo</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:gap-y-16 md:gap-x-16 border-t border-[#e8e0d5]/50 pt-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="font-sans tracking-tighter font-medium text-5xl md:text-7xl lg:text-[80px] text-[#332722] leading-none mb-3 md:mb-5">15+</div>
              <p className="text-[#8a8a8a] text-sm md:text-lg font-normal tracking-tight leading-relaxed">Años perfeccionando<br className="hidden md:block"/> el oficio</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="font-sans tracking-tighter font-medium text-5xl md:text-7xl lg:text-[80px] text-[#332722] leading-none mb-3 md:mb-5">3k+</div>
              <p className="text-[#8a8a8a] text-sm md:text-lg font-normal tracking-tight leading-relaxed">Clientas fieles que<br className="hidden md:block"/> confían en nosotras</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="font-sans tracking-tighter font-medium text-5xl md:text-7xl lg:text-[80px] text-[#332722] leading-none mb-3 md:mb-5">98%</div>
              <p className="text-[#8a8a8a] text-sm md:text-lg font-normal tracking-tight leading-relaxed">Tasa de satisfacción<br className="hidden md:block"/> y retención</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="font-sans tracking-tighter font-medium text-5xl md:text-7xl lg:text-[80px] text-[#332722] leading-none mb-3 md:mb-5">100%</div>
              <p className="text-[#8a8a8a] text-sm md:text-lg font-normal tracking-tight leading-relaxed">Atención dedicada y<br className="hidden md:block"/> asesoramiento personal</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    // Column 1
    [
      { name: "María G.", role: "Clienta desde 2019", text: "El trato es exquisito. Un lugar precioso, limpio y relajante donde las profesionales escuchan y aciertan de lleno.", img: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczODE5OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Laura F.", role: "Clienta desde 2021", text: "Una mezcla perfecta de talento creativo y precisión técnica. Recomendaría sus servicios sin dudarlo.", img: "https://images.unsplash.com/photo-1614436201459-156d322d38c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mzc1NTI5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Ana M.", role: "Clienta desde 2020", text: "Siempre atentas, cuidadosas y con mucho criterio. Cada visita es un momento de paz y el resultado siempre supera lo esperado.", img: "https://images.unsplash.com/photo-1613239077413-54b5c39cf191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBmYWNlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczODQ1NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    ],
    // Column 2
    [
      { name: "Elena R.", role: "Clienta desde 2018", text: "Resultados espectaculares y muy naturales. Es una experiencia comparable a la hospitalidad de un hotel 5 estrellas.", img: "https://images.unsplash.com/photo-1760552069335-07d43ca826f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJydW5ldHRlJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzM4NDU0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Clara B.", role: "Clienta desde 2022", text: "Cada interacción se siente con propósito. El proceso es colaborativo y el resultado final habla por sí solo.", img: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsb25kZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mzg0NTQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Isabel T.", role: "Clienta desde 2023", text: "Un espacio donde realmente te cuidan. El ambiente elegante y el profesionalismo hacen que siempre quiera volver.", img: "https://images.unsplash.com/photo-1743642887694-12042391ede9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGN1cmx5JTIwaGFpciUyMHBvcnRyYWl0JTIwc21pbGV8ZW58MXx8fHwxNzczODQwMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    ],
    // Column 3
    [
      { name: "Sofía P.", role: "Clienta desde 2020", text: "Decisiones de diseño brillantes con un toque personal. Mis amigas notaron el cambio al instante.", img: "https://images.unsplash.com/photo-1570666291894-f46aef938a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlZGhlYWQlMjBwb3J0cmFpdCUyMG5hdHVyYWx8ZW58MXx8fHwxNzczNzgzNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Carmen V.", role: "Clienta desde 2021", text: "Ahora tengo un look que refleja realmente quién soy. Simple, elegante y natural — exactamente lo que necesitaba.", img: "https://images.unsplash.com/photo-1759873821395-c29de82a5b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBvdXRkb29yJTIwbmF0dXJhbHxlbnwxfHx8fDE3NzM4NDU0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
      { name: "Lucía D.", role: "Clienta desde 2019", text: "La experiencia es impecable e intuitiva. Desde la primera visita me sentí como en casa. Gran atención desde el día uno.", img: "https://images.unsplash.com/photo-1761414500568-1348275e08a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMGVsZWdhbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM3NTM5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    ],
  ];

  const StarRating = () => (
    <div className="flex gap-px">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );

  const TestimonialCard = ({ t }: { t: { name: string; role: string; text: string; img: string } }) => (
    <div className="bg-[#fafafa] rounded-lg p-6 flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="text-[#0a0a0a] font-medium text-lg tracking-tight">{t.name}</p>
          <p className="text-[#4e4e4e] text-sm">{t.role}</p>
        </div>
        <StarRating />
      </div>
      <p className="text-[#4e4e4e] text-[15px] leading-relaxed">{t.text}</p>
    </div>
  );

  return (
    <section className="bg-white overflow-hidden px-[0px] pt-[96px] pb-[40px]">
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .scroll-up { animation: scrollUp 40s linear infinite; }
        .scroll-down { animation: scrollDown 40s linear infinite; }
        .scroll-up:hover, .scroll-down:hover { animation-play-state: paused; }
      `}</style>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-sans tracking-tight font-medium text-center mb-16 text-[#0a0a0a]">Lo que dicen nuestros clientes</h2>
        
        {/* Desktop masonry 3 columns with infinite scroll */}
        <div 
          className="hidden md:grid grid-cols-3 gap-6 items-start h-[650px] relative"
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)' }}
        >
          {testimonials.map((column, colIdx) => (
            <div key={colIdx} className={`flex flex-col gap-6 w-full ${colIdx % 2 === 0 ? 'scroll-up' : 'scroll-down'}`}>
              {[...column, ...column].map((t, idx) => (
                <div key={idx}>
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile single column */}
        <div className="md:hidden flex flex-col gap-4">
          {testimonials.flat().map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images_gallery = [images.gallery1, images.gallery2, images.gallery3, images.gallery4];
  
  return (
    <section className="bg-[#fdfcfb] px-[0px] pt-[56px] pb-[32px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-medium text-center mb-4 text-[#0a0a0a]">Un espacio pensado para bajar el ritmo</h2>
        <p className="text-center text-[#8a8a8a] mb-16 tracking-tight">Sofisticación, calma y diseño en cada rincón.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {images_gallery.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-2xl overflow-hidden ${idx === 0 || idx === 3 ? 'md:aspect-[4/3]' : 'md:aspect-[4/5]'}`}
            >
              <img src={img} alt="Mitin Studio Space" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#332722]">
      {/* Background Image with slow pan effect */}
      <motion.div 
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1608869776252-33ff061fabf2?ixlib=rb-4.1.0&auto=format&fit=crop&w=2850&q=80" 
          alt="Mitin Studio Salon" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#332722]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#332722]/50 to-transparent" />
      </motion.div>

      {/* Editorial Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start md:items-center md:text-center px-[24px] pt-[80px] pb-[0px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col md:items-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="hidden md:block w-12 h-[1px] bg-[#e8e0d5]/40"></span>
            <span className="text-[#e8e0d5]/80 text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] md:tracking-[0.4em]">
              El último paso
            </span>
            <span className="hidden md:block w-12 h-[1px] bg-[#e8e0d5]/40"></span>
          </div>

          <h2 className="font-sans font-medium leading-[0.9] tracking-[-0.04em] text-[15vw] md:text-[10vw] lg:text-[130px] text-[#fdfcfb] mb-12 flex flex-col md:items-center w-full">
            <span className="block">Despierta</span>
            <span className="block italic font-light text-[#e8e0d5]/90 ml-8 md:ml-0">tu belleza.</span>
          </h2>

          <p className="text-[#e8e0d5]/70 text-base md:text-xl font-light tracking-tight leading-relaxed max-w-xl md:mx-auto text-left md:text-center m-[0px]">
            Te ayudamos a elegir el tratamiento perfecto para ti. Nuestro equipo de estilistas expertos está listo para asesorarte de manera personalizada, sin ningún compromiso.
          </p>

          

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-3xl border-t border-[#fdfcfb]/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-[#e8e0d5]/50 font-light tracking-wide mx-[0px] mt-[24px] mb-[0px]"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span>Atención inmediata disponible</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <span>Respuesta en {'<'} 1 hora</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-[#fdfcfb]/20"></span>
              <a href="tel:+34934567890" className="hover:text-[#fdfcfb] transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                +34 93 456 78 90
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white/70 pt-16 pb-44 md:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-sans font-medium tracking-tight text-2xl text-white mb-6">Mitin Studio.</h3>
          <p className="font-normal tracking-tight text-sm leading-relaxed">
            Una experiencia de belleza cuidada, personalizada y elegante en el corazón de Barcelona.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contacto</h4>
          <ul className="space-y-4 font-light text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[#e8e0d5]" />
              <span>Carrer de Casanova, 191,<br/> L'Eixample, 08036 Barcelona</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#e8e0d5]" />
              <span>+34 93 456 78 90</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Horario</h4>
          <ul className="space-y-4 font-light text-sm">
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-[#e8e0d5]" />
              <div>
                <p>Mar - Vie: 10:00 - 20:00</p>
                <p className="mt-1">Sáb: 09:00 - 15:00</p>
                <p className="mt-1">Dom - Lun: Cerrado</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a0a0a] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a0a0a] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          
          
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm font-light text-white/40">
        <p>© {new Date().getFullYear()} Mitin Studio. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-3 pointer-events-none">
      <div className="bg-white px-4 py-2 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.15)] border border-[#e8e0d5]/50 text-sm text-[#0a0a0a] font-medium tracking-tight pointer-events-auto flex items-center gap-2 animate-bounce">
        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
        ¿Te asesoramos?
      </div>
      <button 
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-xl transition-all pointer-events-auto"
        aria-label="Asesoramiento por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

const MobileStickyCTA = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-[#e8e0d5] p-4 z-[70] flex flex-col gap-3 shadow-[0_-10px_30px_-22px_rgba(0,0,0,0.45)]"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
    >
      <button className="w-full bg-[#0a0a0a] text-white py-3.5 rounded-full text-sm font-medium tracking-tight flex justify-center items-center gap-2 shadow-sm">
        <MessageCircle className="w-4 h-4" />
        Asesoramiento gratuito
      </button>
      <button className="w-full bg-transparent border border-[#0a0a0a]/20 text-[#0a0a0a] py-3.5 rounded-full text-sm font-medium tracking-tight">
        Reservar cita
      </button>
    </div>,
    document.body,
  );
};

const InstagramFeed = () => {
  // ═══════════════════════════════════════════════════════════════════════
  // 📸 INSTRUCCIONES PARA CONECTAR TU INSTAGRAM REAL (5 MINUTOS)
  // ═══════════════════════════════════════════════════════════════════════
  // 
  // OPCIÓN 1: SnapWidget (Recomendado) ✅
  // 1. Ve a https://snapwidget.com/
  // 2. Click en "Create Widget" (gratis, no requiere tarjeta)
  // 3. Elige layout "Grid"
  // 4. Conecta tu Instagram: @mitinstudiobcn
  // 5. Personaliza: 8 posts, 4 columnas desktop, 2 columnas móvil, sin espacios
  // 6. Copia el código <script> que te dan
  // 7. Pégalo en /index.html antes del </body>
  // 8. Copia el código <iframe> y reemplázalo abajo en el div "instagram-widget"
  //
  // OPCIÓN 2: Behold (Alternativa)
  // 1. Ve a https://behold.so/
  // 2. Crea cuenta gratuita
  // 3. Conecta Instagram y genera el widget
  // 4. Copia el código y pégalo abajo
  // ═══════════════════════════════════════════════════════════════════════

  return (
    <section className="bg-[#fdfcfb] px-[0px] py-[48px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#4e4e4e] font-normal tracking-tight max-w-2xl leading-snug text-[24px]"
          >
            Descubre nuestros últimos trabajos, inspiración y momentos del salón a través de Instagram.
          </motion.p>
        </div>

        {/* ══════════ WIDGET DE INSTAGRAM - PEGA TU CÓDIGO AQUÍ ══════════ */}
        <div id="instagram-widget" className="w-full">
          {/* 
            REEMPLAZA ESTE DIV COMPLETO CON EL CÓDIGO QUE TE DE SNAPWIDGET O BEHOLD
            
            Ejemplo de cómo se verá el código de SnapWidget:
            <iframe 
              src="https://snapwidget.com/embed/XXXXXX" 
              className="snapwidget-widget" 
              allowTransparency={true}
              frameBorder={0}
              scrolling="no" 
              style={{border: 'none', overflow: 'hidden', width: '100%'}}
            ></iframe>
          */}
          
          {/* ⬇️ PLACEHOLDER TEMPORAL - ELIMINA ESTO CUANDO PEGUES TU WIDGET REAL ⬇️ */}
          <div className="bg-gradient-to-br from-[#e8e0d5]/20 to-[#e8e0d5]/10 rounded-2xl p-12 md:p-16 text-center border-2 border-dashed border-[#8a8a8a]/20">
            <Instagram className="w-20 h-20 mx-auto mb-8 text-[#8a8a8a]/60" strokeWidth={1.2} />
            <h3 className="text-2xl md:text-3xl font-medium text-[#0a0a0a] mb-4 tracking-tight">
              Widget de Instagram listo para conectar
            </h3>
            <p className="text-[#4e4e4e] mb-8 max-w-xl mx-auto leading-relaxed">
              Sigue las instrucciones en el código fuente para conectar tu feed real de Instagram. 
              Es totalmente gratis y toma menos de 5 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://snapwidget.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#0a0a0a] text-white rounded-full hover:bg-[#1f1f1f] transition-colors text-sm font-medium tracking-wide flex items-center gap-2"
              >
                Crear widget gratis
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[#8a8a8a] text-sm">
                o usa <a href="https://behold.so/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0a0a0a] font-medium">Behold</a>
              </span>
            </div>
          </div>
          {/* ⬆️ FIN DEL PLACEHOLDER ⬆️ */}
        </div>
        {/* ══════════════════════════════════════════════════════════════ */}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="https://www.instagram.com/mitinstudiobcn?igsh=N3JvaG84cWpoOWp1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-[#0a0a0a]/20 text-[#0a0a0a] rounded-full hover:bg-[#0a0a0a] hover:border-[#0a0a0a] hover:text-white transition-all duration-300 text-sm font-medium tracking-wide flex items-center justify-center gap-3"
          >
            <Instagram className="w-4 h-4" />
            Ver perfil en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ReelsSection = () => {
  const reelsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjByZWVscyUyMHZlcnRpY2FsJTIwYmVhdXR5JTIwaGFpciUyMHNhbG9ufGVufDF8fHx8MTc3Mzg1ODI0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Balayage Transformation",
      views: "12.4K"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1653241625670-3a1e643464ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJ0aWNhbCUyMHBvcnRyYWl0JTIwYmxvbmRlJTIwYmVhdXRpZnVsJTIwaGFpciUyMG1vZGVsfGVufDF8fHx8MTc3Mzg1ODI1NHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Editorial Styling",
      views: "8.2K"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1707135999173-beab1fb736a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVuZXR0ZSUyMG1vZGVsJTIwbmF0dXJhbCUyMGxpZ2h0JTIwaGFpciUyMHNhbG9uJTIwc3R5bGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mzg1ODI1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Hair Care Routine",
      views: "15.1K"
    }
  ];

  return (
    <section className="py-24 bg-[#fdfcfb]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-medium text-[#1f1f1f] tracking-tight mb-6"
          >
            Mitin Studio en movimiento.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#4e4e4e] font-normal tracking-tight max-w-2xl leading-snug"
          >
            Descubre el detrás de escena, nuestras técnicas y los resultados finales a través de nuestros reels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {reelsData.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer bg-[#e8e0d5]/30 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={reel.image} 
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href="https://www.instagram.com/reel/DIbBU52tlo0/?igsh=MXcwaGo0cDlyMzhlZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </a>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2 text-white/90 text-sm font-medium">
                  <Play className="w-3.5 h-3.5" fill="currentColor" />
                  <span>{reel.views}</span>
                </div>
                <h3 className="text-white text-lg font-medium tracking-tight drop-shadow-sm">
                  {reel.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const container = document.body;
    if (!container) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const emitScroll = (y: number) => {
      window.dispatchEvent(new CustomEvent('smooth-scroll', { detail: { y } }));
    };

    if (prefersReducedMotion || isTouchDevice) {
      const handleContainerScroll = () => emitScroll(window.scrollY);
      window.addEventListener('scroll', handleContainerScroll, { passive: true });
      emitScroll(window.scrollY);

      return () => {
        window.removeEventListener('scroll', handleContainerScroll);
        emitScroll(0);
      };
    }

    const scrollbar = Scrollbar.init(container, {
      damping: 0.09,
      alwaysShowTracks: false,
      renderByPixels: true,
      continuousScrolling: true,
      delegateTo: document,
    });

    const handleSmoothbarScroll = (status: { offset: { y: number } }) => {
      emitScroll(status.offset.y);
    };

    scrollbar.addListener(handleSmoothbarScroll);
    emitScroll(scrollbar.offset.y);

    return () => {
      scrollbar.removeListener(handleSmoothbarScroll);
      scrollbar.destroy();
      emitScroll(0);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfcfb] font-sans selection:bg-[#332722] selection:text-white overflow-x-hidden pb-0">
      <Header />
      <main>
        <Hero />
        <FounderNote />
        <Treatments />
        <KeuneSection />
        <Testimonials />
        <Gallery />
        <ReelsSection />
        <InstagramFeed />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  );
}
