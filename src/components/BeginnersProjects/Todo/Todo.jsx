import "./style.css";

import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodos = () => {
    const inputTodo = {
      todo: inputValue,
      id: todos.length > 0 ? todos.sort((a, b) => b.id - a.id)[0].id + 1 : 1,
    };
    console.log(inputTodo.id);
    setTodos([...todos, inputTodo]);
  };

  const closeTodo = (id) => {
    const filtredTodos = todos.filter((t) => t.id !== id);
    setTodos(filtredTodos);
  };
  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleTodos()}>Add Todo</button>
      <div className="todos-list">
        {todos &&
          todos.map(({ todo, id }) => (
            <li className="todo" key={id}>
              {todo}
              <button className="close" onClick={() => closeTodo(id)}>
                Close
              </button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default Todo;
