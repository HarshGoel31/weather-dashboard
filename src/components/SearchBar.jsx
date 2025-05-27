import { useState } from "react";
import styled from "styled-components";
import { useWeather } from "../context/WeatherContext";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  gap: 10px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  width: 300px;
  max-width: 90%;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1rem;
  outline: none;

  ::placeholder {
    color: #ccc;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #ffffff33;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #ffffff55;
  }
`;

export default function SearchBar() {
  const [input, setInput] = useState("");
  const { setCity } = useWeather();

  const handleSearch = () => {
    if (input.trim()) {
      setCity(input);
    }
  };

  return (
    <SearchWrapper>
      <Input
        placeholder="Enter city name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchWrapper>
  );
}
