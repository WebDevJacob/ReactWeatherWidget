import { useEffect, useState } from "react";
import "./index.css";
import WeatherCard from "./components/WeatherCard";
import WeatherCardSmall from "./components/WeatherCardSmall";
import LocationAndDate from "./components/LocationAndDate";

const locationCollection = [
  { name: "Bamberg", country: "DE", lat: "49.73", long: "11.07" },
  { name: "Würzburg", country: "DE", lat: "49.79", long: "9.95" },
  { name: "Wien", country: "AT", lat: "48.21", long: "16.37" },
  { name: "London", country: "GB", lat: "51.51", long: "-0.13" },
];

function App() {
  const [apiData, setApiData] = useState(null);
  const [location, setLocation] = useState(
    // JSON.parse(localStorage.getItem("savedLocation")) ||
    locationCollection[0]
  );

  const handleLocationSelectChange = (e) => {
    let selectedOption = locationCollection[e.target.options.selectedIndex];
    // localStorage.setItem("savedLocation", JSON.stringify(selectedOption));
    setLocation(selectedOption);
  };

  useEffect(() => {
    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.long}&hourly=temperature_2m,precipitation_probability,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&current_weather=true&timezone=auto`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.error(err));
  }, [location]);

  return (
    <div className="app">
      {apiData && (
        <>
          <LocationAndDate
            onChange={(e) => handleLocationSelectChange(e)}
            locationCollection={locationCollection}
          />
          <WeatherCard data={apiData} />
          <div className="small-cards">
            <WeatherCardSmall data={apiData.daily} index={1} />
            <WeatherCardSmall data={apiData.daily} index={2} />
            <WeatherCardSmall data={apiData.daily} index={3} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
