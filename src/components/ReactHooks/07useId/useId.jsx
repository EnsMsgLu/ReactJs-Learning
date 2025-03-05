import { useId } from "react";
import React from "react";

const ID = ({ children }) => {
  const useid = useId(null);
  return (
    <div id={useid}>
      Check the Console log div Id
      <br />
      {children}
    </div>
  );
};

export default ID;
