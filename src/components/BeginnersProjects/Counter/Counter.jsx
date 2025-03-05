import "./style.css";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <section className="number">{count}</section>
      <section className="btns-container">
        <button className="increment" onClick={increment}>
          +
        </button>
        <button className="increment" onClick={decrement}>
          -
        </button>
      </section>
    </div>
  );
};

export default Counter;
