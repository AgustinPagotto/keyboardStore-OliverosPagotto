import React, { useState, useEffect } from "react";
import styles from "./itemDetailContainer.module.css";
import { products } from "../../mock/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemListContainer = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });
    getProducts
      .then((data) => {
        setProduct(data.find((prod) => prod.title === "Qk65"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.cardProduct}>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemListContainer;
