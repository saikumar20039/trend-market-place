
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border">
        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. We've received your order and will process it right away.
        </p>
        
        <div className="bg-gray-50 rounded p-4 mb-6">
          <p className="text-sm text-gray-500 mb-1">Order Number</p>
          <p className="font-bold">{orderNumber}</p>
        </div>
        
        <p className="text-sm text-gray-600 mb-6">
          A confirmation email has been sent to your email address with the order details.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="default" className="bg-navy-600 hover:bg-navy-700">
              Return to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
