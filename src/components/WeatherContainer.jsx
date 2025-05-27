// src/components/WeatherContainer.jsx
import styled from "styled-components";

const WeatherCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  // padding: 2rem;
  // width: 90%;
  max-width: 1000px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin: 0 auto; /* center horizontally */
  box-sizing: border-box;
`;

export default WeatherCard;
