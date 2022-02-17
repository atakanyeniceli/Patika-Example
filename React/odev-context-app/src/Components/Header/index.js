import React from 'react'
import { cityDetails } from '../Data/Data'
import axios from 'axios'

const getData = (coordinate) => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&exclude=minutely,hourly&&units=metric&appid=7a905d1cfe10e6935c9931158e375812`)
        .then((res) => timeConvert(res.data.current.dt))
}
const timeConvert = (timespan) => {
    const date = new Date(timespan*1000)
    console.log(date)
}

function Header() {
    return (
        <div>
            <label htmlFor='cities'>Choose a City:</label>
            <select name="city" id="cities" onChange={(res) => getData(JSON.parse(res.target.value))}>
                {cityDetails.map((city) => <option key={city.id} value={`{"lat":${city.latitude},"lon":${city.longitude}}`} > {city.name}</option>)}
            </select>
        </div >
    )
}

export default Header
