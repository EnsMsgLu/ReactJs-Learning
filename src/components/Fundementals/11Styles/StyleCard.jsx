import React from "react";

const StyleCard = () => {
  const styles = {
    background: "lightblue",
    padding: "20px",
    border: "10px",
    text: "darkblue",
  };
  return (
    <div style={styles}>
      <h2>Style Card</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default StyleCard;
