import React from "react";
import '../styles/CurrentWeather.css'
import { IoLocationSharp } from "react-icons/io5";

const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather-container">
      <div className="example1">
        <div className="top-container">
          <img src={`icons/${data.weather[0].icon}.svg`} alt='weather-icon' className='weather-icon' />
          <div className="right-side">
            <p className="temperature-number">{Math.round(data.main.temp)}°C</p>
            <p className="weather-description">{data.weather[0].description.charAt(0).toUpperCase().concat(data.weather[0].description.slice(1))}</p>
          </div>
        </div>
        <div className="location">
          <IoLocationSharp className='location-pin'/>
          <span>{data.city}</span>
        </div>
      </div >
      <div>
        <p className="temperatures-min-max">Min. {Math.round(data.main.temp_min)}°C | Max. {Math.round(data.main.temp_max)}°C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind speed: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
