import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const targetRef = useRef(null);
  
  const slides = [
    { src: "/hero-1.jpg", alt: "Specialty beans", fallback: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1920" },
    { src: "/hero-2.jpg", alt: "Artisan brewing", fallback: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920" },
    { src: "/hero-3.jpg", alt: "Premium interior", fallback: "https://images.unsplash.com/photo-1501339817302-38203b9f9a3e?auto=format&fit=crop&q=80&w=1920" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-cactus-dark">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== slides[currentSlide].fallback) {
                target.src = slides[currentSlide].fallback;
              }
            }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-cactus-dark via-cactus-dark/20 to-cactus-dark/60 z-[1]" />

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-7xl flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 font-sans text-copper font-bold uppercase text-[10px] tracking-[0.6em] bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10"
        >
          Specialty Roasters • Abbottabad
        </motion.div>
        
        <div className="flex flex-col items-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] md:text-[10vw] font-serif text-desert-sand leading-none tracking-tighter"
          >
            CACTUS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "1em" }}
            transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
            className="text-copper font-serif italic text-2xl md:text-5xl -mt-4 md:-mt-8 opacity-90 drop-shadow-2xl"
          >
            Coffee Roasters
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-desert-sand/60 text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase max-w-xl mx-auto leading-loose mb-20 px-4"
        >
          Precision Brewing. Artisanal Roasts. <br className="hidden md:block" /> Mountain Soul in Every Pour.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12"
        >
          <a
            href="#menu"
            className="group relative px-14 py-5 overflow-hidden rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white transition-all duration-500 hover:border-copper shadow-2xl"
          >
            <div className="absolute inset-0 bg-copper translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 font-sans tracking-[0.4em] text-[10px] font-bold uppercase group-hover:text-cactus-dark transition-colors px-4">
              Explore Menu
            </span>
          </a>
          <a
            href="#about"
            className="group flex items-center gap-4 text-desert-sand/80 hover:text-white transition-all"
          >
            <span className="font-sans tracking-widest text-[10px] font-bold uppercase border-b border-copper/30 pb-2 group-hover:border-copper transition-all">
              Our Journey
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-copper" />
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-20">
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`h-1 rounded-full transition-all duration-700 ${i === currentSlide ? 'bg-copper w-12' : 'bg-white/20 w-4 hover:bg-white/40'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
