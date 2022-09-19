import React, { useState, useEffect } from "react";
import styles from "./itemDetailContainer.module.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {db} from '../../firebaseConfig';
import {getDoc, doc, collection} from 'firebase/firestore';

const ItemListContainer = (props) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    const itemCollection = collection(db, 'products');
    const ref = doc(itemCollection, params.id);
    getDoc(ref)
    .then((res)=>{
      setProduct({id: res.id, ...res.data()})
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
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemListContainer;
