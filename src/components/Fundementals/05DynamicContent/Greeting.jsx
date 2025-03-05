import React from "react";

const Greeting = () => {
  const greeting =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, corrupti?";
  const date = new Date();

  const user = {
    name: "Jonathen",
    date: new Date(),
  };
  return (
    <div>
      <h1>{greeting}</h1>
      <p>{date.getDate()}</p>
      <h2>{user.name}</h2>
      <p>{user.date.getFullYear()}</p>
    </div>
  );
};

export default Greeting;
