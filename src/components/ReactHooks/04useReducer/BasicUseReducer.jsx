import React from "react";
import { useReducer } from "react";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = (e) => {
    if (e === "+") dispatch({ type: "increment" });
    if (e === "-") dispatch({ type: "decrement" });
    if (e === "") dispatch({ type: "reset" });
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => handleIncrement("+")}>+</button>
      <button onClick={() => handleIncrement("-")}>-</button>
      <button onClick={() => handleIncrement("")}>Reset</button>
    </div>
  );
};

export default App;
