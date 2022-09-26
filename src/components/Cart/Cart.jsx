import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";
import ItemCart from "../ItemCart/ItemCart";
import Form from "../Form/Form";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [idCompra, setIdCompra] = useState("");
  const [finishOrder, setFinishOrder] = useState(false);
  const total = totalPrice();
  const handleId = (id) => {
    setIdCompra(id);
  };

  const handleFinishOrder = () => {
    setFinishOrder(!finishOrder);
  };

  if (finishOrder) {
    return (
      <Form
        cart={cart}
        total={total}
        clearCart={clearCart}
        handleId={handleId}
        handleGoBack={handleFinishOrder}
      />
    );
  }

  if (idCompra) {
    return (
      <div className="mt-20 border border-blue-300 shadow rounded-md p-4 max-w-md w-full mx-auto flex flex-col items-center justify-center">
        <h1 className="mb-5"> Your order number is: {idCompra}, Thanks! </h1>
        <Link to="/">
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            type="button"
          >
            Return Home
          </button>
        </Link>
      </div>
    );
  }

  if (cart.length === 0 && !idCompra)
    return (
      <div className="mt-20 border border-blue-300 shadow rounded-md p-4 max-w-md w-full mx-auto flex flex-col items-center justify-center">
        <h1 className="mb-5">There's no items in the cart, begin your purchase in: </h1>
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
        <h1 className="font-bold text-xl">Total Price: ${total}.00.- </h1>
        <button
          className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 ml-5 bg-slate-400"
          type="button"
          onClick={handleFinishOrder}
        >
          Finish Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
