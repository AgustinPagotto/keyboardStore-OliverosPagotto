import React, { useState } from "react";
import styles from "./itemCount.module.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const addNumber = (event) => {
    event.preventDefault();
    count < stock && setCount(count + 1);
  };
  const subtractNumber = (event) => {
    event.preventDefault();
    count > initial && setCount(count - 1);
  };

  return (
    <div>
      <div className={styles.countContainer}>
        <button className={styles.button} onClick={subtractNumber}>
          -
        </button>
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{count}</p>
        </div>
        <button className={styles.button} onClick={addNumber}>
          +
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => onAdd(count)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
