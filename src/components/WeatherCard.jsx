import getWeatherIcon from "./getWeatherIcon.js";
import { WiThermometer, WiStrongWind, WiWindDeg, WiUmbrella } from "react-icons/wi";
// 

function WeatherCard({ data }) {
    const currentData = data.current_weather
    // wind direction + 180 so that icon base is at specified value
    // and icon tip points in wind direction
    let windDirIconRotation = data.current_weather.winddirection + 180
    // hour index for accessing api data
    const currentHourIndex = new Date().getHours()

    return (
      <div className="card card-large">
        <div className="icon-large">
          {getWeatherIcon(currentData.weathercode)}
        </div>
        <div className="card-large-data-cells">
            <div className="data-cell accent">
              <WiThermometer className="icon icon-temperature" />
              {currentData.temperature} °C
            </div>
            <div className="data-cell accent">
              <WiUmbrella className="icon icon-precip-probability" />
              {data.hourly.precipitation_probability[currentHourIndex]} %
            </div>
            <div className="data-cell accent">
              <WiStrongWind className="icon icon-windspeed" />
              {currentData.windspeed} km/h
              <WiWindDeg className="icon icon-winddirection" style={{rotate: windDirIconRotation + "deg"}} />
            </div>
          </div>
     </div>
    );
  }

export default WeatherCard