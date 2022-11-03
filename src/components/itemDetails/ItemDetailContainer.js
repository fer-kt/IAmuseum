import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../itemList/products'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
  
  const [detalle, setDetalle] = useState()
const {id} = useParams()

useEffect( ()=>{

  const productos = new Promise((res) => {
    setTimeout(() => {
      res(products);
    }, 2000);
  });

  productos.then( (res)=>{

    setDetalle(res.find(e=> e.id == id ))
    
    
  }  )


} )



  return (
    <>
            
      {
        typeof(detalle) == 'object' ? <ItemDetail props={detalle} /> : <p> Cargando... </p>
      }
      
      </>
  )
}

export default ItemDetailContainer