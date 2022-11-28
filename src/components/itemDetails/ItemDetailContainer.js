import { collection, doc, getDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";


import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState();
  const { id } = useParams();
  
  useEffect(() => {
    
    const productosCollection = collection(db, "productos");
    const reference = doc(productosCollection, id)
    const producto = getDoc(reference)
    
    producto.then( res => setDetalle({...res.data(), id}) )
    
  },[]);
  
  return (
    <>
    
      {typeof detalle === "object" ? (
        <ItemDetail { ...detalle } />
      ) : (
        <p> Cargando... </p>
      )}
    </>
  );
};

export default ItemDetailContainer;
