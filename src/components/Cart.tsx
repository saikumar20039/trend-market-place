
import React from 'react';
import { X, ShoppingCart, Trash, Minus, Plus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, toggleCart, removeItem, updateQuantity, clearCart, subtotal } = useCart();
  const { items, isOpen } = state;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/30 z-50"
        onClick={toggleCart}
      />

      {/* Cart Panel */}
      <div className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 animate-cart-slide-in overflow-y-auto`}>
        <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white">
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 mr-2" />
            <h2 className="font-semibold">Your Cart</h2>
          </div>
          <Button size="icon" variant="ghost" onClick={toggleCart} aria-label="Close cart">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 p-4">
            <ShoppingCart className="h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button onClick={toggleCart} variant="outline">Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="divide-y">
              {items.map((item) => (
                <div key={item.product.id} className="p-4 flex">
                  <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 bg-gray-100">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium line-clamp-1">{item.product.name}</h3>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6" 
                        onClick={() => removeItem(item.product.id)}
                        aria-label="Remove item"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      ${item.product.price.toFixed(2)}
                    </p>

                    <div className="flex items-center mt-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8" 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="mx-3 w-6 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8" 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t mt-auto sticky bottom-0 bg-white">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <Link 
                  to="/checkout" 
                  className="w-full bg-navy-600 hover:bg-navy-700 text-white py-2 px-4 rounded font-medium text-center"
                  onClick={toggleCart}
                >
                  Checkout
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center"
                  onClick={clearCart}
                >
                  <Trash className="h-4 w-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
