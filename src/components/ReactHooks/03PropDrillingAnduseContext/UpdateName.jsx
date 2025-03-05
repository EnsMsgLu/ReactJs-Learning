import React, { useContext, useState } from "react";
import { Data } from ".";

const UpdateName = () => {
  const { updateUser } = useContext(Data);
  const [newName, setNewName] = useState("");

  const handleName = (e) => {
    e.preventDefault();

    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  return (
    <form onSubmit={handleName}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateName;
