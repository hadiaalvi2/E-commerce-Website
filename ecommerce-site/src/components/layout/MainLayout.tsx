"use client";

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '@/context/ThemeProvider';
import { useCart } from '@/context/CartProvider';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { cartItemsCount } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartItemsCount={cartItemsCount} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default MainLayout;