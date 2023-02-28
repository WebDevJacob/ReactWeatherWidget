import LocationSelect from "./LocationSelect"

function LocationAndDate({ onChange, locationCollection}){
    return (
        <>
        <div className="card location-and-date">
                <LocationSelect onChange={onChange} locationCollection={locationCollection}/>
                {" " + new Intl.DateTimeFormat("de-DE", {weekday: "short", day: "2-digit", month: "2-digit"}).format(new Date())}
        </div>
        </>
    )
}

export default LocationAndDate