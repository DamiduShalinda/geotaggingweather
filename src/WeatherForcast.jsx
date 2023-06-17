import { useState , useEffect} from 'react'
import axios from 'axios';

function WeatherForcast( {latitude , longitude}) {
    const [weatherData, setWeatherData] = useState([]);
    

    const API_KEY = '3d4c4d964c2239b7841a1f0d5397c190';

    const getWeatherForcast =   async (lat , lon ) => {
        
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            const updatedWeatherData = [];
         for (let i = 1; i < 10; i++) {
             updatedWeatherData.push(response.data.list[i]);
            }
            setWeatherData(updatedWeatherData);
            console.log(response.data.list);
            console.log(updatedWeatherData);

        } catch (error) {
            console.log(error);
        }

    useEffect(() => {
        if (latitude && longitude) {
            getWeatherForcast(latitude, longitude)
        }

      }, [latitude, longitude ])
    

  return (
    <div>WeatherForcast</div>
  )
}
}
export default WeatherForcast