import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={targetRef} id="about" className="py-40 px-6 bg-desert-sand relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div 
          style={{ y: textY }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-copper" />
            <span className="text-copper font-bold tracking-[0.3em] uppercase text-[10px] font-display">Specialty Coffee</span>
            <div className="h-[1px] w-12 bg-copper" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-cactus-dark mb-10 leading-[1.1] font-medium tracking-tight">
            Specialty <span className="italic font-serif text-copper">Roasts</span> in Abbottabad.
          </h2>
          <p className="text-lg md:text-xl text-cactus-dark/80 leading-relaxed mb-12 font-light max-w-3xl mx-auto">
            Located in Mandian, Abbottabad, Cactus Coffee focuses on high-quality beans and precise brewing. We bring specialty coffee culture to the mountains, offering a dedicated space for coffee lovers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-cactus-dark/10">
            <div className="group">
              <p className="text-4xl font-serif text-cactus-dark group-hover:text-copper transition-colors">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-cactus-dark/40 mt-3 font-bold">Arabica</p>
            </div>
            <div className="group">
              <p className="text-4xl font-serif text-cactus-dark group-hover:text-copper transition-colors">Micro</p>
              <p className="text-[10px] uppercase tracking-widest text-cactus-dark/40 mt-3 font-bold">Lot Sourcing</p>
            </div>
            <div className="group">
              <p className="text-4xl font-serif text-cactus-dark group-hover:text-copper transition-colors">Direct</p>
              <p className="text-[10px] uppercase tracking-widest text-cactus-dark/40 mt-3 font-bold">Trade</p>
            </div>
            <div className="group">
              <p className="text-4xl font-serif text-cactus-dark group-hover:text-copper transition-colors">2018</p>
              <p className="text-[10px] uppercase tracking-widest text-cactus-dark/40 mt-3 font-bold">Established</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
