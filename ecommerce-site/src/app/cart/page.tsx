"use client";

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartProvider';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const shippingCost = totalPrice > 50 ? 0 : 9.99;
  const tax = totalPrice * 0.1;
  const finalTotal = totalPrice + shippingCost + tax;

  if (cartItems.length === 0) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="mb-8">
              <ShoppingBag className="mx-auto h-24 w-24 text-gray-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/products"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Continue Shopping</span>
          </Link>
          
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Shopping Cart
            </h1>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium transition-colors"
            >
              Clear All
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={`${item.id}-${Math.random()}`} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ShoppingBag className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg fontt-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-l-lg"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-medium min-w-[60px] text-center text-gray-900 dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-r-lg"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    Item Total:
                  </span>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {shippingCost === 0 ? 'FREE' : `${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tax</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                
                {totalPrice < 50 && (
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      Add ${(50 - totalPrice).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">Total</span>
                  <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center space-x-2 mb-4">
                <CreditCard className="h-5 w-5" />
                <span>Proceed to Checkout</span>
              </button>

              {/* Continue Shopping */}
              <Link
                href="/products"
                className="block w-full text-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-pink-600 hover:text-pink-600 dark:hover:border-pink-400 dark:hover:text-pink-400 py-3 px-6 rounded-xl font-medium transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Security Features */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free returns within 30 days</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related/Recommended Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900z dark:text-white mb-8">
            You might also like
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would typically be populated with recommended products */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <ShoppingBag className="h-16 w-16 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Recommended Product {item}
                  </h3>
                  <p className="text-lg font-bold text-pink-600 dark:text-pink-400">
                    $49.99
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CartPage;