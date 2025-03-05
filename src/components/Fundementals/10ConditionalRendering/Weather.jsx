import React from "react";

const Weather = ({ temperature }) => {
  if (temperature <= 15) {
    return <p>It's cold outside!</p>;
  } else if (temperature > 15 && temperature <= 25) {
    return <p>It's nice outside!</p>;
  } else if (temperature > 25) {
    return <p>It's hot outside!</p>;
  } else {
    return <p>Temperature not exist</p>;
  }
};

export default Weather;
