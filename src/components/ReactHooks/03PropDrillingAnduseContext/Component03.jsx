import React, { useContext } from "react";
import { Data } from ".";
import { Posts } from "./Component01";
const Component03 = () => {
  const posts = useContext(Posts).posts;

  return (
    <>
      <Posts.Consumer>
        {({ todos }) => (
          <div>
            {todos.map((todo) => (
              <ul key={todo.id}>
                <li>{todo.title}</li>
                <li>{todo.completed ? "Completed" : "Continue"}</li>
              </ul>
            ))}
          </div>
        )}
      </Posts.Consumer>
      {posts.map((p) => (
        <ul key={p.id}>
          <li>{p.title}</li>
          <li>{p.body}</li>
        </ul>
      ))}
      <Data.Consumer>
        {({ name }) => {
          return <h1>{name}</h1>;
        }}
      </Data.Consumer>
    </>
  );
};

export default Component03;
