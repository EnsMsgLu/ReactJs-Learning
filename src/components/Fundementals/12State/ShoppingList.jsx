import React, { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "quantity") {
      setQuantity(value);
    }
  };

  const handleItem = () => {
    if (!name) return alert("Please Enter Name");
    if (!quantity) return alert("Please Enter Quantity");
    setItems([...items, { name: name, quantity: quantity }]);
  };

  return (
    <div>
      <h1>ShoppingList</h1>
      {items.map((i, index) => (
        <ul key={index}>
          <li>{i.name}</li>
          <li>{i.quantity}</li>
        </ul>
      ))}
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input
        type="text"
        name="quantity"
        value={quantity}
        onChange={handleChange}
      />
      <button onClick={handleItem}>Add Item</button>
    </div>
  );
};

export default ShoppingList;
