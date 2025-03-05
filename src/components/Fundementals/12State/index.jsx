import React from "react";
import Counter from "./Counter";
import TodoList from "./TodoList";
import Profile from "./Profile";
import Friends from "./Friends";
import Movie from "./Movie";
import LocalStorage from "./LocalStorage";
import ShoppingList from "./ShoppingList";

const index = () => {
  return (
    <div>
      <Counter />
      <Friends />
      <TodoList />
      <Profile />
      <Movie />
      <LocalStorage />
      <ShoppingList />
    </div>
  );
};

export default index;
