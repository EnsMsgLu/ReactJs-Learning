import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Pc",
    price: 700,
    availability: "is Stock",
  };
  return (
    <div>
      <h3>{product.name}</h3>
      <scan>${product.price} </scan>
      <scan>{product.availability}</scan>
    </div>
  );
};

export default ProductInfo;
