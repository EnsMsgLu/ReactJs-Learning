import React, { useEffect, useState } from "react";
import Component02 from "./Component02";
import { createContext } from "react";

export const Posts = createContext();

const Component01 = () => {
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/posts"
      );
      const data = await response.json();
      if (data && data.length > 0) {
        setPosts(data);
      }
    }
    async function fetchTodos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      if (data && data.length > 0) {
        setTodos(data.slice(0, 10));
      }
    }
    fetchPosts();
    fetchTodos();
  }, []);

  return (
    <div>
      <Posts.Provider value={{ posts, todos }}>
        <Component02 />
      </Posts.Provider>
    </div>
  );
};

export default Component01;
