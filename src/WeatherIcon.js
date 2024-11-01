import React from "react";

export default function WeatherIcon(props) {
  let codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "010d": "RAIN",
    "010n": "RAIN",
    "011d": "RAIN",
    "011n": "RAIN",
    "013d": "SNOW",
    "013n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  if (props.code === "01d") {
    return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="1e1e1e"
        size={props.size}
        animate={true}
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon="CLEAR_NIGHT"
        color="red"
        size={64}
        animate={true}
      />
    );
  }
}
