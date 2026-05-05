import { motion } from 'motion/react';

export const Gallery = () => {
  const images = [
    { src: "/gallery-1.webp", fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200", span: "row-span-2 col-span-2", alt: "Vibrant Cafe Interior" },
    { src: "/gallery-2.webp", fallback: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800", span: "col-span-1", alt: "Freshly Roasted Beans" },
    { src: "/gallery-3.webp", fallback: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800", span: "col-span-1", alt: "Barista Extraction" },
    { src: "/gallery-4.webp", fallback: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1200", span: "col-span-2", alt: "Coffee Art" },
    { src: "/gallery-5.webp", fallback: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", span: "col-span-1", alt: "Rustic Seating" },
    { src: "/gallery-6.webp", fallback: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800", span: "row-span-2 col-span-1", alt: "Minimalist Aesthetic" },
    { src: "/gallery-7.webp", fallback: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800", span: "col-span-1", alt: "Cozy Corner" },
  ];

  return (
    <section id="gallery" className="py-40 bg-cactus-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-copper" />
            <span className="text-copper font-bold tracking-[0.4em] uppercase text-[10px] font-display">Gallery</span>
            <div className="h-[1px] w-12 bg-copper" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-white font-medium tracking-tight">Atmosphere</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-xl ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.indexOf('unsplash.com') === -1) {
                    target.src = img.fallback;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
