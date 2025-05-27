import styled from "styled-components";
import { useWeather } from "../context/WeatherContext";

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ToggleButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ active }) => (active ? "#000" : "#fff")};
  background: ${({ active }) => (active ? "#fff" : "rgba(255, 255, 255, 0.2)")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ active }) =>
      active ? "#f1f1f1" : "rgba(255, 255, 255, 0.3)"};
  }
`;

export default function UnitToggle() {
  const { unit, setUnit } = useWeather();

  return (
    <ToggleWrapper>
      <ToggleButton
        active={unit === "celsius"}
        onClick={() => setUnit("celsius")}
      >
        °C
      </ToggleButton>
      <ToggleButton
        active={unit === "fahrenheit"}
        onClick={() => setUnit("fahrenheit")}
      >
        °F
      </ToggleButton>
    </ToggleWrapper>
  );
}
