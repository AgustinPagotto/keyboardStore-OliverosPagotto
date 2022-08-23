import React, {useState} from 'react';
import styles from "./itemCount.module.css";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    const addNumber=()=>{
        if(count===stock){
            return;
        } else {
            setCount(count+1);
        }
        
    }
    const subtractNumber=()=>{
        if(count===initial){
            return;
        } else {
            setCount(count-1);
        }
    }
  return (
    <div className={styles.cardProduct}>
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
        <button className={styles.button} onClick={onAdd}>
          Agregar al Carrito
        </button>
        </div>
    </div>
  );
};

export default ItemCount;
