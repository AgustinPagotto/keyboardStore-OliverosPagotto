import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>Congratulations you arrived at the cart</h1>
    </div>
  );
};

export default Cart;
