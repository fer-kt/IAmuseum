import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import products from "./products";

const ItemListContainer = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productos = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });

    productos.then((respuesta) => {
      id
        ? setItems(respuesta.filter((e) => e.categoria == id))
        : setItems(respuesta);
    });
  }, [id]);

  return (
    <div className="ItemListContainer">
      {items.length == 0 ? <h2> Cargando... </h2> : <ItemList props={items} />}
    </div>
  );
};

export default ItemListContainer;
