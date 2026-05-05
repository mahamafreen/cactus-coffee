import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, ShoppingCart, Package, Truck, Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem, DeliveryMethod } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (name: string, delta: number) => void;
  removeFromCart: (name: string) => void;
}

export const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }: CartDrawerProps) => {
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('pickup');
  const [address, setAddress] = useState('');

  const total = cart.reduce((sum, item) => {
    const priceStr = item.price.split(' / ')[0].replace(/[^0-9]/g, '');
    const price = parseInt(priceStr) || 0;
    return sum + (price * item.quantity);
  }, 0);

  const deliveryFee = deliveryMethod === 'delivery' ? 150 : 0;
  const finalTotal = total + deliveryFee;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-desert-sand z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-cactus-dark/10 flex justify-between items-center bg-white/50">
              <h2 className="text-3xl font-serif text-cactus-dark">Your Order</h2>
              <button onClick={onClose} className="p-2 hover:bg-cactus-dark/5 rounded-full transition-colors">
                <X className="w-6 h-6 text-cactus-dark" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-cactus-dark/40 py-20">
                  <ShoppingCart className="w-16 h-16 mb-4 opacity-20" />
                  <p className="font-serif">No items in your order yet.</p>
                </div>
              ) : (
                <>
                  <div className="bg-white/50 p-2 rounded-2xl flex gap-2 border border-cactus-dark/5">
                    <button
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 font-display text-xs tracking-widest ${
                        deliveryMethod === 'pickup' 
                          ? 'bg-cactus-dark text-desert-sand shadow-lg' 
                          : 'text-cactus-dark/40 hover:bg-white'
                      }`}
                    >
                      <Package className="w-4 h-4" />
                      PICKUP
                    </button>
                    <button
                      onClick={() => setDeliveryMethod('delivery')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 font-display text-xs tracking-widest ${
                        deliveryMethod === 'delivery' 
                          ? 'bg-cactus-dark text-desert-sand shadow-lg' 
                          : 'text-cactus-dark/40 hover:bg-white'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      DELIVERY
                    </button>
                  </div>

                  {deliveryMethod === 'delivery' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      <label className="text-[10px] uppercase tracking-[0.2em] text-cactus-dark/40 font-bold font-display ml-2">Delivery Address</label>
                      <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your street address, building, and apartment number..."
                        className="w-full bg-white border border-cactus-dark/10 rounded-2xl p-5 text-cactus-dark focus:border-copper focus:outline-none transition-all duration-300 text-sm placeholder:text-cactus-dark/20 min-h-[100px]"
                      />
                    </motion.div>
                  )}

                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.name} className="flex justify-between gap-4 border-b border-cactus-dark/5 pb-6">
                        <div className="flex-1">
                          <h4 className="font-serif text-lg text-cactus-dark">{item.name}</h4>
                          <p className="text-copper font-bold text-sm mt-1">PKR {item.price}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center bg-white border border-cactus-dark/10 rounded-full px-2 py-1">
                            <button 
                              onClick={() => updateQuantity(item.name, -1)}
                              className="p-1 hover:text-copper transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-bold text-cactus-dark">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.name, 1)}
                              className="p-1 hover:text-copper transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.name)}
                            className="p-2 text-cactus-dark/20 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 bg-white border-t border-cactus-dark/10 space-y-6">
                <div className="space-y-3 pb-4 border-b border-cactus-dark/5">
                  <div className="flex justify-between items-end">
                    <span className="uppercase tracking-[0.2em] text-xs text-cactus-dark/60 font-bold font-display">Subtotal</span>
                    <span className="text-xl font-serif text-cactus-dark">PKR {total}</span>
                  </div>
                  {deliveryMethod === 'delivery' && (
                    <div className="flex justify-between items-end">
                      <span className="uppercase tracking-[0.2em] text-xs text-cactus-dark/60 font-bold font-display">Delivery Fee</span>
                      <span className="text-xl font-serif text-cactus-dark">PKR {deliveryFee}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-end pt-2">
                    <span className="uppercase tracking-[0.2em] text-xs text-cactus-dark font-bold font-display">Grand Total</span>
                    <span className="text-3xl font-serif text-cactus-dark">PKR {finalTotal}</span>
                  </div>
                </div>
                
                <button 
                  disabled={deliveryMethod === 'delivery' && !address.trim()}
                  className="w-full py-5 bg-cactus-dark text-desert-sand rounded-xl font-bold hover:bg-copper disabled:bg-cactus-dark/20 disabled:hover:bg-cactus-dark/20 transition-all duration-300 shadow-xl font-display tracking-widest text-sm"
                >
                  {deliveryMethod === 'delivery' && !address.trim() ? 'ENTER ADDRESS' : 'PLACE ORDER'}
                </button>
                <p className="text-xs text-center text-cactus-dark/60 uppercase tracking-widest leading-loose font-display">
                  Prices include all applicable taxes.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
