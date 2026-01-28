
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory, categories } from '../data/products';
import { Button } from '@/components/ui/button';
import { Filter, SortAsc, SortDesc } from 'lucide-react';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [products, setProducts] = useState(getProductsByCategory(categoryParam));
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Update products when category changes
    let filtered = getProductsByCategory(selectedCategory);
    
    // Apply sorting if needed
    if (sortOrder === 'asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    
    setProducts(filtered);
  }, [selectedCategory, sortOrder]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Update URL without refreshing
    const newUrl = categoryId === 'all' 
      ? '/products' 
      : `/products?category=${categoryId}`;
    window.history.pushState({}, '', newUrl);
  };

  const handleSort = (order: 'asc' | 'desc') => {
    setSortOrder(sortOrder === order ? null : order);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      {/* Mobile Filter/Sort Button */}
      <div className="md:hidden mb-4">
        <Button 
          variant="outline" 
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex justify-center items-center"
        >
          <Filter className="h-4 w-4 mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters & Sort'}
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters & Sort - Desktop (always visible) and Mobile (conditionally visible) */}
        <div 
          className={`${
            showFilters ? 'block' : 'hidden'
          } md:block w-full md:w-64 space-y-6`}
        >
          {/* Categories */}
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h2 className="font-semibold mb-4 text-lg">Categories</h2>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <Button
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      selectedCategory === category.id 
                        ? 'bg-navy-600 hover:bg-navy-700 text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sort Options */}
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h2 className="font-semibold mb-4 text-lg">Sort By Price</h2>
            <div className="flex flex-col space-y-2">
              <Button
                variant={sortOrder === 'asc' ? "default" : "ghost"}
                className={`justify-start ${
                  sortOrder === 'asc' 
                    ? 'bg-navy-600 hover:bg-navy-700 text-white' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => handleSort('asc')}
              >
                <SortAsc className="h-4 w-4 mr-2" />
                Low to High
              </Button>
              <Button
                variant={sortOrder === 'desc' ? "default" : "ghost"}
                className={`justify-start ${
                  sortOrder === 'desc' 
                    ? 'bg-navy-600 hover:bg-navy-700 text-white' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => handleSort('desc')}
              >
                <SortDesc className="h-4 w-4 mr-2" />
                High to Low
              </Button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
