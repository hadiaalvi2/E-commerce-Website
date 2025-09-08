"use client";


import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className="mt-auto bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              ShopHub
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Your one-stop destination for quality products at amazing prices. 
              We're committed to providing the best shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/" className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1#" className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm">
                All Products
              </Link>
              <Link href="/categories" className="block text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm">
                Categories
              </Link>
              
            </div>
          </div>

          {/* Customer Service */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Customer Service</h3>
              <div className="space-y-2">
                <p className="block text-gray-600 dark:text-gray-300 text-sm">Contact Us</p>
                <p className="block text-gray-600 dark:text-gray-300 text-sm">Shipping Info</p>
                <p className="block text-gray-600 dark:text-gray-300 text-sm">Returns & Exchanges</p>
                <p className="block text-gray-600 dark:text-gray-300 text-sm">FAQ</p>
              </div>
            </div>


          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">030333333</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">support@shophub.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 Shopie. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <p className="block text-gray-600 dark:text-gray-300 text-sm">Privacy Policy</p>
                <p className="block text-gray-600 dark:text-gray-300 text-sm">Terms & Conditions</p>
                <p className="block text-gray-600 dark:text-gray-300 text-sm">Returns & Exchanges</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;