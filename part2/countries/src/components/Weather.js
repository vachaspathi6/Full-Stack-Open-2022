import axios from "axios"
import { useState, useEffect } from "react"

const Weather = ({ country }) => {
  const [ther, setther] = useState({})

  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather'
        + `?lat=${country.capitalInfo.latlng[0]}`
        + `&lon=${country.capitalInfo.latlng[1]}`
        + `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        + '&units=metric')
      .then(response => setther(response.data))
  }, [country.capitalInfo.latlng])

  if (Object.keys(ther).length === 0) return

  return (
    <div>
      <h3>Weather in {country.capital}</h3>
      <p>Temperature {ther.main.temp} °C</p>
      <img
        src={`https://openweathermap.org/img/wn/${ther.ther[0].icon}@2x.png`}
        alt={ther.ther[0].description}
      />
      <p>wind {ther.wind.speed} m/s</p>
    </div>
  )
}

export default Weather