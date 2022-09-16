import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div>
        <p>{data.main.temp}°C</p>
        <p>{data.wind.speed} m/s</p>
        <p>{data.main.humidity}%</p>
    </div>
  );
};

export default CurrentWeather;
