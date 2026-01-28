
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy-950 text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Shop the Latest Trends
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-300">
            Discover our curated collection of high-quality products at competitive prices. 
            From fashion to electronics, we've got you covered.
          </p>
          <div className="flex space-x-4">
            <Link to="/products">
              <Button size="lg" className="bg-navy-600 hover:bg-navy-500 text-white">
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.filter(c => c.id !== 'all').map((category) => (
              <Link 
                key={category.id} 
                to={`/products?category=${category.id}`}
                className="group relative rounded-lg overflow-hidden bg-navy-800 aspect-square flex items-center justify-center hover:bg-navy-700 transition-colors"
              >
                <div className="text-center z-10 p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <span className="inline-block text-white/80 group-hover:text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-navy-600 hover:text-navy-800 flex items-center">
              View all products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
              <p className="text-lg text-gray-300 mb-6">
                Get 20% off on your first purchase when you sign up for our newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 text-gray-900"
                />
                <Button className="bg-navy-600 hover:bg-navy-500">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-navy-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Limited Time Offer</h3>
                <p className="text-gray-300 mb-4">Free shipping on all orders over $50. Don't miss out!</p>
                <Link to="/products">
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-navy-100 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="h-8 w-8 text-navy-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
              <p className="text-gray-600">
                We carefully select every product to ensure the highest quality standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-navy-100 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="h-8 w-8 text-navy-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick and reliable shipping to get your products to you as soon as possible.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-navy-100 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="h-8 w-8 text-navy-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Shopping</h3>
              <p className="text-gray-600">
                Your transactions are secure with our state-of-the-art payment processing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
