import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1";

export const fetchWeather = async (city) => {
  const key = import.meta.env.VITE_WEATHER_API_KEY;
  return axios.get(`${BASE_URL}/forecast.json`, {
    params: {
      key,
      q: city,
      days: 6, // today + next 5
      aqi: "no",
      alerts: "no",
    },
  });
};
