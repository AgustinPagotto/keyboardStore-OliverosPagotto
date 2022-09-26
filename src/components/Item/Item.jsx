import React from "react";
import { Link } from "react-router-dom";
import styles from "./item.module.css";
const Item = (props) => {
  return (
    <Link className={styles.cardProduct} to={`/item/${props.id}`}>
      <div className="flex-none w-48 relative">
        <img
          src={props.img}
          alt=""
          className=" inset-0 w-full h-full object-cover"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {props.title}
          </h1>
          <div className="text-lg font-semibold text-slate-500">
            ${props.price}.00.-
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            Stock: {props.stock}
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            Category: {props.category}
          </div>
        </div>

      </form>
    </Link>
  );
};

export default Item;
