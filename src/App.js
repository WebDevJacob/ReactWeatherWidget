import { useEffect, useState } from "react";
import "./index.css";
import WeatherCard from "./components/WeatherCard";
import WeatherCardSmall from "./components/WeatherCardSmall";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation_probability,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&current_weather=true&timezone=auto";

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      {apiData && (
        <>
          <WeatherCard data={apiData} />
          <div className="small-cards">
            <WeatherCardSmall />
            <WeatherCardSmall />
            <WeatherCardSmall />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
