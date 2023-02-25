/**
 * determine weather icon class based on weather code
 * @param {number} code weather code
 * @returns appropriate weather icon class string
 */
export default function getWeatherIcon(code) {
  let iconClass = "";
  switch (code) {
    case 2:
      iconClass = "sunny";
      break;
    default:
      iconClass = "none";
  }
  return iconClass;
}
