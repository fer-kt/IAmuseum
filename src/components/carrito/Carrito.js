import React from "react";
import { useContext } from "react";
import { contexto } from "../CustomProvider";
import { Link } from "react-router-dom";
import "./carrito.scss";



const Carrito = () => {


 
  const context = useContext(contexto);

  const getTotal= ()=>{
    let total = 0 
    context.cart.map(e=> total += (e.cant * e.precio ))
    return total
  }
  
  return (
    <>
      {context.cart.map((e) => {
        

        return (
          
            <div className="cart__list" key={e.id}>
              <img src={"/img_products/" + e.imagen} alt="" />
              <p>{e.nombre} </p>
              <p>Precio unitario: {e.precio}$ </p>
              <p>x {e.cant} Unidades {e.precio * e.cant}$</p>
            </div>
              
          
        );
      })}
    <h3>total: {getTotal()}$</h3>
<Link to='/finalizar'>
    <button > Finalizar compra</button>

</Link>
    </>
  );
};

export default Carrito;
