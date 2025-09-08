"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Star, Truck, Shield, Headphones, Zap, TrendingUp, Gift } from 'lucide-react';

const LandingPage = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 199.99,
      originalPrice: 299.99,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      reviews: 1247
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 149.99,
      originalPrice: 199.99,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviews: 892
    },
    {
      id: '3',
      name: 'Portable Bluetooth Speaker',
      price: 79.99,
      originalPrice: 119.99,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      reviews: 634
    }
  ];

  const categories = [
    { name: 'Electronics', icon: Zap, count: '500+' },
    { name: 'Fashion', icon: ShoppingBag, count: '800+' },
    { name: 'Home & Garden', icon: Gift, count: '300+' },
    { name: 'Sports', icon: TrendingUp, count: '200+' }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders over $50'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure payment processing'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service'
    }
  ];

  return (
    <div className="space-y-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="absolute inset-0 bg-white/30 dark:bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Shop Smart,
                  <span className="block text-pink-600 dark:text-pink-400">
                    Live Better
                  </span>
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-lg">
                  Discover amazing products at unbeatable prices. Your premium shopping destination with curated collections and exclusive deals.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products"
                  className="group bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/categories"
                  className="border-2 border-gray-600 hover:border-pink-600 text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:border-gray-500 dark:hover:border-pink-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Browse Categories
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">10K+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">50K+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">4.9</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-gray-700/50">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm opacity-80">Limited Time Offer</div>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                      70% OFF
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Premium Collection</h3>
                  <p className="text-pink-100 mb-6">Exclusive deals on top-rated products</p>
                  <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Claim Offer
                  </button>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by <span className="text-pink-600 dark:text-pink-400">Category</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of carefully curated collections
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href="/categories"
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-pink-800 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.count} items</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <br></br><br></br>



    </div>
  );
};

export default LandingPage;