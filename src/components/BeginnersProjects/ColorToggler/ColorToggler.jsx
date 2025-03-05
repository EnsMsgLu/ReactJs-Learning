import "./style.css";

import React, { useEffect, useState } from "react";

const ColorToggler = () => {
  const [bgColor, setbgColor] = useState("#fff");
  const [txColor, settxColor] = useState("#131313");
  const [btnColor, setbtnColor] = useState("#fff");
  const [Toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    setbgColor(bgColor === "#fff" ? "#131313" : "#fff");
    settxColor(txColor === "#fff" ? "#131313" : "#fff");
    setbtnColor(btnColor === "#fff" ? "#131313" : "#fff");
    localStorage.setItem("toggle", bgColor === "#fff" ? "Black" : "White");
  };

  useEffect(() => {
    const toggle = localStorage.getItem("toggle");
    if (toggle && toggle === "White") {
      setbgColor("#fff");
      settxColor("#131313");
      setbtnColor("#fff");
    } else if (toggle && toggle === "Black") {
      setbgColor("#131313");
      settxColor("#fff");
      setbtnColor("#131313");
    }
    setToggle(true);
  }, [Toggle]);
  return (
    <div
      className="container"
      style={{ backgroundColor: bgColor, color: txColor }}
    >
      <section>
        <button
          style={{
            backgroundColor: txColor,
            color: btnColor,
            border: "5px 5px",
            borderRadius: "5px",
          }}
          onClick={() => toggleTheme()}
        >
          {bgColor === "#fff" ? "White Theme" : "Black Theme"}
        </button>
        <section className="content">
          <h1>
            Welcome To A <br /> Real World..
          </h1>
        </section>
      </section>
    </div>
  );
};

export default ColorToggler;
