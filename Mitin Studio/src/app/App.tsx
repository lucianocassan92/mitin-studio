import image_38b9e8caabd18994531c10195796a44535b96a9d from 'figma:asset/38b9e8caabd18994531c10195796a44535b96a9d.png'
import image_a7ec64405f3af286fe5684ab2c4dda16bd6f6981 from 'figma:asset/a7ec64405f3af286fe5684ab2c4dda16bd6f6981.png'
import image_81aa8fe3a4228a9160f66a4537389eb77969fcc8 from 'figma:asset/81aa8fe3a4228a9160f66a4537389eb77969fcc8.png'
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Star, MapPin, Clock, Phone, Instagram, Facebook, MessageCircle, ArrowRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Scrollbar from 'smooth-scrollbar';
import keuneLogo from 'figma:asset/e171f66c4e2be75ae95937046439793161211834.png';

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
  gallery2: "https://keune.al/wp-content/uploads/2025/09/Radiant_Gloss_-_Illume_Fusion_-_key_visual_-_desktop.webp",
  gallery3: "https://images.unsplash.com/photo-1712641970791-ea9a566c93bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMGVsZWdhbnQlMjBzYWxvbnxlbnwxfHx8fDE3NzM4NDUxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  gallery4: "https://images.unsplash.com/photo-1689893265427-d7da200eff05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGFpciUyMHdhc2hpbmclMjBiYXNpbiUyMHNhbG9ufGVufDF8fHx8MTc3Mzg0NTE5NHww&ixlib=rb-4.1.0&q=80&w=1080"
};

const KEUNE_STORE_URL = "https://www.keune.com/es/?fromKickbackFeeCode=Mitin+Studio";
const WHATSAPP_CHAT_URL = "https://wa.me/34625740726";

const KEUNE_PRODUCTS = [
  {
    name: "Long & Strong Super Serum",
    displayName: "Long & Strong\nSuper Serum",
    familyKey: "growth-strength",
    image: "/keune/long-strong-super-serum.webp",
  },
  {
    name: "Long & Strong Shampoo",
    displayName: "Long & Strong\nShampoo",
    familyKey: "growth-strength",
    image: "/keune/long-strong-shampoo.webp",
  },
  {
    name: "Vital Nutrition Shampoo",
    displayName: "Vital Nutrition\nShampoo",
    familyKey: "deep-nutrition",
    image: "/keune/vital-nutrition-shampoo.webp",
  },
  {
    name: "Vital Nutrition Power Plump",
    displayName: "Vital Nutrition\nPower Plump",
    familyKey: "deep-nutrition",
    image: "/keune/vital-nutrition-power-plump.png",
  },
];

type Locale = 'es' | 'en';

type CookieConsent = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

const COOKIE_CONSENT_KEY = 'mitin_cookie_consent_v2';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const Header = ({ locale, treatmentsPath, switchLocalePath }: { locale: Locale; treatmentsPath: string; switchLocalePath: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const isEn = locale === 'en';

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
        <a href={locale === 'en' ? '/en' : '/'} className="font-sans font-medium text-lg tracking-tighter hover:opacity-85 transition-opacity">
          Mitin Studio.
        </a>
        <div className="hidden md:flex items-center gap-4">
          <a href={treatmentsPath} data-analytics-event="nav_treatments_click" className="text-sm font-medium tracking-tight text-[#8a8a8a] hover:text-[#0a0a0a] transition-colors">
            {isEn ? 'Treatments' : 'Tratamientos'}
          </a>
          <a href={switchLocalePath} data-analytics-event="language_switch_click" className="text-sm font-semibold tracking-tight text-[#5a5a5a] hover:text-[#0a0a0a] transition-colors">
            {isEn ? 'EN / ES' : 'ES / EN'}
          </a>
          <button data-analytics-event="book_now_click" className="text-sm font-medium tracking-tight text-[#8a8a8a] hover:text-[#0a0a0a] transition-colors">
            {isEn ? 'Book now' : 'Reservar cita'}
          </button>
          <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer" data-analytics-event="consultation_click" className="px-5 py-2.5 rounded-full text-sm font-medium tracking-tight transition-colors bg-[#0a0a0a] text-white hover:bg-[#1f1f1f] flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>{isEn ? 'Free consultation' : 'Asesoramiento gratuito'}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ locale, treatmentsPath }: { locale: Locale; treatmentsPath: string }) => {
  const isEn = locale === 'en';
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
            <span className="text-[#0a0a0a] font-medium tracking-tight text-xs md:text-sm whitespace-nowrap">
              {isEn ? '4.9/5 on Google · Barcelona · KEUNE Ambassador' : '4.9/5 en Google · Barcelona · KEUNE Ambassador'}
            </span>
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
            {isEn ? 'The art of colorimetry in balance' : 'El arte de la colorimetría en equilibrio'}
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
              <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer" data-analytics-event="hero_consultation_click" className="w-full sm:w-auto px-8 py-4 bg-[#0a0a0a] text-white rounded-full hover:bg-[#1f1f1f] transition-colors text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-lg">
                <MessageCircle className="w-5 h-5" />
                {isEn ? 'Free consultation' : 'Asesoramiento gratuito'}
              </a>
              <a href={treatmentsPath} data-analytics-event="hero_view_services_click" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#0a0a0a]/20 text-[#0a0a0a] rounded-full hover:bg-[#0a0a0a]/5 transition-colors text-sm font-medium tracking-wide flex items-center justify-center">
                {isEn ? 'View services' : 'Ver servicios'}
              </a>
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
              decoding="async"
              className="w-full h-auto object-contain brightness-0 invert"
            />
          </div>
          <img 
            src={image_81aa8fe3a4228a9160f66a4537389eb77969fcc8} 
            alt="Mitin Studio Model" 
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center md:object-top"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Treatments = ({ locale, treatmentsPath }: { locale: Locale; treatmentsPath: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isEn = locale === 'en';

  const signatureTreatments = isEn ? [
    {
      name: "Gloss Hair",
      description:
        "A polished shine ritual that wraps the hair in refined light, leaving a silky texture and mirror-like finish.",
      benefit: "Key benefit: Immediate luminosity with an elegant glossy result.",
    },
    {
      name: "Color Lock",
      description:
        "A protocol designed to protect and prolong color intensity, preserving nuance and depth between appointments.",
      benefit: "Key benefit: Longer-lasting, vibrant and even color.",
    },
    {
      name: "Hydro Nourish",
      description:
        "A deep hydration and nutrition treatment that restores comfort, elasticity and vitality to dry or dull hair.",
      benefit: "Key benefit: Renewed softness, flexibility and natural movement.",
    },
    {
      name: "Power & Protect",
      description:
        "A strengthening ritual from the root focused on improving resistance, density and day-to-day fiber protection.",
      benefit: "Key benefit: Stronger structure with higher resilience.",
    },
  ] : [
    {
      name: "Gloss Hair",
      description:
        "Un ritual de brillo pulido que envuelve el cabello en una luz sofisticada, dejando una textura sedosa y un acabado espejo.",
      benefit: "Beneficio principal: Luminosidad inmediata y acabado glossy elegante.",
    },
    {
      name: "Color Lock",
      description:
        "Protocolo diseñado para proteger y prolongar la intensidad del color, preservando reflejos y profundidad durante más tiempo.",
      benefit: "Beneficio principal: Color más duradero, vivo y uniforme.",
    },
    {
      name: "Hydro Nourish",
      description:
        "Tratamiento de hidratación y nutrición profunda que restaura confort, elasticidad y vitalidad en cabellos secos o apagados.",
      benefit: "Beneficio principal: Recuperación de suavidad, flexibilidad y movimiento natural.",
    },
    {
      name: "Power & Protect",
      description:
        "Ritual de fortalecimiento desde la raíz orientado a mejorar resistencia, densidad y calidad capilar de forma progresiva.",
      benefit: "Beneficio principal: Más fuerza estructural y mayor protección diaria.",
    },
  ];

  return (
    <section id="servicios" className="text-[#0a0a0a] bg-[#f4f4f4] px-[0px] pt-[72px] md:pt-[96px] pb-[80px] md:pb-[104px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 md:mb-14">
        <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#0a0a0a] mb-5">
          {isEn ? 'SIGNATURE TREATMENTS' : 'TRATAMIENTOS SIGNATURE'}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-[62px] font-medium tracking-tight leading-[1.04] text-[#0a0a0a] max-w-4xl">
          {isEn ? 'A curated selection of rituals to transform your hair condition.' : 'Una selección curada de rituales para transformar el estado del cabello.'}
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <div>
            <p className="text-[#4e4e4e] text-base md:text-lg tracking-tight leading-relaxed max-w-md">
              {isEn
                ? 'Designed in-salon with a personalized approach, aesthetic sensitivity and professional protocols for visible, lasting results.'
                : 'Diseñados en cabina con enfoque personalizado, sensibilidad estética y protocolos profesionales para resultados visibles y duraderos.'}
            </p>
            <img
              src={keuneLogo}
              alt="Keune"
              decoding="async"
              className="mt-6 md:mt-7 h-14 md:h-20 w-auto object-contain mix-blend-multiply"
            />
          </div>
          <div className="mt-8 md:mt-12">
            <a
              href="https://www.instagram.com/sofiamartin?igsh=aTR0ZnF2dHozNTY1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a0a0a] hover:underline text-xs md:text-sm font-medium tracking-tight inline-flex items-center gap-1.5 mb-3"
            >
              @sofiamartin
              <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
            </a>
            <div className="rounded-2xl overflow-hidden border border-[#dcd6ce]">
              <img
                src={image_38b9e8caabd18994531c10195796a44535b96a9d}
                alt="Tratamientos signature Mitin Studio"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="flex flex-col border-t border-[#dedad3]">
            {signatureTreatments.map((treatment, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div key={treatment.name} className="border-b border-[#dedad3]">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className="w-full text-left py-6 md:py-8"
                  >
                    <span
                      className={`block font-medium tracking-[-0.05em] leading-[1.02] text-[clamp(2.2rem,7vw,5.8rem)] transition-colors duration-500 ${
                        isActive ? "text-[#0a0a0a]" : "text-[#c8c8c8] hover:text-[#a3a3a3]"
                      }`}
                    >
                      {treatment.name}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 md:pb-10 max-w-3xl">
                          <p className="text-[#4e4e4e] text-base md:text-lg tracking-tight leading-relaxed mb-4">
                            {treatment.description}
                          </p>
                          <p className="text-[#1f1f1f] text-sm md:text-base font-medium tracking-tight leading-relaxed">
                            {treatment.benefit}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-8 md:mt-10 flex">
            <a
              href={treatmentsPath}
              data-analytics-event="signature_discover_all_treatments_click"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0a0a0a] text-white text-sm md:text-base font-medium tracking-tight hover:bg-[#1f1f1f] transition-colors w-fit"
            >
              {isEn ? 'Discover all treatments' : 'Descubrir todos los tratamientos'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const TreatmentsExperiencePage = ({ locale }: { locale: Locale }) => {
  const isEn = locale === 'en';
  const categories = isEn ? [
    {
      key: "cut",
      title: "Cut and design",
      description:
        "Cuts shaped with intention, precision and aesthetic sensitivity to support each hair texture and personal identity.",
    },
    {
      key: "color",
      title: "Color and dimension",
      description:
        "The art of balanced colorimetry. Tones, depth and reflections crafted with technique and criterion for luminous, natural, sophisticated results.",
    },
    {
      key: "rituals",
      title: "Hair rituals",
      description:
        "Personalized diagnostics and deep-care protocols to restore strength, hydration and vitality from scalp to ends.",
    },
    {
      key: "holistic",
      title: "Holistic aesthetics",
      description:
        "Treatments designed to align wellbeing, beauty and care through a more global, sensory and personalized approach.",
    },
  ] : [
    {
      key: "corte",
      title: "Corte y diseño",
      description:
        "Cortes creados con intención, precisión y sensibilidad estética para acompañar la forma natural del cabello y la identidad de cada persona.",
    },
    {
      key: "color",
      title: "Color y dimensión",
      description:
        "El arte de la colorimetría en equilibrio. Tonos, reflejos y profundidad trabajados con técnica y criterio para crear resultados luminosos, sofisticados y naturales.",
    },
    {
      key: "rituales",
      title: "Rituales capilares",
      description:
        "Diagnósticos personalizados y curas profundas para recuperar la fuerza, hidratación y vitalidad desde el cuero cabelludo hasta las puntas.",
    },
    {
      key: "estetica",
      title: "Estética holística",
      description:
        "Tratamientos diseñados para equilibrar bienestar, cuidado y belleza desde una mirada más global, sensorial y personalizada.",
    },
  ];

  const ritualTreatments = isEn ? [
    {
      name: "Gloss Hair",
      description:
        "A luminosity and polishing ritual that amplifies reflection, softness and shine with an ultra-silky feel.",
      benefit: "Key benefit: Sophisticated glossy effect and uniform radiance.",
    },
    {
      name: "Color Lock",
      description:
        "A color-protection protocol for treated hair that preserves intensity, tonal balance and chromatic beauty between visits.",
      benefit: "Key benefit: Longer-lasting color with healthy-looking finish.",
    },
    {
      name: "Hydro Nourish",
      description:
        "A nourishing hydration treatment to recover elasticity, comfort and vitality when hair feels dry or depleted.",
      benefit: "Key benefit: Deep hydration with natural movement.",
    },
    {
      name: "Power & Protect",
      description:
        "A strength and growth-focused ritual that stimulates from the root and reinforces the fiber for greater resistance.",
      benefit: "Key benefit: Stronger, denser and better-protected hair.",
    },
    {
      name: "Detox & Balance",
      description:
        "A purifying scalp protocol that deeply cleanses, refreshes and restores natural balance.",
      benefit: "Key benefit: Deep-clean sensation with a rebalanced scalp.",
    },
    {
      name: "Defined Curl",
      description:
        "A ritual tailored for curls to improve definition, elasticity and structure while maintaining control and lightness.",
      benefit: "Key benefit: Better-formed, flexible curls with stronger memory.",
    },
    {
      name: "Frizz Veil Ritual",
      description:
        "A complementary treatment that reduces frizz and seals the cuticle, ideal for humid climates or porous hair.",
      benefit: "Key benefit: Smoother surface and longer-lasting frizz control.",
    },
    {
      name: "Scalp Reset Ceremony",
      description:
        "A sensory in-salon ritual to restore scalp wellbeing and prepare the hair for better technical outcomes.",
      benefit: "Key benefit: A healthier foundation that elevates every service.",
    },
  ] : [
    {
      name: "Gloss Hair",
      description:
        "Ritual de luz y pulido capilar que potencia reflejo, suavidad y acabado brillante con una textura ultra sedosa.",
      benefit: "Beneficio principal: Efecto glossy sofisticado y brillo uniforme.",
    },
    {
      name: "Color Lock",
      description:
        "Protocolo de protección para cabello teñido que preserva intensidad, equilibrio de tono y belleza cromática entre visitas.",
      benefit: "Beneficio principal: Mayor duración del color con aspecto saludable.",
    },
    {
      name: "Hydro Nourish",
      description:
        "Tratamiento nutritivo-hidratante para recuperar elasticidad, confort y vitalidad cuando el cabello está seco o apagado.",
      benefit: "Beneficio principal: Hidratación profunda con movimiento natural.",
    },
    {
      name: "Power & Protect",
      description:
        "Ritual enfocado en fuerza y crecimiento que estimula desde la raíz y refuerza la fibra para elevar la resistencia capilar.",
      benefit: "Beneficio principal: Cabello más fuerte, denso y protegido.",
    },
    {
      name: "Detox & Balance",
      description:
        "Protocolo purificante para cuero cabelludo que limpia en profundidad, refresca y restablece el equilibrio natural.",
      benefit: "Beneficio principal: Sensación de limpieza profunda y cuero cabelludo reequilibrado.",
    },
    {
      name: "Defined Curl",
      description:
        "Ritual diseñado para rizos que mejora definición, elasticidad y estructura, manteniendo control y ligereza.",
      benefit: "Beneficio principal: Rizo más formado, flexible y con mejor memoria.",
    },
    {
      name: "Frizz Veil Ritual",
      description:
        "Tratamiento complementario para reducir encrespamiento y sellar la cutícula, ideal en climas húmedos o cabellos porosos.",
      benefit: "Beneficio principal: Superficie más pulida y control del frizz prolongado.",
    },
    {
      name: "Scalp Reset Ceremony",
      description:
        "Ritual sensorial de cabina para reactivar bienestar del cuero cabelludo y preparar el cabello para mejores resultados técnicos.",
      benefit: "Beneficio principal: Base capilar más sana para potenciar cualquier servicio.",
    },
  ];

  return (
    <>
      <section className="pt-24 md:pt-32 pb-14 md:pb-20 bg-[#fdfcfb]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#0a0a0a] mb-5">
            {isEn ? 'MITIN STUDIO TREATMENTS' : 'TRATAMIENTOS MITIN STUDIO'}
          </p>
          <h1 className="text-[12vw] md:text-[7.8vw] lg:text-[108px] leading-[0.9] tracking-[-0.05em] font-medium text-[#0a0a0a] max-w-5xl">
            {isEn ? 'Hair rituals and treatments' : 'Rituales y tratamientos capilares'}
          </h1>
          <p className="text-lg md:text-2xl tracking-tight text-[#4e4e4e] leading-snug max-w-4xl mt-7 md:mt-9">
            {isEn
              ? 'A selection of professional rituals designed to hydrate, strengthen, rebalance, protect color and enhance natural beauty.'
              : 'Una selección de rituales profesionales pensados para hidratar, fortalecer, equilibrar, proteger el color y realzar la belleza natural del cabello.'}
          </p>
        </div>
      </section>

      <section className="bg-[#fdfcfb] pb-8 md:pb-14">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="text-[#5f5f5f] text-base md:text-xl leading-relaxed tracking-tight max-w-3xl">
            {isEn
              ? 'Each protocol is tailored to real hair condition, scalp balance and personal aesthetic goals to deliver truly individualized care.'
              : 'Cada protocolo se adapta al estado real del cabello, al equilibrio del cuero cabelludo y al objetivo estético de cada persona para ofrecer una experiencia de cuidado verdaderamente personalizada.'}
          </p>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-8 md:py-14">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div>
            {categories.map((category, idx) => (
              <article key={category.key} className={`${idx < categories.length - 1 ? 'border-b border-[#dcd6ce]' : ''} py-7 md:py-9`}>
                <h3 className="text-[#0a0a0a] font-medium tracking-[-0.035em] leading-[0.98] text-[clamp(2rem,5.2vw,4.5rem)]">
                  {category.title}.
                </h3>
                <p className="text-[#4e4e4e] text-sm md:text-lg tracking-tight leading-relaxed max-w-4xl mt-4 md:mt-5">
                  {category.description}
                </p>

                {category.key === (isEn ? "rituals" : "rituales") && (
                  <div className="mt-7 md:mt-9 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {ritualTreatments.map((ritual, idx) => (
                      <motion.article
                        key={ritual.name}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: idx * 0.04 }}
                        className="px-0 py-2 md:py-3"
                      >
                        <h3 className="text-[#0a0a0a] text-2xl md:text-3xl font-medium tracking-tight leading-none mb-3">
                          {ritual.name}
                        </h3>
                        <p className="text-[#4e4e4e] text-sm md:text-base leading-relaxed tracking-tight mb-4">
                          {ritual.description}
                        </p>
                        <p className="text-[#1f1f1f] text-sm md:text-base font-medium tracking-tight leading-relaxed">
                          {ritual.benefit}
                        </p>
                      </motion.article>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <KeuneSection locale={locale} enableScrollColorEffect={false} />

      <section className="bg-[#0a0a0a] text-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.95] mb-6">
            {isEn ? 'Need help choosing your ideal ritual?' : '¿Te ayudamos a elegir tu ritual ideal?'}
          </h2>
          <p className="text-[#d2d2d2] text-base md:text-xl tracking-tight leading-relaxed max-w-3xl mb-10">
            {isEn
              ? 'We help you choose the right treatment for your hair, color goals and current needs.'
              : 'Te ayudamos a elegir el tratamiento ideal según tu cabello, color y necesidad.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer" data-analytics-event="treatments_whatsapp_consultation_click" className="px-8 py-4 rounded-full bg-white text-[#0a0a0a] text-sm md:text-base font-medium tracking-tight hover:bg-[#f2f2f2] transition-colors text-center">
              {isEn ? 'Free WhatsApp consultation' : 'Asesoramiento gratuito por WhatsApp'}
            </a>
            <button data-analytics-event="treatments_book_now_click" className="px-8 py-4 rounded-full border border-white/30 text-white text-sm md:text-base font-medium tracking-tight hover:bg-white/10 transition-colors">
              {isEn ? 'Book appointment' : 'Reservar cita'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const KeuneSection = ({ locale, enableScrollColorEffect = true }: { locale: Locale; enableScrollColorEffect?: boolean }) => {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [isKeuneBgActive, setIsKeuneBgActive] = useState(false);
  const isEn = locale === 'en';
  const getFamilyLabel = (familyKey: string) => {
    if (familyKey === 'growth-strength') {
      return isEn ? 'Growth and strength' : 'Crecimiento y fuerza';
    }
    return isEn ? 'Deep nutrition' : 'Nutrición profunda';
  };

  useEffect(() => {
    if (!enableScrollColorEffect) {
      setIsKeuneBgActive(true);
      return;
    }

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
  }, [enableScrollColorEffect]);

  return (
    <section
      ref={sectionRef}
      className="px-[0px] pt-[40px] pb-[96px]"
      style={{
        backgroundColor: enableScrollColorEffect
          ? (isKeuneBgActive ? '#e2e2e2' : '#ffffff')
          : '#e2e2e2',
        transition: enableScrollColorEffect ? 'background-color 460ms ease' : 'none',
      }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Intro */}
          <div className="flex flex-col mb-14 md:mb-20 items-center w-full">
            <img
              src={keuneLogo}
              alt="Keune Logo"
              loading="lazy"
              decoding="async"
              className="h-24 md:h-32 lg:h-40 object-contain mb-12 md:mb-16 mix-blend-multiply"
            />
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start w-full justify-between text-left">
              <h2 className="flex-1 text-4xl md:text-5xl lg:text-[64px] font-sans font-medium tracking-tight text-[#0a0a0a] leading-[1.08]">
                {isEn ? (
                  <>Professional care, <br className="hidden lg:block" />inside and beyond the salon.</>
                ) : (
                  <>Cuidado profesional, <br className="hidden lg:block" />dentro y fuera del salón.</>
                )}
              </h2>
              <div className="flex-1 md:pt-4">
                <p className="text-lg md:text-xl text-[#4e4e4e] font-normal tracking-tight leading-relaxed max-w-xl">
                  {isEn
                    ? 'We work with Keune as part of our professional care standard. Their formulas support our in-salon treatments and help extend results at home with the same level of quality and care.'
                    : 'Trabajamos con Keune como parte de nuestro estándar de cuidado profesional. Sus fórmulas acompañan nuestros tratamientos en salón y permiten prolongar sus beneficios en casa con la misma exigencia, calidad y sensibilidad por el cabello.'}
                </p>
                <div className="mt-6 md:mt-8">
                  <a
                    href={KEUNE_STORE_URL}
                    data-analytics-event="keune_discover_products_click"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#0a0a0a] text-white text-sm md:text-base font-medium tracking-tight hover:bg-[#1f1f1f] transition-colors shadow-lg"
                  >
                    {isEn ? 'Discover products' : 'Descubrir productos'}
                  </a>
                  <p className="text-[#737373] text-sm md:text-base tracking-tight leading-relaxed mt-4 max-w-2xl">
                    {isEn
                      ? 'Continue your ritual at home with Keune’s professional selection.'
                      : 'Descubre los productos que acompañan nuestros tratamientos en salón.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width editorial carousel */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <style>{`
            @keyframes keuneInfiniteScroll {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
            .keune-infinite-track {
              animation: keuneInfiniteScroll 38s linear infinite;
              will-change: transform;
            }
            @media (max-width: 1024px) {
              .keune-infinite-track {
                animation-duration: 30s;
              }
            }
          `}</style>
          <div className="relative overflow-hidden bg-[#e3e3e3]">
            <div className="keune-infinite-track flex w-max gap-4 md:gap-6 px-4 md:px-8 py-8 md:py-10">
              {[...KEUNE_PRODUCTS, ...KEUNE_PRODUCTS].map((product, idx) => (
                <article
                  key={`${product.name}-${idx}`}
                  className="w-[220px] md:w-[260px] lg:w-[290px] shrink-0 rounded-2xl overflow-hidden bg-[#f2f2f2] shadow-[0_20px_40px_-28px_rgba(20,20,20,0.45)]"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#727272] font-semibold mb-2">
                      {getFamilyLabel(product.familyKey)}
                    </p>
                    <h3 className="text-[#0a0a0a] text-xl md:text-2xl font-medium tracking-tight leading-[1.05] whitespace-pre-line min-h-[2.1em]">
                      {product.displayName ?? product.name}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
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

const FounderNote = ({ locale }: { locale: Locale }) => {
  const isEn = locale === 'en';
  const founderManifesto = isEn
    ? 'We believe color is not applied, it is interpreted. We approach colorimetry as a balance of light, harmony and technique. Our purpose is to reveal tones that elevate your beauty with natural elegance.'
    : 'Creemos que el color no se aplica, se interpreta. Trabajamos la colorimetría como un equilibrio entre luz, armonía y técnica. Nuestro propósito es revelar tonos que eleven tu belleza con naturalidad y elegancia.';

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
              loading="lazy"
              decoding="async"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover grayscale-[20%]"
            />
            <div>
              <p className="font-sans tracking-tight font-medium text-2xl md:text-3xl text-[#0a0a0a]">Ilya Mitin</p>
              <p className="font-normal text-[#8a8a8a] text-base md:text-lg tracking-tight mt-1">{isEn ? 'Founder & Creative Director' : 'Fundador y Director Creativo'}</p>
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
              <p className="text-[#8a8a8a] text-sm md:text-lg font-normal tracking-tight leading-relaxed">
                {isEn ? (
                  <>Years refining<br className="hidden md:block"/> the craft</>
                ) : (
                  <>Años perfeccionando<br className="hidden md:block"/> el oficio</>
                )}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="font-sans tracking-tighter font-medium text-5xl md:text-7xl lg:text-[80px] text-[#332722] leading-none mb-3 md:mb-5">3k+</div>
              <p className="text-[#8a8a8a] text-sm md:text-lg font-normal tracking-tight leading-relaxed">
                {isEn ? (
                  <>Loyal clients who<br className="hidden md:block"/> trust our team</>
                ) : (
                  <>Clientas fieles que<br className="hidden md:block"/> confían en nosotras</>
                )}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="font-sans tracking-tighter font-medium text-5xl md:text-7xl lg:text-[80px] text-[#332722] leading-none mb-3 md:mb-5">98%</div>
              <p className="text-[#8a8a8a] text-sm md:text-lg font-normal tracking-tight leading-relaxed">
                {isEn ? (
                  <>Satisfaction and<br className="hidden md:block"/> retention rate</>
                ) : (
                  <>Tasa de satisfacción<br className="hidden md:block"/> y retención</>
                )}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="font-sans tracking-tighter font-medium text-5xl md:text-7xl lg:text-[80px] text-[#332722] leading-none mb-3 md:mb-5">100%</div>
              <p className="text-[#8a8a8a] text-sm md:text-lg font-normal tracking-tight leading-relaxed">
                {isEn ? (
                  <>Dedicated care and<br className="hidden md:block"/> personal guidance</>
                ) : (
                  <>Atención dedicada y<br className="hidden md:block"/> asesoramiento personal</>
                )}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Testimonials = ({ locale }: { locale: Locale }) => {
  const isEn = locale === 'en';
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
        <img src={t.img} alt={t.name} loading="lazy" decoding="async" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="text-[#0a0a0a] font-medium text-lg tracking-tight">{t.name}</p>
          <p className="text-[#4e4e4e] text-sm">
            {isEn ? t.role.replace('Clienta desde', 'Client since') : t.role}
          </p>
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
        <h2 className="text-4xl md:text-6xl font-sans tracking-tight font-medium text-center mb-16 text-[#0a0a0a]">
          {isEn ? 'What our clients say' : 'Lo que dicen nuestros clientes'}
        </h2>
        
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

const Gallery = ({ locale }: { locale: Locale }) => {
  const isEn = locale === 'en';
  const images_gallery = [images.gallery1, images.gallery2, images.gallery3, images.gallery4];
  
  return (
    <section className="bg-[#fdfcfb] px-[0px] pt-[56px] pb-[32px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-medium text-center mb-4 text-[#0a0a0a]">
          {isEn ? 'A space designed to slow down' : 'Un espacio pensado para bajar el ritmo'}
        </h2>
        <p className="text-center text-[#8a8a8a] mb-16 tracking-tight">
          {isEn ? 'Sophistication, calm and intentional design in every corner.' : 'Sofisticación, calma y diseño en cada rincón.'}
        </p>
        
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
              <img src={img} alt="Mitin Studio Space" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = ({ locale }: { locale: Locale }) => {
  const isEn = locale === 'en';
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
          loading="lazy"
          decoding="async"
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
              {isEn ? 'Final step' : 'El último paso'}
            </span>
            <span className="hidden md:block w-12 h-[1px] bg-[#e8e0d5]/40"></span>
          </div>

          <h2 className="font-sans font-medium leading-[0.9] tracking-[-0.04em] text-[15vw] md:text-[10vw] lg:text-[130px] text-[#fdfcfb] mb-12 flex flex-col md:items-center w-full">
            <span className="block">{isEn ? 'Awaken' : 'Despierta'}</span>
            <span className="block italic font-light text-[#e8e0d5]/90 ml-8 md:ml-0">{isEn ? 'your beauty.' : 'tu belleza.'}</span>
          </h2>

          <p className="text-[#e8e0d5]/70 text-base md:text-xl font-light tracking-tight leading-relaxed max-w-xl md:mx-auto text-left md:text-center m-[0px]">
            {isEn
              ? 'We help you choose the perfect treatment. Our expert stylists are ready to guide you with personalized advice, with no commitment.'
              : 'Te ayudamos a elegir el tratamiento perfecto para ti. Nuestro equipo de estilistas expertos está listo para asesorarte de manera personalizada, sin ningún compromiso.'}
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
              <span>{isEn ? 'Immediate support available' : 'Atención inmediata disponible'}</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <span>{isEn ? 'Reply in under 1 hour' : 'Respuesta en < 1 hora'}</span>
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

const Footer = ({ locale, onOpenCookiePreferences }: { locale: Locale; onOpenCookiePreferences: () => void }) => {
  const isEn = locale === 'en';
  return (
    <footer className="bg-[#0a0a0a] text-white/70 pt-16 pb-44 md:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-sans font-medium tracking-tight text-2xl text-white mb-6">Mitin Studio.</h3>
          <p className="font-normal tracking-tight text-sm leading-relaxed">
            {isEn
              ? 'A refined, personalized and elegant beauty experience in the heart of Barcelona.'
              : 'Una experiencia de belleza cuidada, personalizada y elegante en el corazón de Barcelona.'}
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">{isEn ? 'Contact' : 'Contacto'}</h4>
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
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">{isEn ? 'Hours' : 'Horario'}</h4>
          <ul className="space-y-4 font-light text-sm">
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-[#e8e0d5]" />
              <div>
                <p>{isEn ? 'Tue - Fri: 10:00 - 20:00' : 'Mar - Vie: 10:00 - 20:00'}</p>
                <p className="mt-1">{isEn ? 'Sat: 09:00 - 15:00' : 'Sáb: 09:00 - 15:00'}</p>
                <p className="mt-1">{isEn ? 'Sun - Mon: Closed' : 'Dom - Lun: Cerrado'}</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">{isEn ? 'Follow us' : 'Síguenos'}</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/mitinstudiobcn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEn ? 'Mitin Studio Instagram' : 'Instagram de Mitin Studio'}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a0a0a] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              type="button"
              disabled
              aria-label={isEn ? 'Facebook coming soon' : 'Facebook próximamente'}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 cursor-not-allowed"
            >
              <Facebook className="w-4 h-4" />
            </button>
          </div>
          
          
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm font-light text-white/40">
        <p>© {new Date().getFullYear()} Mitin Studio. {isEn ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button type="button" onClick={onOpenCookiePreferences} className="hover:text-white transition-colors">
            {isEn ? 'Cookie preferences' : 'Preferencias de cookies'}
          </button>
          <span>{isEn ? 'Legal Notice (demo)' : 'Aviso Legal (demo)'}</span>
          <span>{isEn ? 'Privacy Policy (demo)' : 'Política de Privacidad (demo)'}</span>
        </div>
      </div>
    </footer>
  );
};

const CookieBanner = ({
  locale,
  visible,
  onAcceptAll,
  onReject,
}: {
  locale: Locale;
  visible: boolean;
  onAcceptAll: () => void;
  onReject: () => void;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!visible || !mounted || typeof document === 'undefined') {
    return null;
  }

  const isEn = locale === 'en';

  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 z-[120] p-2 md:p-3">
      <div className="mx-auto max-w-[1200px] rounded-xl border border-[#d8d8d8] bg-white/98 backdrop-blur-sm shadow-[0_14px_36px_-24px_rgba(0,0,0,0.45)]">
        <div className="px-3 py-2.5 md:px-4 md:py-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <p className="text-[#4f4f4f] text-xs md:text-sm tracking-tight leading-snug">
            {isEn
              ? 'We use cookies to improve experience and measure traffic.'
              : 'Usamos cookies para mejorar la experiencia y medir el tráfico.'}
          </p>
          <div className="flex items-center gap-2 md:ml-auto">
            <button
              type="button"
              onClick={onReject}
              className="px-4 py-2 rounded-full border border-[#d0d0d0] text-[#0a0a0a] text-xs md:text-sm font-medium tracking-tight hover:bg-[#f3f3f3] transition-colors"
            >
              {isEn ? 'Reject' : 'Rechazar'}
            </button>
            <button
              type="button"
              onClick={onAcceptAll}
              className="px-4 py-2 rounded-full bg-[#0a0a0a] text-white text-xs md:text-sm font-medium tracking-tight hover:bg-[#1f1f1f] transition-colors"
            >
              {isEn ? 'Accept' : 'Aceptar'}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

const CookieFloatingTrigger = ({
  locale,
  visible,
  onOpen,
}: {
  locale: Locale;
  visible: boolean;
  onOpen: () => void;
}) => {
  const [mounted, setMounted] = useState(false);
  const isEn = locale === 'en';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === 'undefined' || visible) {
    return null;
  }

  return createPortal(
    <button
      type="button"
      onClick={onOpen}
      className="fixed bottom-3 left-3 z-[119] px-4 py-2 rounded-full bg-white/95 border border-[#d9d9d9] text-[#444] text-xs md:text-sm font-medium tracking-tight shadow-[0_10px_26px_-20px_rgba(0,0,0,0.45)] hover:text-[#0a0a0a] hover:border-[#bfbfbf] transition-colors"
    >
      {isEn ? 'Cookies' : 'Cookies'}
    </button>,
    document.body,
  );
};

const FloatingWhatsApp = ({ locale }: { locale: Locale }) => {
  const [mounted, setMounted] = useState(false);
  const isEn = locale === 'en';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="hidden md:flex fixed bottom-8 right-8 z-[80] flex-col items-end gap-3 pointer-events-none">
      <div className="bg-white px-4 py-2 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.15)] border border-[#e8e0d5]/50 text-sm text-[#0a0a0a] font-medium tracking-tight pointer-events-auto flex items-center gap-2 animate-bounce">
        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
        {isEn ? 'Need guidance?' : '¿Te asesoramos?'}
      </div>
      <a
        href={WHATSAPP_CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-event="floating_whatsapp_click"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-xl transition-all pointer-events-auto"
        aria-label={isEn ? 'WhatsApp consultation' : 'Asesoramiento por WhatsApp'}
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>,
    document.body,
  );
};

const MobileStickyCTA = ({ locale }: { locale: Locale }) => {
  const [mounted, setMounted] = useState(false);
  const isEn = locale === 'en';

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
      <a href={WHATSAPP_CHAT_URL} target="_blank" rel="noopener noreferrer" data-analytics-event="mobile_consultation_click" className="w-full bg-[#0a0a0a] text-white py-3.5 rounded-full text-sm font-medium tracking-tight flex justify-center items-center gap-2 shadow-sm">
        <MessageCircle className="w-4 h-4" />
        {isEn ? 'Free consultation' : 'Asesoramiento gratuito'}
      </a>
      <button data-analytics-event="mobile_book_now_click" className="w-full bg-transparent border border-[#0a0a0a]/20 text-[#0a0a0a] py-3.5 rounded-full text-sm font-medium tracking-tight">
        {isEn ? 'Book now' : 'Reservar cita'}
      </button>
    </div>,
    document.body,
  );
};

const InstagramFeed = ({ locale }: { locale: Locale }) => {
  const isEn = locale === 'en';
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
            {isEn
              ? 'Explore our latest work, salon moments and creative inspiration on Instagram.'
              : 'Descubre nuestros últimos trabajos, inspiración y momentos del salón a través de Instagram.'}
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
              {isEn ? 'Instagram widget ready to connect' : 'Widget de Instagram listo para conectar'}
            </h3>
            <p className="text-[#4e4e4e] mb-8 max-w-xl mx-auto leading-relaxed">
              {isEn
                ? 'Follow the instructions in the source code to connect your real Instagram feed. It is fully free and takes under five minutes.'
                : 'Sigue las instrucciones en el código fuente para conectar tu feed real de Instagram. Es totalmente gratis y toma menos de 5 minutos.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://snapwidget.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#0a0a0a] text-white rounded-full hover:bg-[#1f1f1f] transition-colors text-sm font-medium tracking-wide flex items-center gap-2"
              >
                {isEn ? 'Create free widget' : 'Crear widget gratis'}
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[#8a8a8a] text-sm">
                {isEn ? 'or use ' : 'o usa '}
                <a href="https://behold.so/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0a0a0a] font-medium">Behold</a>
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
            {isEn ? 'View Instagram profile' : 'Ver perfil en Instagram'}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ReelsSection = ({ locale }: { locale: Locale }) => {
  const isEn = locale === 'en';
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
            {isEn ? 'Mitin Studio in motion.' : 'Mitin Studio en movimiento.'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#4e4e4e] font-normal tracking-tight max-w-2xl leading-snug"
          >
            {isEn
              ? 'Discover behind-the-scenes moments, our techniques and final results through our reels.'
              : 'Descubre el detrás de escena, nuestras técnicas y los resultados finales a través de nuestros reels.'}
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
                loading="lazy"
                decoding="async"
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

const NotFoundPage = ({ locale }: { locale: Locale }) => {
  const isEn = locale === 'en';
  return (
    <section className="min-h-[72vh] bg-[#fdfcfb] flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <p className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#0a0a0a] mb-4">
          404
        </p>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[0.95] text-[#0a0a0a]">
          {isEn ? 'Page not found' : 'Pagina no encontrada'}
        </h1>
        <p className="text-[#4e4e4e] text-base md:text-xl tracking-tight leading-relaxed max-w-2xl mt-6">
          {isEn
            ? 'This URL does not exist on Mitin Studio. Please return to the main page.'
            : 'Esta URL no existe en Mitin Studio. Vuelve a la pagina principal para continuar navegando.'}
        </p>
        <a
          href={isEn ? '/en' : '/'}
          className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-[#0a0a0a] text-white text-sm md:text-base font-medium tracking-tight hover:bg-[#1f1f1f] transition-colors"
        >
          {isEn ? 'Back to home' : 'Volver al inicio'}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default function App() {
  const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/',
  );
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const scrollbarRef = React.useRef<any>(null);
  const [cookieConsent, setCookieConsent] = useState<CookieConsent | null>(null);
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);
  const gaInitializedRef = React.useRef(false);
  const gaMeasurementId = (import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim();
  const isEnglishLocale = currentPath === '/en' || currentPath.startsWith('/en/');
  const locale: Locale = isEnglishLocale ? 'en' : 'es';
  const isKnownPath = ['/', '/tratamientos', '/en', '/en/treatments'].includes(currentPath);
  const isNotFoundPage = !isKnownPath;
  const isTreatmentsPage = currentPath === '/tratamientos' || currentPath === '/en/treatments';
  const treatmentsPath = locale === 'en' ? '/en/treatments' : '/tratamientos';
  const switchLocalePath = isTreatmentsPage
    ? (locale === 'en' ? '/tratamientos' : '/en/treatments')
    : (locale === 'en' ? '/' : '/en');

  const setConsentAndPersist = (analytics: boolean) => {
    const nextConsent: CookieConsent = {
      necessary: true,
      analytics,
      updatedAt: new Date().toISOString(),
    };
    setCookieConsent(nextConsent);
    setIsCookieBannerVisible(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(nextConsent));
    }
  };

  const ensureGAIsLoaded = () => {
    if (!gaMeasurementId || typeof window === 'undefined' || gaInitializedRef.current) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtagProxy(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

    const existingScript = document.querySelector(`script[src*="gtag/js?id=${gaMeasurementId}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
      document.head.appendChild(script);
    }

    window.gtag('js', new Date());
    window.gtag('config', gaMeasurementId, {
      anonymize_ip: true,
      send_page_view: false,
    });

    gaInitializedRef.current = true;
  };

  const scrollToTop = () => {
    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const scrollbar = scrollbarRef.current;
    if (scrollbar) {
      scrollbar.setPosition(0, 0);
      scrollbar.scrollTo(0, 0, 0);
      window.dispatchEvent(new CustomEvent('smooth-scroll', { detail: { y: 0 } }));
    }
  };

  const navigateWithTransition = (nextPath: string) => {
    const normalizedNextPath = normalizePath(nextPath);
    if (normalizedNextPath === currentPath || typeof window === 'undefined') {
      return;
    }

    setIsPageTransitioning(true);
    window.setTimeout(() => {
      window.history.pushState({}, '', normalizedNextPath);
      setCurrentPath(normalizedNextPath);
      window.requestAnimationFrame(scrollToTop);
      setIsPageTransitioning(false);
    }, 220);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.requestAnimationFrame(scrollToTop);
    };

    const handleInternalLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      if (anchor.target === '_blank' || anchor.hasAttribute('download')) {
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) {
        return;
      }

      event.preventDefault();
      navigateWithTransition(url.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleInternalLinkClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleInternalLinkClick);
    };
  }, [currentPath]);

  useEffect(() => {
    scrollToTop();
  }, [currentPath]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const rawConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    setIsCookieBannerVisible(true);
    if (!rawConsent) {
      return;
    }

    try {
      const parsed = JSON.parse(rawConsent) as CookieConsent;
      if (typeof parsed.analytics === 'boolean') {
        setCookieConsent(parsed);
      } else {
        setIsCookieBannerVisible(true);
      }
    } catch {
      setIsCookieBannerVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!cookieConsent) {
      return;
    }

    if (!gaMeasurementId) {
      return;
    }

    ensureGAIsLoaded();

    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: cookieConsent.analytics ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
  }, [cookieConsent, gaMeasurementId]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const siteOrigin = 'https://mitin.studio';
    const pageUrl = `${siteOrigin}${currentPath === '/' ? '/' : currentPath}`;
    const pageMeta = isNotFoundPage
      ? (locale === 'en'
          ? {
              title: '404 | Mitin Studio',
              description: 'The requested page does not exist on Mitin Studio.',
            }
          : {
              title: '404 | Mitin Studio',
              description: 'La pagina solicitada no existe en Mitin Studio.',
            })
      : isTreatmentsPage
      ? (locale === 'en'
          ? {
              title: 'Hair Treatments in Barcelona | Mitin Studio',
              description:
                'Personalized hair rituals in Barcelona to hydrate, strengthen, rebalance and protect color. Discover Mitin Studio treatments.',
            }
          : {
              title: 'Tratamientos Capilares en Barcelona | Mitin Studio',
              description:
                'Rituales capilares personalizados en Barcelona para hidratar, fortalecer, equilibrar y proteger el color. Descubre los tratamientos de Mitin Studio.',
            })
      : (locale === 'en'
          ? {
              title: 'Mitin Studio | Premium Hair Salon in Barcelona',
              description:
                'Premium hair salon in Barcelona specializing in color, cuts and personalized hair treatments. Book your appointment at Mitin Studio.',
            }
          : {
              title: 'Mitin Studio | Peluquería Premium en Barcelona',
              description:
                'Peluquería premium en Barcelona especializada en color, corte y tratamientos capilares personalizados. Reserva tu cita en Mitin Studio.',
            });

    const setMeta = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    document.title = pageMeta.title;
    setMeta('meta[name="description"]', pageMeta.description);
    setMeta('meta[property="og:title"]', pageMeta.title);
    setMeta('meta[property="og:description"]', pageMeta.description);
    setMeta('meta[property="og:url"]', pageUrl);
    setMeta('meta[property="og:locale"]', locale === 'en' ? 'en_US' : 'es_ES');
    setMeta('meta[name="twitter:title"]', pageMeta.title);
    setMeta('meta[name="twitter:description"]', pageMeta.description);
    setMeta('meta[name="robots"]', isNotFoundPage ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', pageUrl);
    }

    const esAlt = document.querySelector('link[rel="alternate"][hreflang="es-ES"]');
    const enAlt = document.querySelector('link[rel="alternate"][hreflang="en"]');
    const xDefaultAlt = document.querySelector('link[rel="alternate"][hreflang="x-default"]');

    if (isNotFoundPage) {
      esAlt?.setAttribute('href', `${siteOrigin}/`);
      enAlt?.setAttribute('href', `${siteOrigin}/en`);
      xDefaultAlt?.setAttribute('href', `${siteOrigin}/`);
    } else if (isTreatmentsPage) {
      esAlt?.setAttribute('href', `${siteOrigin}/tratamientos`);
      enAlt?.setAttribute('href', `${siteOrigin}/en/treatments`);
      xDefaultAlt?.setAttribute('href', `${siteOrigin}/`);
    } else {
      esAlt?.setAttribute('href', `${siteOrigin}/`);
      enAlt?.setAttribute('href', `${siteOrigin}/en`);
      xDefaultAlt?.setAttribute('href', `${siteOrigin}/`);
    }

    document.documentElement.setAttribute('lang', locale === 'en' ? 'en' : 'es');
  }, [currentPath, isTreatmentsPage, isNotFoundPage, locale]);

  useEffect(() => {
    if (!cookieConsent?.analytics || !gaMeasurementId || typeof window === 'undefined' || !window.gtag) {
      return;
    }

    const pageLocation = `https://mitin.studio${currentPath === '/' ? '/' : currentPath}`;
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: pageLocation,
      page_path: currentPath,
      language: locale,
    });
  }, [currentPath, locale, cookieConsent, gaMeasurementId]);

  useEffect(() => {
    if (!cookieConsent?.analytics || !gaMeasurementId || typeof document === 'undefined') {
      return;
    }

    const handleAnalyticsClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trackedElement = target?.closest('[data-analytics-event]') as HTMLElement | null;
      if (!trackedElement || !window.gtag) {
        return;
      }

      const eventName = trackedElement.getAttribute('data-analytics-event');
      if (!eventName) {
        return;
      }

      const eventLabel = trackedElement.textContent?.trim().slice(0, 120);
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: eventLabel,
        page_path: currentPath,
      });
    };

    document.addEventListener('click', handleAnalyticsClick);
    return () => {
      document.removeEventListener('click', handleAnalyticsClick);
    };
  }, [cookieConsent, currentPath, gaMeasurementId]);

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
      scrollbarRef.current = null;
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

    scrollbarRef.current = scrollbar;
    scrollbar.addListener(handleSmoothbarScroll);
    emitScroll(scrollbar.offset.y);

    return () => {
      scrollbar.removeListener(handleSmoothbarScroll);
      scrollbar.destroy();
      scrollbarRef.current = null;
      emitScroll(0);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfcfb] font-sans selection:bg-[#332722] selection:text-white overflow-x-hidden pb-0">
      <Header locale={locale} treatmentsPath={treatmentsPath} switchLocalePath={switchLocalePath} />
      <main className={`transition-opacity duration-300 ${isPageTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {isNotFoundPage ? (
          <NotFoundPage locale={locale} />
        ) : isTreatmentsPage ? (
          <TreatmentsExperiencePage locale={locale} />
        ) : (
          <>
            <Hero locale={locale} treatmentsPath={treatmentsPath} />
            <FounderNote locale={locale} />
            <Treatments locale={locale} treatmentsPath={treatmentsPath} />
            <KeuneSection locale={locale} enableScrollColorEffect />
            <Testimonials locale={locale} />
            <Gallery locale={locale} />
            <ReelsSection locale={locale} />
            <InstagramFeed locale={locale} />
            <CTA locale={locale} />
          </>
        )}
      </main>
      <Footer locale={locale} onOpenCookiePreferences={() => setIsCookieBannerVisible(true)} />
      <FloatingWhatsApp locale={locale} />
      {!isCookieBannerVisible && <MobileStickyCTA locale={locale} />}
      <CookieBanner
        locale={locale}
        visible={isCookieBannerVisible}
        onAcceptAll={() => setConsentAndPersist(true)}
        onReject={() => setConsentAndPersist(false)}
      />
      <CookieFloatingTrigger locale={locale} visible={isCookieBannerVisible} onOpen={() => setIsCookieBannerVisible(true)} />
    </div>
  );
}
