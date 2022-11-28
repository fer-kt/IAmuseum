import { doc, getDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import Factura from "./Factura";

const Pedido = () => {
  const { id } = useParams();
  const [pedido, setPedido] = useState({});

  useEffect(() => {
    const pedidosCollection = collection(db, "compras");
    const reference = doc(pedidosCollection, id);
    const producto = getDoc(reference);

    producto.then((res) => setPedido({ ...res.data() }));
    producto.catch( err => console.log(err) )
  },[]);

  return <div>{pedido ? <Factura props={pedido} /> : <p>Cargando</p>} </div>;
};

export default Pedido;
