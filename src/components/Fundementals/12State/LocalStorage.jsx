import React, { useEffect, useState } from "react";

const LocalStorage = () => {
  const [name, setName] = useState(() => {
    const SavedName = localStorage.getItem("name");
    return SavedName ? JSON.parse(SavedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const ChangeName = (event) => {
    setName(event.target.value);
  };

  const handleClear = () => setName("");
  return (
    <div>
      <p>You are name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={ChangeName}
        placeholder="Please Enter Your name"
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default LocalStorage;
