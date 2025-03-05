import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const Search = () => {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("rgba(0, 0, 0, 0.87)");
    if (e.target.className === "container") {
      setToggle(false);
      setBgColor("#fff");
    }
  };
  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {toggle ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setToggle(true)} />
      )}
    </section>
  );
};

export default Search;
