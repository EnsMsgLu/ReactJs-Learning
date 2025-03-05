import React from "react";
import { useRef } from "react";

const FocusInput = () => {
  const InputRef = useRef(null);

  function handleClick() {
    InputRef.current.focus();
    InputRef.current.value = "Hello";
  }

  return (
    <div>
      <input type="text" ref={InputRef} />
      <button onClick={handleClick}>Focus && Write Hello</button>
    </div>
  );
};

export default FocusInput;
