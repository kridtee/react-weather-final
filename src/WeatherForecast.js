import React, { useState } from "react";
import "./WeatherForecast.css";
import Axios from "axios";
import WeatherDay from "./WeatherDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 5) {
              return (
                <div className="col" key={index}>
                  <WeatherDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "b1763761f04ae0f97b474ot106ea6ab4";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units+metric`;

    Axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
