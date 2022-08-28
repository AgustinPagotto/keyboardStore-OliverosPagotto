import React, { useState, useEffect } from "react";
import styles from "./itemListContainer.module.css";
import { products } from "../../mock/products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [items, setItems] = useState();

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 3000);
    });
    getProducts
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        //console.log(err)
      })
      .finally(() => {
        //console.log('Finally')
      });
  }, []);

  return (
    <div className={styles.cardProduct}>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
