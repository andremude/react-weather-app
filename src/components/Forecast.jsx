import React from "react";
import "../styles/Forecast.css";

const week_days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = week_days.slice(dayInAWeek, week_days.length).concat(week_days.slice(0, dayInAWeek));

  return (
    <>
      <div className="forecast-container">
        {data.list.splice(0, 4).map((item, idx) => (
          <div className="forecast-item-container" key={idx}>
            <label className="week-day">{forecastDays[idx]}</label>
            <img src={`icons/${item.weather[0].icon}.svg`} className="forecast-icon" alt="weather-icon" />
            <p className="forecast-temperature">{Math.round(item.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
