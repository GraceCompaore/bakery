import React, { useState } from 'react';

const defaultCart = {
  cart: [],
};

export const CartContext = React.createContext(defaultCart);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.length === 0) {
      setCart([
        {
          product: product,
          quantity: 1,
        },
      ]);
    } else {
      const newCart = cart.slice();
      const productFoundIndex = newCart.findIndex(
        (item) => item.product.id === product.id
      );

      if (productFoundIndex >= 0) {
        newCart[productFoundIndex].quantity++;
      } else {
        newCart.push({
          product: product,
          quantity: 1,
        });
      }
      setCart(newCart);
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.product.id !== product.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
