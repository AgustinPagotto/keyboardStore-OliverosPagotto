import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./itemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(product, quantity);
    setItemQuantity(quantity);
  };

  return (
    <div className={styles.cardProduct}>
      <div className="flex-none w-80 relative">
        <img
          src={product.img}
          alt="There has to be a keyboard here somwhere!"
          className=" inset-0 w-full h-full object-cover"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-4xl font-extrabold text-slate-900">
            {product.title}
          </h1>
          <div className="w-full flex-none text-lg text-slate-700 mt-2">
            {product.description}
          </div>
          <div className="text-lg font-semibold text-slate-500">
            ${product.price}.00.-
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            Stock: {product.stock}
          </div>
        </div>
        <div className="flex mt-5 space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4 justify-center">
            {/*<button
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              type="submit"
            >
              Buy now
            </button>
            */}
            {itemQuantity > 0 ? (
              <Link to="/cart">
                <button
                  className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                  type="button"
                >
                  Terminar mi Compra
                </button>
              </Link>
            ) : (
              <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ItemDetail;
