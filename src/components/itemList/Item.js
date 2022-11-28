import React, { useContext } from "react";
import "./itemlist.scss";
import Button from "../button/Boton";



const Item = ({ nombre, precio, imagen, id }) => {

  
  return (
    <article className="itemList__card">
      <h2>{nombre}</h2>
      <p> {precio} </p>
      
      <img
        src={"/img_products/" + imagen}
        alt={nombre}
        className="card__image"
      />
      <Button id={id}  />
    </article>
  );
};

export default Item;
