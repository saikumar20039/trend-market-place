
import { Product } from '../contexts/CartContext';

// Mock product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Casual White T-Shirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'clothing',
    description: 'A comfortable, everyday white t-shirt made from 100% organic cotton. Perfect for casual wear or layering.',
  },
  {
    id: '2',
    name: 'Classic Blue Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'clothing',
    description: 'Timeless blue jeans with a straight fit. Made from durable denim with just the right amount of stretch for comfort.',
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 89.95,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'shoes',
    description: 'Lightweight and responsive running shoes designed for comfort and performance. Perfect for daily runs or marathons.',
  },
  {
    id: '4',
    name: 'Leather Wallet',
    price: 34.50,
    image: 'https://images.unsplash.com/photo-1517254797898-04efc9d2832b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
    description: 'Genuine leather wallet with multiple card slots and a coin pocket. Slim design fits comfortably in your pocket.',
  },
  {
    id: '5',
    name: 'Wireless Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
    description: 'Premium wireless headphones with active noise cancellation, long battery life, and crystal-clear sound quality.',
  },
  {
    id: '6',
    name: 'Smartwatch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'electronics',
    description: 'Track your fitness, receive notifications, and more with this feature-packed smartwatch. Includes heart rate monitoring and GPS.',
  },
  {
    id: '7',
    name: 'Backpack',
    price: 49.95,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
    description: 'Durable backpack with multiple compartments, perfect for daily commutes or weekend adventures. Water-resistant fabric keeps your belongings dry.',
  },
  {
    id: '8',
    name: 'Sunglasses',
    price: 79.50,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
    description: 'Classic sunglasses that provide 100% UV protection. Lightweight frame and polarized lenses for reduced glare.',
  }
];

// Categories for filtering
export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'shoes', name: 'Shoes' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'electronics', name: 'Electronics' }
];

// Get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === 'all') {
    return products;
  }
  return products.filter(product => product.category === categoryId);
}

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
