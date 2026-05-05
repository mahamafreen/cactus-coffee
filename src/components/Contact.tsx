import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-cactus-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="w-full h-full border-l border-b border-copper rounded-bl-[10rem]" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block mb-8 px-6 py-2 border border-copper/20 rounded-full"
            >
              <span className="text-copper font-bold tracking-[0.4em] uppercase text-xs font-sans">Reach Out</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-12 leading-tight">
              Let's start a <br />
              <span className="text-copper italic">Conversation.</span>
            </h2>
            <p className="text-desert-sand/40 text-xl font-light mb-16 leading-relaxed max-w-md">
              Whether you're inquiring about our beans, looking for event catering, or just want to say hi, we're always here.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="group">
                <p className="text-copper uppercase text-[10px] tracking-[0.4em] mb-6 font-bold">Location</p>
                <p className="text-desert-sand/80 text-lg font-light leading-relaxed group-hover:text-white transition-colors">
                  Mandian, Jinnah Rd,<br />
                  Abbottabad, KP 22010
                </p>
              </div>
              <div className="group">
                <p className="text-copper uppercase text-[10px] tracking-[0.4em] mb-6 font-bold">General Inquiries</p>
                <a href="mailto:hello@cactuscoffee.com" className="text-desert-sand/80 text-lg font-light group-hover:text-white transition-colors">
                  hello@cactuscoffee.com
                </a>
              </div>
            </div>

            <div className="space-y-12">
              <div className="group">
                <p className="text-copper uppercase text-[10px] tracking-[0.4em] mb-6 font-bold">Call Us</p>
                <a href="tel:+929921234567" className="text-desert-sand/80 text-lg font-light group-hover:text-white transition-colors underline underline-offset-8 decoration-copper/30">
                  +92 992 1234567
                </a>
              </div>
              <div className="group">
                <p className="text-copper uppercase text-[10px] tracking-[0.4em] mb-6 font-bold">Follow</p>
                <div className="flex gap-6">
                  <a href="#" className="text-desert-sand/40 hover:text-copper transition-colors"><Instagram className="w-6 h-6" /></a>
                  <a href="#" className="text-desert-sand/40 hover:text-copper transition-colors"><Facebook className="w-6 h-6" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
