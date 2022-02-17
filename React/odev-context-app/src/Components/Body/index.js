import { useContext } from 'react'
import DataContext from '../../Context/DataContext'
import moment from 'moment'

function Body() {
    const { data } = useContext(DataContext)
    return (
        <div className='card'>
            {data.map((item, index) => <div key={index}>
                <div>{moment(item.dateTime).format('dddd')}</div>
                <div><img src={item.icon} alt={item.description}></img></div>
                <div>Day={item.temp.day}</div>
                <div>Evenig={item.temp.eve}</div>
                <div>Max={item.temp.max}</div>
                <div>Min={item.temp.min}</div>
            </div>)}
        </div>
    )
}

export default Body
// dateTime: timeConvert(day.dt), temp: { day: day.temp.day, eve: day.temp.eve, max: day.temp.max, min: day.temp.min, night: day.temp.night