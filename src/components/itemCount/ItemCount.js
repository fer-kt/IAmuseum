import React from "react";
import { useState } from "react";


const ItemCount = ({ handleOnClick }) => {
  const [count, setCount] = useState(1);

  const handleRestar = () => {
     count <= 1 ||  setCount(count - 1)
    handleOnClick(count);
    

  };

  const handleSumar = () => {
    setCount(count +1 );
    handleOnClick(count);
  };

  return (
    <div className="countContainer">
      <button className="btnCount" onClick={handleRestar}>
          -
      </button>
      <p> {count} </p>
      <button className="btnCount" onClick={handleSumar}>
         +
      </button>
    </div>
  );
};

export default ItemCount;
