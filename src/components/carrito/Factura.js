import React from "react";


const Factura = ({ props }) => {
  
  console.log()
  
  return (
    <div>
      <h2>Pedido  </h2>
      <p>Nombre: {props.nombre} </p>
      <p>Dirección de envio: {props.direccion}</p>
      <p>Email:  {props.email} </p>
        <p> Estado de envío: </p>
     
    </div>
  );
};

export default Factura;
