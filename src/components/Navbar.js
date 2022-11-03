import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h2 className="nav__brand">My Brand</h2>
      </Link>

      <ul>
        <li>
          <NavLink to="/"> Home</NavLink>
        </li>
        <li>
          <NavLink to="/category/renacimiento"> Sala Renacimiento  </NavLink>
        </li>
        <li>
          <NavLink to="/category/horror"> Sala del horror cósmico </NavLink>
        </li>
        <li>
          <NavLink to="/carrito">
            <CartWidget className="CartWidget" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
