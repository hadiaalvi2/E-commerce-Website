"use client";

import "./globals.css";
import { ThemeProvider, ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { CartProvider, CartContext, CartContextType } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import React, { useContext } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CartProvider>
            <LayoutContent>{children}</LayoutContent>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext) as ThemeContextType;
  const { cartItemsCount } = useContext(CartContext) as CartContextType;

  return (
    <>
      <Navbar cartItemsCount={cartItemsCount} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="min-h-screen">{children}</main>
      <Footer darkMode={darkMode} />
    </>
  );
}
