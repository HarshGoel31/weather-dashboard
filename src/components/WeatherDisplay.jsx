// src/components/WeatherDisplay.jsx
import { useWeather } from "../context/WeatherContext";
import styled from "styled-components";
import UnitToggle from "./UnitToggle";

const Info = styled.div`
  text-align: center;
`;

const Location = styled.h2`
  margin: 0;
`;

const BigTemp = styled.div`
  font-size: 4rem;
  font-weight: 300;
`;

const SubText = styled.p`
  margin: 0.2rem;
  font-size: 1rem;
`;

export default function WeatherDisplay() {
  const { weatherData, unit } = useWeather();
  if (!weatherData) return null;

  const { location, current } = weatherData;

  return (
    <Info>
      <UnitToggle />

      <Location>
        {location.name}, {location.country}
      </Location>
      <img src={current.condition.icon} alt="icon" />
      <BigTemp>
        {unit === "celsius" ? `${current.temp_c}°C` : `${current.temp_f}°F`}
      </BigTemp>
      <SubText>{current.condition.text}</SubText>
      <SubText>Humidity: {current.humidity}%</SubText>
      <SubText>Wind: {current.wind_kph} km/h</SubText>
      <SubText>
        {new Date().toLocaleDateString(undefined, {
          weekday: "long",
          day: "numeric",
        })}
      </SubText>
    </Info>
  );
}
