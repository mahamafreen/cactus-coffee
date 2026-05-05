import { useRef } from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  const menuCategories = [
    {
      title: "Mainness",
      items: [
        { name: "Espresso", price: "390 / 590", desc: "Single or double shot of our house signature roast." },
        { name: "Americano / Long Black", price: "450 / 650", desc: "Pure espresso diluted with mountain spring water." },
        { name: "Cappuccino", price: "550 / 750", desc: "Perfectly balanced espresso, steamed milk, and dense foam." },
        { name: "Café Latte", price: "550 / 750", desc: "Our smooth espresso with a generous layer of silky micro-foam." },
        { name: "Spanish Latte", price: "650 / 850", desc: "A sweet, creamy favorite with condensed milk and double espresso." },
        { name: "Caramel Macchiato", price: "650 / 850", desc: "Marked with espresso and finished with rich caramel drizzle." },
        { name: "Cortado", price: "650 / 850", desc: "Equal parts espresso and textured milk for the purist." },
        { name: "Customized Coffee", price: "Variable", desc: "Tailored exactly to your sensory preferences." }
      ]
    },
    {
      title: "Flavor Archive",
      items: [
        { name: "Caramel / Vanilla", price: "+100", desc: "Classic sweetness to complement your brew." },
        { name: "Roasted Hazelnut", price: "+100", desc: "Nutty, earthy notes for a deeper flavor profile." },
        { name: "Butter Scotch", price: "+100", desc: "Rich and buttery with a smooth toasted finish." },
        { name: "Pumpkin Spice", price: "+100", desc: "A warming seasonal blend of autumn spices." },
        { name: "Double Chocolate", price: "+100", desc: "Intense cocoa infusion for chocolate lovers." },
        { name: "French Vanilla", price: "+100", desc: "A more aromatic, floral take on the classic bean." }
      ]
    },
    {
      title: "Students / Testers",
      items: [
        { name: "Cappuccino (Tester)", price: "350", desc: "Available for groups and couples only." },
        { name: "Café Latte (Tester)", price: "350", desc: "Specially priced for our local student community." },
        { name: "Flavoured (Tester)", price: "450", desc: "Your choice of any signature flavor at a test price." }
      ]
    }
  ];

  return (
    <section id="menu" className="py-40 bg-cactus-dark text-desert-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-copper" />
              <span className="text-copper font-bold tracking-[0.4em] uppercase text-[10px] font-display">Brew Bar</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display text-white font-medium tracking-tight"
            >
              Beverages
            </motion.h2>
          </div>
          <p className="text-desert-sand/60 max-w-sm text-base uppercase tracking-widest leading-loose">
            Prices in PKR. All coffee is prepared with specialty Arabica beans.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 xl:gap-24">
          {menuCategories.map((category, catIdx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-12 border-b border-white/5 pb-8">
                <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-wider">{category.title}</h3>
              </div>

              <div className="space-y-12">
                {category.items.map((item) => (
                  <div key={item.name} className="group relative pr-12">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="text-lg font-serif group-hover:text-copper transition-colors duration-300">{item.name}</h4>
                      <span className="text-copper font-bold text-sm ml-4">{item.price}</span>
                    </div>
                    <p className="text-desert-sand/30 text-[13px] leading-relaxed group-hover:text-desert-sand/60 transition-colors uppercase tracking-widest">{item.desc}</p>
                    
                    <button 
                      onClick={() => onAddToCart(item)}
                      className="absolute right-0 top-0 p-2 text-copper border border-copper/20 rounded-full hover:bg-copper hover:text-cactus-dark transition-all duration-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
