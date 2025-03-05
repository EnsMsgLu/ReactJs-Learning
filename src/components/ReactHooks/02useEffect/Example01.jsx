import React from "react";
import { useState, useEffect } from "react";

const Example01 = () => {
  const [value, setValue] = useState();
  const [something, setSomething] = useState();

  useEffect(() => {
    console.log("Value increment");
    document.title = `Increment ${value}`;
  }, [value]);

  useEffect(() => {
    console.log("Something increment");
    document.title = `Increment ${something}`;
  }, [something]);

  useEffect(() => {
    console.log("Anyone increment");
    document.title = `Increment ${value ? value : something}`;
  }, [value, something]);
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value ? value + 1 : 1)}>Click Me!</button>
      <button onClick={() => setSomething(something ? something + 1 : 1)}>
        something Me!
      </button>
    </div>
  );
};

export default Example01;
