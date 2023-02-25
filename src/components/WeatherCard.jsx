import getWeatherIcon from "./getWeatherIcon.js";
import { WiThermometer, WiStrongWind, WiWindDeg } from "react-icons/wi";


function WeatherCard({ data }) {
    const currentData = data.current_weather
    // wind direction + 180 so that icon base is at specified value
    // and icon tip points in wind direction
    let windDirIconRotation = data.current_weather.winddirection + 180
    return (
      <div className="card card-large">
        <div className="icon icon-large">
          {getWeatherIcon(currentData.weathercode)}
        </div>
          <div className="data-row">
            <WiThermometer className="icon icon-temp" />
            {currentData.temperature} °C
          </div>
          <div className="data-row">
            <WiStrongWind className="icon icon-windS" />
            {currentData.windspeed} km/h
            <WiWindDeg className="icon icon-windD" style={{rotate: windDirIconRotation + "deg"}} />
            {currentData.winddirection} 
          </div>
         
     </div>
    );
  }

export default WeatherCard