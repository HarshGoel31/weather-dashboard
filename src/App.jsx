import GlobalStyles from "./styles/GlobalStyles";
import WeatherCard from "./components/WeatherContainer";
import { WeatherProvider } from "./context/WeatherContext";
import WeatherApp from "./WeatherApp"; // extract logic into its own component

export default function App() {
  return (
    <>
      <GlobalStyles />
      <WeatherProvider>
        <WeatherCard>
          <WeatherApp />
        </WeatherCard>
      </WeatherProvider>
    </>
  );
}
