
import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

// Types
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLEAR_CART' };

interface CartContextProps {
  state: CartState;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

// Initial state
const initialState: CartState = {
  items: [],
  isOpen: false,
};

// Reducer function
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.product.id === action.payload.id);
      
      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return { ...state, items: updatedItems };
      } else {
        // New item
        return {
          ...state,
          items: [...state.items, { product: action.payload, quantity: 1 }]
        };
      }
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload)
      };
      
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.product.id !== id)
        };
      }
      
      return {
        ...state,
        items: state.items.map(item => 
          item.product.id === id ? { ...item, quantity } : item
        )
      };
    }
    
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen
      };
      
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };
      
    default:
      return state;
  }
}

// Create context
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage if available
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : initialState;
    }
    return initialState;
  });
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }, [state]);
  
  // Calculate total items in cart
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate subtotal
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  
  // Actions
  function addItem(product: Product) {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast.success(`${product.name} added to cart`);
  }
  
  function removeItem(productId: string) {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
    toast.info('Item removed from cart');
  }
  
  function updateQuantity(productId: string, quantity: number) {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity }
    });
  }
  
  function toggleCart() {
    dispatch({ type: 'TOGGLE_CART' });
  }
  
  function clearCart() {
    dispatch({ type: 'CLEAR_CART' });
    toast.info('Cart cleared');
  }
  
  const value = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    toggleCart,
    clearCart,
    totalItems,
    subtotal
  };
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
