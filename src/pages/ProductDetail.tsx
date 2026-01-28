
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, ChevronLeft, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist.</p>
        <Link to="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Button 
          variant="ghost" 
          className="flex items-center text-gray-600 hover:text-navy-700" 
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <span className="text-gray-500 uppercase text-sm tracking-wide">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
            <div className="mt-4">
              <span className="text-2xl font-bold text-navy-800">${product.price.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="border-t border-b py-6">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-gray-700 w-24">Quantity:</span>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4 w-8 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button 
              size="lg" 
              onClick={handleAddToCart}
              className="w-full md:w-auto bg-navy-600 hover:bg-navy-700"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Shipping Information:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Free shipping on orders over $50</li>
              <li>Standard delivery: 3-5 business days</li>
              <li>Express delivery: 1-2 business days</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Return Policy:</h3>
            <p className="text-sm text-gray-700">
              We offer a 30-day return policy for unopened items in their original packaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
