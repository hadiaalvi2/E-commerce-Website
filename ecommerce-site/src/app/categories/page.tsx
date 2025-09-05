"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Search, ShoppingBag, Zap, Shirt, Home, Dumbbell } from 'lucide-react';

interface Category {
  name: string;
  count: number;
  icon: any;
  description: string;
  image: string;
}

const CategoriesPage = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [productCounts, setProductCounts] = useState<{[key: string]: number}>({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Icon mapping for categories
  const categoryIcons: {[key: string]: any} = {
    electronics: Zap,
    "men's clothing": Shirt,
    "women's clothing": Shirt,
    jewelery: ShoppingBag,
    default: ShoppingBag
  };

  const categoryDescriptions: {[key: string]: string} = {
    electronics: "Latest gadgets, smartphones, laptops and electronic accessories",
    "men's clothing": "Stylish and comfortable clothing for modern men",
    "women's clothing": "Trendy fashion and elegant wear for women",
    jewelery: "Beautiful jewelry pieces and accessories for every occasion"
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch all categories
        const categoriesResponse = await fetch('https://fakestoreapi.com/products/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        // Fetch product count for each category
        const counts: {[key: string]: number} = {};
        for (const category of categoriesData) {
          const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
          const products = await response.json();
          counts[category] = products.length;
        }
        setProductCounts(counts);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryData = (categoryName: string): Category => {
    const Icon = categoryIcons[categoryName] || categoryIcons.default;
    return {
      name: categoryName,
      count: productCounts[categoryName] || 0,
      icon: Icon,
      description: categoryDescriptions[categoryName] || "Discover amazing products in this category",
      image: `/api/placeholder/400/300`
    };
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-600"></div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by <span className="text-pink-600 dark:text-pink-400">Category</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Explore our carefully curated collections and find exactly what you're looking for
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No categories found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {filteredCategories.map((categoryName) => {
              const category = getCategoryData(categoryName);
              return (
                <Link 
                  key={categoryName}
                  href={`/categories/${encodeURIComponent(categoryName)}`}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 opacity-50"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-4 bg-pink-100 dark:bg-pink-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <category.icon className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white capitalize group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                            {category.name}
                          </h2>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-semibold">
                              {category.count} Products
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Category Stats */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-600">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                            {category.count}
                          </div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">Items</div>
                        </div>
                        <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                            4.8
                          </div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">Rating</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-pink-600 dark:text-pink-400 font-medium group-hover:translate-x-2 transition-transform">
                        <span>Explore</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 to-purple-600/0 group-hover:from-pink-600/5 group-hover:to-purple-600/5 transition-all duration-300"></div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Featured Categories Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Shop by Category?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Shopping by category helps you find exactly what you need faster and discover new products you'll love
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Easy Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300">Find products quickly by browsing organized categories</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Curated Selection</h3>
              <p className="text-gray-600 dark:text-gray-300">Each category features hand-picked, quality products</p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Latest Trends</h3>
              <p className="text-gray-600 dark:text-gray-300">Stay updated with the newest arrivals in each category</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
            Browse all our products or use our search feature to find exactly what you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              View All Products
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;