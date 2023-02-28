import {
  WiDaySunny,
  WiNa,
  WiDaySunnyOvercast,
  WiFog,
  WiDayRainMix,
  WiDayShowers,
  WiDaySprinkle,
  WiDaySnow,
  WiThunderstorm,
} from "react-icons/wi";

/**
 * determine weather icon based on weather code
 * @param {number} code weather code
 * @returns appropriate weather icon component
 */
export default function getWeatherIcon(code) {
  let iconComponent = "";
  switch (code) {
    case 0:
      iconComponent = <WiDaySunny />;
      break;
    case 1:
    case 2:
    case 3:
      iconComponent = <WiDaySunnyOvercast />;
      break;
    case 45:
    case 48:
      iconComponent = <WiFog />;
      break;
    case 51:
    case 53:
    case 55:
      iconComponent = <WiDaySprinkle />;
      break;
    case 61:
    case 63:
    case 65:
      iconComponent = <WiDayRainMix />;
      break;
    case 80:
    case 81:
    case 82:
      iconComponent = <WiDayShowers />;
      break;
    case 56:
    case 57:
    case 66:
    case 67:
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      iconComponent = <WiDaySnow />;
      break;
    case 95:
    case 96:
    case 99:
      iconComponent = <WiThunderstorm />;
      break;
    default:
      iconComponent = <WiNa />;
  }
  return iconComponent;
}
