import React, { useState } from "react";

const Movie = () => {
  const [movies, setMovie] = useState([
    { id: 1, title: "Jack Reacher", rating: 6 },
    { id: 2, title: "Spider Man", rating: 5 },
  ]);

  const handleTitle = () => {
    setMovie(
      movies.map((m) => (m.id === 1 ? { ...m, title: "John Wick 5" } : m))
    );
  };
  return (
    <div>
      {movies.map((m) => (
        <ul key={m.id}>
          <li>{m.title}</li>
          <li>{m.rating}</li>
        </ul>
      ))}

      <button onClick={handleTitle}>Button</button>
    </div>
  );
};

export default Movie;
