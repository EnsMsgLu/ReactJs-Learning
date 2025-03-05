import React, { useState } from "react";
import Component01 from "./Component01";
import { createContext } from "react";
import UpdateName from "./UpdateName";
export const Data = createContext();

const App = () => {
  const [name, setName] = useState("Enes M");
  const updateUser = (newName) => {
    setName(newName);
  };
  return (
    <div>
      <Data.Provider value={{ name, updateUser }}>
        <Component01 />
        <UpdateName />
      </Data.Provider>
    </div>
  );
};

export default App;
