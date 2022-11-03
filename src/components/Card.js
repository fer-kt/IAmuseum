import React from "react";
import Boton from "./button/Boton"

const Card = ({ nombre, desc, precio }) => {
  return (
    <div className="card">
      <h2> {nombre} </h2>
      <p> {desc} </p>
      <p>{precio}</p>
       <Boton />
    </div>
  );
};

export default Card;
