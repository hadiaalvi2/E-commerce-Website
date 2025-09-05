"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  cartItemsCount: number;
  addToCart: () => void;
  removeFromCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = () => setCartItemsCount((c) => c + 1);
  const removeFromCart = () =>
    setCartItemsCount((c) => (c > 0 ? c - 1 : 0));

  return (
    <CartContext.Provider value={{ cartItemsCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
