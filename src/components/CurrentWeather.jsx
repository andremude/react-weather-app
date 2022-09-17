import React from "react";
import '../styles/CurrentWeather.css'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import { IoLocationSharp } from "react-icons/io5";

const CurrentWeather = ({ data }) => {
  return (
    <div className='current-weather-container'>
      <div className='temperature-container-list'>
        <div className='temperature-icon-number'>
          <div className="temperatures-container">
            <div className="example1">
              <div className="example2">
                <img src={`icons/${data.weather[0].icon}.png`} alt='weather-icon' className='weather-icon' />
                <div className="example3">
                  <p className="temperature-number">{Math.round(data.main.temp)}°C</p>
                  <p className="weather-description">{data.weather[0].description.charAt(0).toUpperCase().concat(data.weather[0].description.slice(1))}</p>
                </div>
              </div>
              <div>
                <p className="location">
                  <IoLocationSharp className='location-pin'/>
                  <span><b>{data.city}</b></span>
                </p>
              </div>
            </div >
            <div>
              <p className="temperatures-min-max">Min. {Math.round(data.main.temp_min)}°C | Max. {Math.round(data.main.temp_max)}°C</p>
              <p>Humidity: {data.main.humidity}%</p>
              <p>Wind speed: {data.wind.speed} m/s</p>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
};

export default CurrentWeather;
