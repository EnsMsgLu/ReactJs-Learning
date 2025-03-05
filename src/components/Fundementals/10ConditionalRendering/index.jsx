import React from "react";
import Weather from "./Weather";

const index = () => {
  return (
    <>
      <Weather temperature={11} />
      <Weather temperature={20} />
      <Weather temperature={30} />
      <Weather />
    </>
  );
};

export default index;
