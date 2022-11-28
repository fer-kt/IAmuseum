import React from 'react'
import { useContext } from 'react'
import {contexto} from './CustomProvider'


const CartWidget = () => {
  
   const context = useContext(contexto)
 
  
  return (

    <div className='notification'>
      <span className="material-symbols-outlined ">
      shopping_cart
      </span>
      <p className='cartBubble'> {context.cart.reduce((acc, currentValue) => acc + currentValue.cant,
   0)} </p>
    
    </div>
  )
}

export default CartWidget