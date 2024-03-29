import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/weatherService";
import getFormattedWeatherData from "./services/weatherService";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-20 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 ">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
