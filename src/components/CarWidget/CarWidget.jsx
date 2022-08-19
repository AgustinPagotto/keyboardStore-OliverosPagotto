import React from "react";
import styles from "./carWidget.module.css";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const CarWidget = () => {
  return (
    <button className={styles.iconContainer}>
      <ShoppingCartIcon className={styles.icon} />
    </button>
  );
};

export default CarWidget;
