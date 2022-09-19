import React, { useState, useEffect } from "react";
import styles from "./itemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemListContainer = (props) => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    const itemCollection = collection(db,"products");
    const colection = params.id? query(itemCollection,where("category","==",params.id)) : itemCollection; 
    console.log(colection, 'esta es la coleccion');
    getDocs(colection)
    .then((res)=>{
      const products = res.docs.map((prod)=>{
        return {
          id:prod.id,
          ...prod.data()
        }
      });
      setItems(products);
    })
    .catch((err)=>console.log(err))
    .finally(()=>{
      setIsLoading(false);
    })
  }, [params]);

  if (isLoading)
    return (
      <div className="mt-20 border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className={styles.cardProduct}>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
