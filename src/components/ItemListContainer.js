import React from "react";

const ItemListContainer = (props) => {
  return (
    <div className="ItemListContainer">     
      <h3> { props.greeting } </h3>
    </div>
  );
};

export default ItemListContainer;
