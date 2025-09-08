"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Search, Star, ShoppingCart, ArrowLeft, Grid, List, Filter } from 'lucide-react';
import { useCart } from '@/context/CartProvider';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

  const CategoryProductsPage = () => {
  const params = useParams();
  const categoryName = decodeURIComponent(params.category as string);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(categoryName)}`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching category products:', error);
      } finally {
        setLoading(false);
      }
    };

    if (categoryName) {
      fetchCategoryProducts();
    }
  }, [categoryName]);


  useEffect(() => {
    let filtered = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, sortBy]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      image: product.image
    });
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-600 dark:border-pink-400"></div>
        </div>
      </MainLayout>
    );
  }

  if (products.length === 0 && !loading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background text-foreground">
          <Link 
            href="/categories"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Categories</span>
          </Link>
          
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">📦</div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Category Not Found
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The category "{categoryName}" doesn't exist or has no products.
            </p>
            <Link 
              href="/categories"
              className="bg-pink-600 text-white px-8 py-4 rounded-xl hover:bg-pink-700 transition-colors font-semibold"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background text-foreground">
        {/* BreadCrumb */}
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-pink-600 transition-colors">Home</Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <Link href="/categories" className="text-gray-500 hover:text-pink-600 transition-colors">Categories</Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-900 dark:text-white font-medium capitalize">{categoryName}</span>
          </nav>
        </div>

        {/* Back Button */}
        <Link 
          href="/categories"
          className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Categories</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 capitalize">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover our amazing collection of {categoryName} products
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* View Toggle and Filter Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>
              
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 text-pink-600' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 text-pink-600' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sort Filter */}
          <div className={`${showFilters ? 'block' : 'hidden lg:block'}`}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search criteria
            </p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                viewMode === 'list' ? 'flex' : 'hover:-translate-y-1'
              }`}>
                <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'} overflow-hidden bg-gray-100 dark:bg-gray-700 relative`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    ⭐ {product.rating.rate}
                  </div>
                </div>
                
                <div className={`p-6 space-y-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div>
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                        {product.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating.rate) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300 dark:text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({product.rating.count} reviews)
                      </span>
                    </div>
                  </div>

                  <div className={`${viewMode === 'list' ? 'flex items-center justify-between' : 'space-y-3'}`}>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <div className={`${viewMode === 'list' ? '' : 'flex'} gap-2`}>
                      <Link 
                        href={`/products/${product.id}`}
                        className="flex-1 text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg font-medium transition-colors"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Category Description */}
        <div className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 lg:p-12 text-foreground">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 capitalize">
              About {categoryName}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Discover our carefully curated collection of {categoryName} products. Each item is selected for quality, 
              style, and value to ensure you get the best shopping experience possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-pink-600 text-white hover:bg-pink-700 px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                View All Products
              </Link>
              <Link
                href="/categories"
                className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-400 dark:hover:text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Other Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoryProductsPage;