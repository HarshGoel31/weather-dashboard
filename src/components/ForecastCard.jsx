import { useWeather } from "../context/WeatherContext";
import styled from "styled-components";

const ForecastContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  overflow-x: auto;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;

const DayCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 5px;
  border-radius: 10px;
  min-width: 100px;
  flex: 0 0 auto;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    margin: 5px;
  }
`;

export default function ForecastCard() {
  const { forecastData, unit } = useWeather();
  if (!forecastData) return null;

  return (
    <ForecastContainer>
      {forecastData.slice(1).map((day) => (
        <DayCard key={day.date}>
          <p>
            {new Date(day.date).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <p>
            {unit === "celsius"
              ? `${day.day.maxtemp_c}°C / ${day.day.mintemp_c}°C`
              : `${day.day.maxtemp_f}°F / ${day.day.mintemp_f}°F`}
          </p>
        </DayCard>
      ))}
    </ForecastContainer>
  );
}
