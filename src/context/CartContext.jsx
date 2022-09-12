import React, {useEffect} from "react";
import { createContext, useState } from "react";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log(cart);
  }, [cart])

  const addItem = (item, quantity) => {
    isInCart(item.id)
      ? console.log("The item was already added")
      : setCart([...cart, { ...item, quantity }]);
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((prod)=>{return prod.id!==itemId}));
  };

  const isInCart = (id) => cart.find((prod) => prod.id === id);

  const value = {
    cart: cart,
    addItem: addItem,
    removeItem: removeItem,
    isInCart: isInCart,
    clear: clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
