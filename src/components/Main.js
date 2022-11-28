import React from "react";
import { Routes, Route } from "react-router-dom";
import Carrito from "./carrito/Carrito";
import ItemListContainer from "./itemList/ItemListContainer";
import ItemDetailContainer from "./itemDetails/ItemDetailContainer";
import Finalizar from "./carrito/Finalizar";
import Pedido from "./carrito/Pedido";
const Main = () => {
      
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
        <Route path="/finalizar" element={<Finalizar />}></Route>
        <Route path="/pedido/:id" element={<Pedido />}></Route>
        <Route path="*" element={<h3> 404 No encontrado </h3>}></Route>
      </Routes>
    </main>
  );
};

export default Main;
