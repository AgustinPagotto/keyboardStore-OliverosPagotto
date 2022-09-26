import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addItem = (item, quantity) => {
    isInCart(item.id)
      ? totalQuantitySingleProduct(item, quantity)
      : setCart([...cart, { ...item, quantity }]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (itemId) => {
    setCart(
      cart.filter((prod) => {
        return prod.id !== itemId;
      })
    );
  };

  const isInCart = (id) => cart.some((prod) => prod.id === id);

  const totalQuantity = () => {
    console.log(cart);
    let counter = 0;
    cart.forEach((prod) => {
      counter += prod.quantity;
    });
    return counter;
  };

  const totalPrice = () => {
    let acumulador = 0;
    cart.forEach((prod) => {
      acumulador += prod.quantity * prod.price;
    });
    return acumulador;
  };

  const totalQuantitySingleProduct = (item, quantity) => {
    setCart(
      cart.map((prod) => {
        if (prod.id === item.id) {
          const prodUpdated = {
            ...prod,
            quantity: quantity,
          };
          return prodUpdated;
        } else {
          return prod;
        }
      })
    );
  };

  const value = {
    cart: cart,
    addItem: addItem,
    removeItem: removeItem,
    isInCart: isInCart,
    clearCart: clearCart,
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
