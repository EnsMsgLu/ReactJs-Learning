import React, { useReducer, useState } from "react";
import BasicUseReducer from "./BasicUseReducer";
import counterReduces from "./counterReduces";

const App = () => {
  const [state, dispatch] = useReducer(
    counterReduces.reducer,
    counterReduces.initialStart
  );
  const [inputValue, setInputValue] = useState();

  const handleIncrement = () => {
    dispatch({
      type: "incrementByOn",
      payload: Number(inputValue),
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "decrementByOn",
      payload: Number(inputValue),
    });
  };

  return (
    <div>
      {/*<BasicUseReducer />*/}
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleIncrement}>Add</button>
      <button onClick={handleDecrement}>Subtract</button>
    </div>
  );
};

export default App;
