import React, { useState } from 'react';
import '../styles/SearchBar.css'
import { geoCitiesOptions, REACT_APP_GEOCITIES_API_URL } from '../components/Api'
import { AsyncPaginate } from "react-select-async-paginate";

const SearchBar = ({ submitSearch }) => {
  const [search, setSearch] = useState('');

  const getCity = (cityInput) => {
    return fetch(
      `${REACT_APP_GEOCITIES_API_URL}/cities?minPopulation=100000&namePrefix=${cityInput}`,
      geoCitiesOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (locationSearch) => {
    setSearch(locationSearch);
    submitSearch(locationSearch);
  };

  return (
    <AsyncPaginate
      className="search-bar"
      placeholder="Enter a city"
      value={search}
      onChange={handleOnChange}
      loadOptions={getCity}
      debounceTimeout={800}
    />
  );
};

export default SearchBar;
