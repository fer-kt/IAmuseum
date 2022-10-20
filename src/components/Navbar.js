import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='nav'>
      <h2>La gran Tienda</h2>
        <ul>
           <li> <a href="#"> Categoria 1</a> </li>
           <li><a href="#"> categoria 2 </a></li>
           <li><a href="#"> categoria 3</a></li>
        <li>
          <CartWidget />
        </li>
        </ul>
    </nav>
  )
}

export default Navbar