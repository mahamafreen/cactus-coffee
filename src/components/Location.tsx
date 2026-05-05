import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export const Location = () => {
  return (
    <section id="location" className="py-40 bg-desert-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col xl:flex-row gap-0 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
          <div className="xl:w-[45%] p-16 xl:p-24 bg-cactus-dark text-desert-sand relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <MapPin className="text-copper w-24 h-24" />
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-copper" />
              <span className="text-copper font-bold tracking-[0.3em] uppercase text-[10px]">Location</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display mb-16 leading-tight font-medium tracking-tight">Find us in <br/><span className="text-copper italic underline underline-offset-[12px] decoration-1 font-serif">Abbottabad.</span></h2>
            
            <div className="space-y-12 relative z-10">
              <div className="flex gap-8 group">
                <div className="p-4 bg-white/5 rounded-full text-copper group-hover:bg-copper group-hover:text-cactus-dark transition-all duration-500 overflow-hidden">
                   <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="uppercase text-[9px] tracking-[0.3em] text-copper/60 mb-3 font-bold">Sanctuary Address</p>
                  <p className="text-xl font-light opacity-90 max-w-xs">Jinnah Road, Near Fawara Chowk, Abbottabad, KP, Pakistan</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="p-4 bg-white/5 rounded-full text-copper group-hover:bg-copper group-hover:text-cactus-dark transition-all duration-500 overflow-hidden">
                   <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="uppercase text-[9px] tracking-[0.3em] text-copper/60 mb-3 font-bold">Artisan Hours</p>
                  <div className="grid grid-cols-2 gap-x-10 text-lg font-light opacity-90">
                    <p>Mon - Fri</p><p>08:00 - 23:00</p>
                    <p>Sat - Sun</p><p>09:00 - 01:00</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="p-4 bg-white/5 rounded-full text-copper group-hover:bg-copper group-hover:text-cactus-dark transition-all duration-500 overflow-hidden">
                   <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="uppercase text-[9px] tracking-[0.3em] text-copper/60 mb-3 font-bold">Contact</p>
                  <p className="text-xl font-light opacity-90">+92 992 1234567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-[55%] min-h-[500px] relative">
             <img 
               src="/location-bg.jpg" 
               alt="Map of Abbottabad" 
               className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4] contrast-125"
               referrerPolicy="no-referrer"
               onError={(e) => {
                 const target = e.target as HTMLImageElement;
                 const fallback = "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200";
                 if (target.src !== fallback) {
                   target.src = fallback;
                 }
               }}
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-cactus-dark/60 backdrop-blur-md p-8 rounded-full border border-copper/30 shadow-2xl"
                >
                  <div className="relative">
                    <MapPin className="text-copper w-10 h-10" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-copper rounded-full animate-ping" />
                  </div>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
