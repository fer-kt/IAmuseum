import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ItemListContainer from './ItemListContainer'



const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer greeting = 'Bienvenido usuario.'/>
            < Main   />
            < Footer />
        </>
    )
}

export default App