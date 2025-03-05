import React from "react";
import Person from "./Person";
import Product from "./Product";

const index = () => {
  return (
    <div>
      <Person name="John" age={12} />
      <Product name="Pc" price={200} />
    </div>
  );
};

export default index;
