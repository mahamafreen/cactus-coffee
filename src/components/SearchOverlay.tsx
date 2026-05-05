import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Plus } from 'lucide-react';
import { MenuItem } from '../types';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
  menuItems: MenuItem[];
}

export const SearchOverlay = ({ 
  isOpen, 
  onClose, 
  onAddToCart,
  menuItems 
}: SearchOverlayProps) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return menuItems.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q)
    );
  }, [query, menuItems]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          className="fixed inset-0 z-[200] bg-cactus-dark/95 flex flex-col p-6 md:p-20"
        >
          <div className="max-w-4xl mx-auto w-full flex flex-col h-full">
            <div className="flex justify-between items-center mb-12">
              <span className="text-copper font-bold tracking-[0.4em] uppercase text-[10px] font-display">Global Search</span>
              <button 
                onClick={onClose}
                className="p-4 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="relative mb-12">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full bg-transparent border-b-2 border-white/10 py-8 text-4xl md:text-6xl font-serif text-white focus:border-copper focus:outline-none transition-all placeholder:text-white/5"
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 text-white/10" />
            </div>

            <div className="flex-1 overflow-y-auto space-y-8 pb-20 custom-scrollbar">
              {results.length > 0 ? (
                results.map((item) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={item.name} 
                    className="group bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-all border border-white/5 flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-2xl font-serif text-white mb-2">{item.name}</h4>
                      <p className="text-desert-sand/40 text-sm max-w-md uppercase tracking-widest">{item.desc}</p>
                      <span className="block mt-4 text-copper font-bold">{item.price}</span>
                    </div>
                    <button 
                      onClick={() => {
                        onAddToCart(item);
                        onClose();
                      }}
                      className="p-4 bg-copper text-cactus-dark rounded-full hover:scale-110 transition-transform"
                    >
                      <Plus className="w-6 h-6" />
                    </button>
                  </motion.div>
                ))
              ) : query.trim() ? (
                <div className="text-center py-20">
                  <p className="text-white/20 font-serif text-2xl italic">No matches found for "{query}"</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {['Cortado', 'Spanish Latte', 'Lotus Cheesecake', 'Loaded Fries'].map(tag => (
                     <button 
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="p-6 border border-white/10 rounded-2xl text-white/40 hover:text-copper hover:border-copper transition-all text-sm font-display tracking-widest uppercase"
                     >
                       {tag}
                     </button>
                   ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
