import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const contexto = createContext();

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { Provider } = contexto;

  const addToCart = ({ id, nombre, cant, precio, imagen, desc }) => {
    const productIndex = cart.findIndex((e) => e.id === id);
    if (productIndex !== -1) {
      const copia = cart.map((e) => e);
      const nuevaCantidad = cart[productIndex].cant + cant;
      copia[productIndex] = {
        id,
        nombre,
        cant: nuevaCantidad,
        precio,
        imagen,
        desc,
      };
      setCart([...copia]);
    } else {
      setCart([...cart, { id, nombre, cant, precio, imagen, desc }]);
    }
  };
  const objeto = {
    cart,
    addToCart,
  };

  return <Provider value={objeto}>{children}</Provider>;
};

export default CustomProvider;
