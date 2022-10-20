import React from 'react'

const CartWidget = () => {
  let products = 0
  return (

    <div className='notification'>
      <span className="material-symbols-outlined ">
      shopping_cart
      </span>
      <p className='cartBubble'> {products}</p>
    
    </div>
  )
}

export default CartWidget