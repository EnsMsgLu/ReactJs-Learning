import React, { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);
  const [outputValue, setOutputValue] = useState("");
  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => setCopied(true));
    setTimeout(() => {
      setCopied(false);
      navigator.clipboard.readText().then((e) => setOutputValue(e));
    }, 3000);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <p>{outputValue}</p>
      <PopupContent copied={copied} />
    </div>
  );
};

export default CopyInput;
