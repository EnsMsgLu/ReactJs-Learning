import React, { useEffect, useState } from "react";

const Example02 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/posts"
      );
      const data = await response.json();
      if (data && data.length > 0) {
        data.length = 4;
        setData(data);
      }
    }

    getData();
  }, []);
  return (
    <div>
      {data.map((post, index) => (
        <ul key={index}>
          <li>{post.title}</li>
          <scan style={{ display: "flex", width: "70%" }}>{post.body}</scan>
        </ul>
      ))}
    </div>
  );
};

export default Example02;
