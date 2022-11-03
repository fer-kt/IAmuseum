import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="header"
      style={{
        backgroundImage: "url(/header__bg.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: '250px',
        
      }}
    >
      <Navbar />
    </header>
  );
};

export default Header;
