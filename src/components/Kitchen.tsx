import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { MenuItem } from '../types';

interface KitchenProps {
  onAddToCart: (item: MenuItem) => void;
}

export const Kitchen = ({ onAddToCart }: KitchenProps) => {
  const foodCategories = [
    {
      title: "Handhelds",
      items: [
        { name: "Cactus Smash Burger", price: "950", desc: "Two smashed beef patties, house-made cactus sauce, and caramelized onions on a brioche bun." },
        { name: "Crispy Zinger Classic", price: "750", desc: "Local favorite: spicy breaded chicken breast with lettuce and mayo." },
        { name: "Chicken Jalapeño Panini", price: "780", desc: "Grilled chicken, spicy jalapeños, and local mozzarella pressed to perfection." }
      ]
    },
    {
      title: "Savory Bites",
      items: [
        { name: "Dynamite Chili Fries", price: "680", desc: "Crispy fries topped with spicy ground beef, cheese sauce, and sliced jalapeños." },
        { name: "Alfredo Pasta", price: "890", desc: "Creamy white sauce with mushrooms and grilled chicken, served with garlic toast." },
        { name: "Cheese Loaded Wedges", price: "550", desc: "Thick-cut potato wedges smothered in melted cheddar and ranch dressing." }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Warm Nutella Brownie", price: "450", desc: "Fudgy Belgian chocolate brownie served with a scoop of vanilla bean gelato." },
        { name: "New York Cheesecake", price: "600", desc: "Creamy classic cheesecake with a traditional graham cracker crust." },
        { name: "Artisan Cookie Box", price: "550", desc: "A selection of three house-baked cookies: Sea Salt Choc, Lotus Biscoff, and Pistachio." }
      ]
    }
  ];

  return (
    <section id="kitchen" className="py-40 bg-desert-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-copper" />
              <span className="text-copper font-bold tracking-[0.4em] uppercase text-[10px] font-display">Food Selection</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display text-cactus-dark font-medium tracking-tight"
            >
              Kitchen Menu
            </motion.h2>
          </div>
          <p className="text-cactus-dark/60 max-w-sm text-base uppercase tracking-widest leading-loose">
            Dishes are prepared fresh using quality local ingredients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 xl:gap-24">
          {foodCategories.map((category, catIdx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="mb-8 border-b border-cactus-dark/10 pb-8">
                <h3 className="text-2xl font-serif font-bold text-cactus-dark uppercase tracking-wider">{category.title}</h3>
              </div>

              <div className="space-y-12">
                {category.items.map((item) => (
                  <div key={item.name} className="group relative pr-12">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="text-lg font-serif text-cactus-dark group-hover:text-copper transition-colors duration-300">{item.name}</h4>
                      <span className="text-copper font-bold text-sm ml-4">{item.price}</span>
                    </div>
                    <p className="text-cactus-dark/40 text-[13px] leading-relaxed group-hover:text-cactus-dark/60 transition-colors">{item.desc}</p>
                    
                    <button 
                      onClick={() => onAddToCart(item)}
                      className="absolute right-0 top-0 p-2 text-copper border border-copper/10 rounded-full hover:bg-copper hover:text-cactus-dark transition-all duration-300"
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
