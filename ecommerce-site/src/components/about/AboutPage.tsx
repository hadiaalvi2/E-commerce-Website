"use client";

import React from 'react';
import { Users, Target, Award, Heart, ShoppingBag, Truck, Shield, Headphones, Star, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartProvider';
import MainLayout from '@/components/layout/MainLayout';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: ShoppingBag, label: 'Products Sold', value: '500K+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Heart, label: 'Customer Reviews', value: '4.9/5' }
  ];

  const team = [
    {
      name: 'John Park',
      role: 'Founder & CEO',
      image: '/api/placeholder/300/300',
      description: 'Passionate about bringing quality products to customers worldwide.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: '/api/placeholder/300/300',
      description: 'Ensuring smooth operations and exceptional customer service.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      image: '/api/placeholder/300/300',
      description: 'Curating the best products for our valued customers.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Customer First',
      description: 'Every decision we make is centered around providing the best experience for our customers.'
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'We carefully select each product to ensure it meets our high standards of quality and value.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to get your purchases to you as soon as possible.'
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your privacy and security are our top priorities with every transaction.'
    }
  ];

  const features = [
    'Free shipping on orders over $50',
    '30-day money-back guarantee',
    '24/7 customer support',
    'Secure payment processing',
    'Easy returns and exchanges',
    'Product quality guarantee'
  ];

  return (
    <div className="space-y-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-900">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              About <span className="text-pink-600 dark:text-pink-400">ShopHub</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-pink-200 max-w-3xl mx-auto">
              We're more than just an e-commerce store. We're your trusted partner in finding 
              quality products that enhance your lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-pink-600 dark:text-pink-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Our <span className="text-pink-600 dark:text-pink-400">Story</span>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>Our journey began with a simple idea to make quality products accessible to everyone, everywhere. We believe shopping should be more than just a transaction; it should be an experience built on trust, convenience, and care. Over the years, we've grown from a small vision into a thriving platform that connects people with the products they love</p>
              <p>We're more than just an online store. We're a team driven by passion, committed to making your shopping journey easier, faster, and better. From product selection to doorstep delivery, our story is about redefining the way you shop</p>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-4 text-white text-center">
                    <ShoppingBag className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-bold">Premium Quality</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-4 text-white text-center">
                    <Headphones className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-bold">24/7 Support</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 text-white text-center">
                    <Truck className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-bold">Fast Shipping</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-4 text-white text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-bold">Secure Payments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-pink-600 dark:text-pink-400">Values</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These core principles guide everything we do and shape the experience we create for our customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our <span className="text-pink-600 dark:text-pink-400">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate individuals working behind the scenes to make your shopping experience exceptional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-24 h-24 text-pink-400 dark:text-pink-600" />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-pink-600 dark:text-pink-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Why Choose <span className="text-pink-600 dark:text-pink-400">ShopHub?</span>
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                We're committed to providing an exceptional shopping experience that goes 
                beyond just selling products. Here's what sets us apart from the competition.
              </p>
              
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-pink-600 dark:text-pink-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">99.9%</div>
                    <div className="text-pink-600 dark:text-pink-400 text-sm font-medium">Customer Satisfaction</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">24h</div>
                    <div className="text-pink-600 dark:text-pink-400 text-sm font-medium">Average Shipping</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">500+</div>
                    <div className="text-pink-600 dark:text-pink-400 text-sm font-medium">Brands Available</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">50K+</div>
                    <div className="text-pink-600 dark:text-pink-400 text-sm font-medium">Products</div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Product Quality</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Customer Service</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Delivery Speed</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers and discover amazing products at unbeatable prices</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Browse Products
            </button>
            <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-400 dark:hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;