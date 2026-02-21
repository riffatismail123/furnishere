'use client';

import { createContext, useContext, useState } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

type CartType = {
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartType | null>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<Item[]>([]);

  function addToCart(item: Item) {
    setCart((prev) => {
      const exist = prev.find(p => p.id === item.id);

      if (exist) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, item];
    });
  }

  function removeFromCart(id: number) {
    setCart(cart.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext)!;
}
