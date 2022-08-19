import React from "react";
import styles from "./itemListContainer.module.css";

const ItemListContainer = (props) => {
  return (
    <div className={styles.cardProduct}>
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.saludo}</p>
          <p className="text-slate-500 font-medium">{props.price}</p>
        </div>
        <button className={styles.button}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default ItemListContainer;
