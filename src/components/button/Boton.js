import React from "react";
import "./boton.scss";
import { Link } from "react-router-dom";

const Boton = ({ id }) => {
  return (
    <><Link to={"/item/" + id}> 
      <button>        
        Ver más 
      </button></Link>
    </>
  );
};

export default Boton;
