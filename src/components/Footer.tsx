export const Footer = () => {
  return (
     <footer className="bg-cactus-dark border-t border-white/5 py-40 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-32">
              <div className="max-w-sm">
                 <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl font-serif font-bold text-white tracking-tight">CACTUS</span>
                 </div>
                 <p className="text-desert-sand/40 text-lg leading-relaxed font-light">
                    Specialty coffee shop located in Mandian, Abbottabad.
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-24 xl:gap-40">
                 <div className="space-y-6">
                    <p className="text-copper uppercase text-xs tracking-[0.4em] mb-10 font-bold">Discover</p>
                    <a href="#about" className="block text-desert-sand/40 hover:text-white text-xs transition-colors uppercase tracking-[0.3em]">Our Story</a>
                    <a href="#menu" className="block text-desert-sand/40 hover:text-white text-xs transition-colors uppercase tracking-[0.3em]">Menu</a>
                    <a href="#gallery" className="block text-desert-sand/40 hover:text-white text-xs transition-colors uppercase tracking-[0.3em]">Gallery</a>
                    <a href="#location" className="block text-desert-sand/40 hover:text-white text-xs transition-colors uppercase tracking-[0.3em]">Find Us</a>
                 </div>
                 <div className="space-y-6">
                    <p className="text-copper uppercase text-xs tracking-[0.4em] mb-10 font-bold">Social</p>
                    <a href="#" className="flex items-center gap-3 text-desert-sand/40 hover:text-white text-xs transition-colors uppercase tracking-[0.3em]">Instagram</a>
                    <a href="#" className="flex items-center gap-3 text-desert-sand/40 hover:text-white text-xs transition-colors uppercase tracking-[0.3em]">Facebook</a>
                    <a href="#" className="flex items-center gap-3 text-desert-sand/40 hover:text-white text-xs transition-colors uppercase tracking-[0.3em]">Pinterest</a>
                 </div>
              </div>
           </div>
           
           <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
              <p className="text-[10px] text-white/10 uppercase tracking-[0.4em] font-medium">
                 © 2026 Cactus Coffee Specialty Shop.
              </p>
              <div className="flex gap-10">
                <a href="#" className="text-[10px] text-white/10 hover:text-copper transition-colors uppercase tracking-[0.4em]">Privacy Policy</a>
                <a href="#" className="text-[10px] text-white/10 hover:text-copper transition-colors uppercase tracking-[0.4em]">Terms of Service</a>
              </div>
           </div>
        </div>
     </footer>
  );
}
