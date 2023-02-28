function LocationSelect({ onChange,  locationCollection}) {
    return(
        <select className="location-select"
        onChange={onChange}
      >
        {locationCollection.map((loc, index) => {
          return (
            <option value={index} key={index}>
              {loc.name}, {loc.country}
            </option>
          );
        })}
      </select>
    )
}

export default LocationSelect