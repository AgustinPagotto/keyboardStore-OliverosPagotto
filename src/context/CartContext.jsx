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
      ? totalQuantitySingleProduct(item,quantity)
      : setCart([...cart, { ...item, quantity }]);
  };

  const clear = () => {
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

  //calcular total de unidades para el cart widget
  const totalQuantity = () => {
    console.log(cart);
    let counter = 0;
    cart.forEach((prod) => {
      counter += prod.quantity;
    });
    return counter;
  };

  //calcular total precio del carrito
  const totalPrice = () => {
    let acumulador = 0;
    cart.forEach((prod) => {
      acumulador += prod.quantity * prod.price;
    });
    return acumulador;
  };

  const totalQuantitySingleProduct = (item,quantity)=>{
    setCart( cart.map((prod)=>{
      if (prod.id === item.id){
        const prodUpdated = {
          ...prod,
          quantity: quantity,
        }
        return prodUpdated;
      } else {
        return prod;
      }
    }))
  }

  const value = {
    cart: cart,
    addItem: addItem,
    removeItem: removeItem,
    isInCart: isInCart,
    clear: clear,
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
