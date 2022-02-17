import React from 'react'
import { cityDetails } from '../Data/Data'
import { useContext } from 'react'
import axios from 'axios'
import DataContext from '../../Context/DataContext'

const getData = (coordinate, setData) => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&exclude=minutely,hourly&&units=metric&appid=7a905d1cfe10e6935c9931158e375812`)
        .then((res) => {
            setData(dataProcess(res.data))
        })
        .catch((err) => console.log(err))
}

const dataProcess = (resData) => {
    let resArray = []
    resData.daily.forEach((day, index) => {
        resArray.push(
            {
                dateTime: timeConvert(day.dt),
                temp: { day: day.temp.day, eve: day.temp.eve, max: day.temp.max, min: day.temp.min, night: day.temp.night },
                icon: getIcon(day.weather[0]),
                description: day.weather[0].description
            })
    })
    return resArray
}
const getIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode.icon}@2x.png`
}

const timeConvert = (timespan) => {
    const date = new Date(timespan * 1000)
    return date
}


function Header() {
    let { setData } = useContext(DataContext)
    return (
        <div>
            <label htmlFor='cities'>Choose a City:</label>
            <select name="city" id="cities" onChange={(res) => { getData(JSON.parse(res.target.value), setData) }}>
                {cityDetails.map((city) => <option key={city.id} value={`{"lat":${city.latitude},"lon":${city.longitude}}`} > {city.name}</option>)}
            </select>
        </div >
    )
}

export default Header
