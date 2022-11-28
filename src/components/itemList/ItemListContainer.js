import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../../firebase";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    

    if (id) {
      const queryFilter = query(
        productosCollection,
        where("categoria", "==", id)
      );
      const productos = getDocs(queryFilter);
      productos
        .then((res) => {
          setItems(res.docs.map((e) => ({ id: e.id, ...e.data() })))
          
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const productos = getDocs(productosCollection);
      productos
        .then((res) => {
          setItems(res.docs.map((e) => ({ id: e.id, ...e.data() })));
          
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      setItems([]);
    };
  }, [id]);

  return (
    <div className="ItemListContainer">
      {items.length == 0 ? <h2> Cargando... </h2> : <ItemList props={items} />}
    </div>
  );
};

export default ItemListContainer;
