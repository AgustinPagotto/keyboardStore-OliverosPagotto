import { React, useState, useEffect } from "react";
import styles from "./carWidget.module.css";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CarWidget = () => {
  const { cart, totalQuantity } = useContext(CartContext);
  const [length, setLength] = useState(totalQuantity);
  useEffect(() => {
    setLength(totalQuantity())
  }, [cart, totalQuantity])
  return (
    <Link to="/cart">
      <button className={styles.iconContainer}>
        <ShoppingCartIcon className={styles.icon} />
        {totalQuantity()!==0 &&<p>{totalQuantity()}</p>}
      </button>
    </Link>
  );
};

export default CarWidget;
