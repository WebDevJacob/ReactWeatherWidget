import { WiThermometer, WiUmbrella} from "react-icons/wi";
import getWeatherIcon from "./getWeatherIcon";

function WeatherCardSmall({ data, index }) {
    return(
        <div className="card card-small">
            <div className="data-cell">
                {new Intl.DateTimeFormat("de-DE", {weekday: "short"})
                .format(new Date(data.time[index]))}
            </div>
            <div className="data-cell cell-weather-icon">
                {getWeatherIcon(data.weathercode[index])}
            </div>
            <div className="data-cell">
                <WiThermometer className="icon"/>
                {data.temperature_2m_max[index]} / {" "} 
                {data.temperature_2m_min[index]} °C
            </div>
            <div className="data-cell">
                <WiUmbrella className="icon"/>
                {data.precipitation_probability_max[index]} %
            </div>
        </div>
    )
}


export default WeatherCardSmall