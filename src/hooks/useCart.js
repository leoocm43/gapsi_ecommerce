// useCart.js
import { useState } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return { cart, addToCart };
};
