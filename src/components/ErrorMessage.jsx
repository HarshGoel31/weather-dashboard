import { useWeather } from "../context/WeatherContext";
import styled from "styled-components";

const ErrorBox = styled.div`
  color: red;
  margin-top: 20px;
`;

export default function ErrorMessage() {
  const { error } = useWeather();

  return error ? <ErrorBox>{error}</ErrorBox> : null;
}
