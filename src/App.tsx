import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

// Types
import { MenuItem, CartItem } from './types';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { Kitchen } from './components/Kitchen';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchOverlay } from './components/SearchOverlay';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Flatten menu for search
  const allMenuItems = useMemo(() => {
    const brewBarItems = [
      { name: 'Espresso', price: '350', desc: 'PURE, ARTISAN SHOT' },
      { name: 'Cortado', price: '450', desc: '1:1 RATIO, INTENSE BALANCE' },
      { name: 'Flat White', price: '500', desc: 'SILKY TEXTURE, DOUBLE SHOT' },
      { name: 'Spanish Latte', price: '580', desc: 'SWEETENED INDULGENCE' },
      { name: 'Manual Brew (V60)', price: '650', desc: 'CHOICE OF SINGLE ORIGIN BEANS' },
      { name: 'Nitro Cold Brew', price: '600', desc: 'INFUSED WITH NITROGEN, CREAMY FINISH' },
      { name: 'Lavender Matcha', price: '650', desc: 'CEREMONIAL GRADE WITH FLORAL NOTES' },
      { name: 'House Iced Tea', price: '450', desc: 'COLD BREWED WITH HIMALAYAN HERBS' }
    ];
    const kitchenItems = [
      { name: 'Cactus Burger', price: '850', desc: 'ANGUS BEEF, SECRET SAUCE' },
      { name: 'Lotus Cheesecake', price: '650', desc: 'CREAMY TEXTURE, BISCOFF CRUMBLE' },
      { name: 'Loaded Fries', price: '450', desc: 'SPICY CHEESE SAUCE, JALAPEÑOS' },
      { name: 'Tandoori Croissant', price: '550', desc: 'FUSION FLAVORS, FLAKY PASTRY' },
      { name: 'Paninies', price: '650', desc: 'PRESSED SOURDOUGH, PESTO CHICKEN' },
      { name: 'Classic Omelette', price: '450', desc: 'FARM FRESH EGGS, SOURDOUGH TOAST' },
      { name: 'Acai Bowl', price: '750', desc: 'FROZEN ACAI, FRESH BERRIES, GRANOLA' },
      { name: 'Pancakes', price: '650', desc: 'BUTTERMILK STACK, MAPLE SYRUP, FRUIT' }
    ];
    return [...brewBarItems, ...kitchenItems];
  }, []);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (name: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.name === name) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const removeFromCart = (name: string) => {
    setCart(prev => prev.filter(i => i.name !== name));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="parallax-container selection:bg-copper selection:text-cactus-dark overflow-x-hidden antialiased">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <Hero />
      <About />
      <MenuSection onAddToCart={addToCart} />
      <Kitchen onAddToCart={addToCart} />
      <Gallery />
      <Location />
      <Contact />
      <Footer />

      {/* Floating Cart Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: cartCount > 0 ? 1 : 0, opacity: cartCount > 0 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-10 right-10 z-50 bg-copper text-cactus-dark p-6 rounded-full shadow-2xl flex items-center gap-4 group"
      >
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-cactus-dark text-copper text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-copper">
            {cartCount}
          </span>
        </div>
        <span className="font-bold text-sm hidden group-hover:block transition-all font-display tracking-widest">YOUR ORDER</span>
      </motion.button>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={addToCart}
        menuItems={allMenuItems}
      />
    </main>
  );
}
