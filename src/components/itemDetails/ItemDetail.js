import React from 'react'

const ItemDetail = ({props}) => {
    
  return (
    <article className=''>
        <h2>     {props.nombre}  </h2>
        <p> {props.desc} </p>
        <p> ${props.precio} </p>
        <img src={process.env.PUBLIC_URL + "/img_products/" + props.imagen }  alt="" className='card__image itemDetail__img' />
       
        </article>
  )
}

export default ItemDetail