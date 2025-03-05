import "./index.css";

import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  function handleCalculator(cl) {
    if (cl === "C") setDisplay("");
    else if (cl === "=") {
      var equal = eval(display);
      console.log(equal);
      setDisplay(equal);
    } else {
      setDisplay(display + cl);
    }
  }
  return (
    <form class="calculator" name="calc">
      <div type="text" class="value">
        {display}
      </div>
      <span class="num clear" onClick={() => handleCalculator("C")}>
        C
      </span>
      <span onClick={() => handleCalculator("/")}>/</span>
      <span onClick={() => handleCalculator("*")}>*</span>
      <span onClick={() => handleCalculator("7")}>7</span>
      <span onClick={() => handleCalculator("8")}>8</span>
      <span onClick={() => handleCalculator("9")}>9</span>
      <span onClick={() => handleCalculator("-")}>-</span>
      <span onClick={() => handleCalculator("4")}>4</span>
      <span onClick={() => handleCalculator("5")}>5</span>
      <span onClick={() => handleCalculator("6")}>6</span>
      <span className="plus" onClick={() => handleCalculator("+")}>
        +
      </span>
      <span onClick={() => handleCalculator("1")}>1</span>
      <span onClick={() => handleCalculator("2")}>2</span>
      <span onClick={() => handleCalculator("3")}>3</span>
      <span onClick={() => handleCalculator("0")}>0</span>
      <span onClick={() => handleCalculator("00")}>00</span>
      <span onClick={() => handleCalculator(".")}>.</span>
      <span class="num equal" onClick={() => handleCalculator("=")}>
        =
      </span>
    </form>
  );
};

export default Calculator;
