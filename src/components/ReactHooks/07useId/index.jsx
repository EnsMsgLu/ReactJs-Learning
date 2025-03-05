import React, { useState } from "react";
import ID from "./useId";

const App = () => {
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");

  function handleConsolelog() {
    const DataForm = {
      username: Username,
      email: Email,
    };
    console.log(`Send here Data to Db:`, DataForm);
  }
  return (
    <div>
      <ID />
      <ID>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleConsolelog}>Button</button>
      </ID>
    </div>
  );
};

export default App;
