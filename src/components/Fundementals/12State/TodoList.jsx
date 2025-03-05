import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const InputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setTodo([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <ul key={index}>
          <li>{todo}</li>
        </ul>
      ))}
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          onChange={InputValue}
          value={inputValue}
          placeholder="Task"
        />
        <button type="summit">Summit</button>
      </form>
    </div>
  );
};

export default TodoList;
