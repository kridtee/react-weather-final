import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState(`celsius`);

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C</span>
      </div>
    );
  }
}
