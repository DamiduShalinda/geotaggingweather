import { useGeolocated } from "react-geolocated";
import Weather from './Weather';
import WeatherForcast from "./WeatherForcast";




 const App = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
      useGeolocated({
          positionOptions: {
              enableHighAccuracy: false,
          },
          userDecisionTimeout: 5000,
      });

  return !isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <Weather latitude={coords.latitude} longitude={coords.longitude} />
      <div> <p> latitude: {coords.latitude} , longtitude = {coords.longitude}</p></div>
      <WeatherForcast latitude={coords.latitude} longitude={coords.longitude}/>
      </>

  ) : (
      <div>Getting the location data&hellip; </div>
  );
};

export default App;
