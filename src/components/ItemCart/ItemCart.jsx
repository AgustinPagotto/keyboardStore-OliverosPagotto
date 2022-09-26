import React from "react";
import { useContext } from "react";
import styles from "./itemCart.module.css";
import { TrashIcon } from "@heroicons/react/outline";
import { CartContext } from "../../context/CartContext";

const ItemCart = (props) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className={styles.cardProduct}>
      <div className="flex-none w-48 relative">
        <img
          src={props.img}
          alt=""
          className=" inset-0 w-full h-full object-cover"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {props.title}
          </h1>
          <div className="text-lg font-semibold text-slate-500">
            ${props.price * props.quantity}.00.-
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            Quantity Added: {props.quantity}
          </div>
        </div>
        <div className="flex mt-5 space-x-4 mb-6 text-sm font-medium w-full justify-end">
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            type="button"
            onClick={() => removeItem(props.id)}
          >
            <TrashIcon className={styles.icon} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemCart;
