import React from 'react'
import SearchBar from './SearchBar'
import InitialPage from './InitialPage'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import '../styles/Main.css'
import { useState } from 'react';
import { REACT_APP_API_URL } from './Api'

const Main = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getWeather = (locationSearch) => {

    const [lat, lon] = locationSearch.value.split(" ");

    const getCurrentWeather = fetch(`${REACT_APP_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);

    const getForecast = fetch(`${REACT_APP_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)

    Promise.all([getCurrentWeather, getForecast])
      .then(async (response) => {
        const CurrentWeatherData = await response[0].json();
        const forecastData = await response[1].json();

        setCurrentWeather({ city: locationSearch.label, ...CurrentWeatherData });
        setForecast({ city: locationSearch.label, ...forecastData });
      })
      .catch(console.log);
  };

  console.log(currentWeather);
  console.log(forecast)

  return (
    <div className="main-container">
      <SearchBar submitSearch={getWeather}/>
      {!currentWeather && <InitialPage />}
      {currentWeather && <CurrentWeather  data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  )
}
export default Main
