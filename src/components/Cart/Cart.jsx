import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./cart.module.css"
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);
  if (cart.length === 0)
    return (
      <div className="mt-20 border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto flex flex-col items-center justify-center">
        <h1>No hay items, empiece a comprar: </h1>
        <Link to="/">
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            type="button"
          >
            Home
          </button>
        </Link>
      </div>
    );

  return (
    <div>
      {cart &&
        cart.map((data) => {
          return (
            <div key={data.id}>
              <ItemCart
                id={data.id}
                title={data.title}
                price={data.price}
                quantity={data.quantity}
                img={data.img}
    
              />
            </div>
          );
        })}
      <div className={styles.cardTotal}>
        <h1 className="font-bold text-xl">Total Price:  ${totalPrice()}.00.- </h1>
      </div>
    </div>
  );
};

export default Cart;
