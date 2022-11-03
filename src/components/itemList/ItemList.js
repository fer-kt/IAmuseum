import React from "react";
import Item from "./Item";

const ItemList = ({ props }) => {
  return (
    <section className="cards__container">
      {props.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </section>
  );
};

export default ItemList;
