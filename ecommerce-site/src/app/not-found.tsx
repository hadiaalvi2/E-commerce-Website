"use client";

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Home, Search, ShoppingBag, ArrowLeft } from 'lucide-react';

const Custom404Page = () => {
  const popularCategories = [
    { name: "Electronics", href: "/categories/electronics" },
    { name: "Men's Clothing", href: "/categories/men's%20clothing" },
    { name: "Women's Clothing", href: "/categories/women's%20clothing" },
    { name: "Jewelery", href: "/categories/jewelery" }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold text-pink-200 dark:text-pink-900/50 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  <Search className="h-16 w-16 text-pink-600 dark:text-pink-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              The page you're looking for seems to have wandered off into the digital wilderness. 
              Don't worry, it happens to the best of us!
            </p>
            <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-2xl p-6 max-w-xl mx-auto">
              <p className="text-pink-800 dark:text-pink-200 font-medium">
                💡 Pro Tip: Double-check the URL or use our search to find what you're looking for.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Home className="h-5 w-5" />
                <span>Go Home</span>
              </Link>
              
              <Link
                href="/products"
                className="inline-flex items-center justify-center space-x-2 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-400 dark:hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Browse Products</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Go Back</span>
              </button>
            </div>
          </div>

          {/* Popular Categories */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Popular Categories
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {popularCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-pink-300 dark:hover:border-pink-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {category.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Section */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Still Can't Find What You're Looking For?
            </h3>
            <p className="text-pink-100 text-lg mb-6 max-w-2xl mx-auto">
              Try our powerful search feature or browse our categories to discover amazing products
            </p>
            
            <div className="max-w-md mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-pink-300 text-lg"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const query = (e.target as HTMLInputElement).value;
                      if (query.trim()) {
                        window.location.href = `/products?search=${encodeURIComponent(query)}`;
                      }
                    }
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/categories"
                className="bg-white text-pink-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Browse Categories
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Error code: 404 | If this problem persists, please contact our support team
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Custom404Page;