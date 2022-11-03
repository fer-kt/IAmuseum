import React from "react";
import "./itemlist.scss";
import Button from "../button/Boton"
const item = ({ nombre, precio , imagen, id}) => {
  return (
    <article className="itemList__card">
      <h2>{nombre}</h2>
      
      <p> {precio} </p>
      <img src={process.env.PUBLIC_URL + "/img_products/" + imagen } alt={nombre} className='card__image' />
    <Button id= {id} />
    </article>
  );
};

export default item;
