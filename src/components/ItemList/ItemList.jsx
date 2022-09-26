import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {items &&
        items.map((data) => {
          return (
            <div key={data.id}>
              <Item
                id={data.id}
                title={data.title}
                category={data.category}
                price={data.price}
                stock={data.stock}
                img={data.img}
                description={data.description}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
