import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./CustomProvider";


const App = () => {
  
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </CustomProvider>
  );
};

export default App;
