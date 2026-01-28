
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Product } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="flex flex-col h-full bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative h-60 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
          </Link>
          <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-navy-800">${product.price.toFixed(2)}</span>
          <Button 
            size="sm" 
            onClick={() => addItem(product)}
            className="bg-navy-600 hover:bg-navy-700"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
