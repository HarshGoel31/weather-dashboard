import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(
    () => localStorage.getItem("lastCity") || ""
  );
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState("celsius");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      localStorage.setItem("lastCity", city);
    }
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        setWeatherData,
        forecastData,
        setForecastData,
        error,
        setError,
        unit,
        setUnit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
