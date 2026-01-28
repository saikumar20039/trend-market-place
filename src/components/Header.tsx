
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';

const Header = () => {
  const { toggleCart, totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-navy-800">
          ShopWave
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-navy-600 transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-navy-600 transition-colors">
            Shop
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-navy-600 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-navy-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Cart Button */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="relative" 
            onClick={toggleCart}
            aria-label="Open cart"
          >
            <ShoppingCart className="h-4 w-4" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-navy-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded" 
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
