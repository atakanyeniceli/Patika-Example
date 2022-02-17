import { useContext } from 'react'
import DataContext from '../../Context/DataContext'
import './css/weather-icons.css'
import './css/weather-icons-wind.css'

function Body() {
    const { data } = useContext(DataContext)
    return (
        <div className='main'>
            {/* {data.map((item, index) => <div className='card' key={index}>
                <span>{item.dateTime}</span>

                <div><img src={item.icon.url} alt={item.icon.description}></img></div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div>
                        < i className='wi wi-humidity' /> <span style={{ marginRight: '5px' }}>{item.humidity}</span>
                    </div>
                    <div>
                        <i className={`wi wi-wind towards-${item.windDeg}-deg`} /> <span style={{ marginRight: '5px' }}>{item.windSpeed}metre/sec</span>
                    </div>
                </div>

                <div>Day={item.temp.day}</div>
                <div>Evenig={item.temp.eve}</div>
                <div>Max={item.temp.max}</div>
                <div>Min={item.temp.min}</div>
                <div>humi={item.humidity}</div>

            </div>)} */}
            <div className='card'>
                
            </div>
        </div>
    )
}

export default Body