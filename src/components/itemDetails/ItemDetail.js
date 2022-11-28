import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
 import { contexto } from "../CustomProvider";
import ItemCount from "../itemCount/ItemCount";
import "./itemDetail.scss";

const ItemDetail = ({ nombre, desc, precio, imagen, id }) => {

  const context = useContext(contexto)
  
  const [cant, setCant] = useState(1);

  const handleOnClick = (cantidad) => {
    setCant(cantidad)   
    
  };

  const handleComprar = (e) => {    
    context.addToCart({id, nombre,cant, precio, imagen, desc});
    toast.success("Producto agregado!", {
      theme: "dark"
    })
    e.target.style.display = 'none';
  };

  return (
    <article className="itemDetail__card">
      <div className="itemDetail__card--container">
        <img
          src={"/img_products/" + imagen}
          alt={nombre}
          className="card__image itemDetail__img"
        />
        <div>
          <h2> {nombre} </h2>
          <p> {desc} </p>
          
          <p> ${precio} </p>

          <button onClick={handleComprar}> Comprar </button>
          <ItemCount handleOnClick={handleOnClick} />

          
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
