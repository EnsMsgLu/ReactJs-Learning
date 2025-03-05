import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const Timer = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    Timer.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(Timer.current);
    };
  }, []);
  return (
    <div>
      <h1>Timer:{count}</h1>
      <button onClick={() => clearInterval(Timer.current)}>Stop Timer</button>
    </div>
  );
};

export default Timer;
