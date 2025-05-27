import { useEffect } from "react";
import { useWeather } from "./context/WeatherContext";
import { fetchWeather } from "./services/weatherApi";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastCard from "./components/ForecastCard";
import styled from "styled-components";
import UnitToggle from "./components/UnitToggle";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-height: 100vh;
  border-radius: 2rem;
  background: linear-gradient(to bottom, #2980b9, #6dd5fa);
`;

export default function WeatherApp() {
  const { city, setWeatherData, setForecastData, setError } = useWeather();

  useEffect(() => {
    let interval;

    const loadWeather = async () => {
      if (!city) return;
      try {
        const response = await fetchWeather(city);
        setWeatherData(response.data);
        setForecastData(response.data.forecast.forecastday); // <- NEW
        setError(null);
      } catch {
        setError("Could not fetch weather. Check city name or network.");
      }
    };
    if (city) {
      loadWeather(); // Fetch once immediately
      interval = setInterval(loadWeather, 30000); // Then every 30 seconds
    }

    return () => clearInterval(interval); // Clean up
  }, [city]);

  return (
    <MainContainer>
      <SearchBar />

      <ErrorMessage />
      <WeatherDisplay />
      <ForecastCard />
      {/* Add <ForecastCard /> if using 5-day forecast */}
    </MainContainer>
  );
}
