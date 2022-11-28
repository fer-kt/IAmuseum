import React, { useState } from "react";
import { useContext } from "react";
import "./carrito.scss";
import { contexto } from "../CustomProvider";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";




const Finalizar = () => {
  const context = useContext(contexto);
  const refNombre = useRef();
  const refDireccion = useRef();
  const refEmail = useRef();  
  const [idCompra, setIdCompra] = useState()
  

  const handleSubmit = (e) => {

    e.preventDefault();
    e.target.style.display = 'none'
   
    
    const productosCompra = context.cart.map( (e)=>{
      return ({'nombre' : e.nombre,
       'cantidad' : e.cant, 
       'precio' : e.precio})
    } )
    const order = {
      "nombre": refNombre.current.value,
      "direccion": refDireccion.current.value,
      "email": refEmail.current.value,
      'productos': productosCompra
    }

    const comprasCollection = collection(db, "compras");

    const compra = addDoc(comprasCollection, {...order} );
    compra.then( (res)=>{
      setIdCompra(res.id)
      
      
      toast.success('Gracias por su compra! ', {        
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        
        });
    } )
    compra.catch( (err)=>{
      console.log(err);
    } )

    
  };

  return (
    <div>
      <form >
        <div>
          <label>Nombre: </label>
          <input type="text" ref={refNombre} />
        </div>

        <div>
          <label>Dirección: </label>
          <input type="text" ref={refDireccion} />
        </div>

        <div>
          <label> E-Mail: </label>
          <input type="email" ref={refEmail} />
        </div>
        <Link >
          <button onClick={handleSubmit} >Terminar</button>
        </Link>
        
      </form>
      { idCompra && <Link to= {"/pedido/" + idCompra} ><button> Ver factura </button> </Link> }
    </div>
  );
};

export default Finalizar;
