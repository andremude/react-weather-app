export const geoCitiesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_GEOCITIES_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const REACT_APP_GEOCITIES_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
