import { useContext, useState, useEffect } from 'react'
import DataContext from '../../Context/DataContext'
import './css/weather-icons.css'
import './css/weather-icons-wind.css'



const defaultData = {
    dateTime: 'today',
    humidity: '',
    wind: { deg: '', speed: '' },
    temp: { day: '1', eve: '', max: '', min: '', night: '' },
    feelsLike: { day: '', night: '', eve: '', morn: '' },
    icon: { url: '', description: '' }
}

function Body() {
    const { data } = useContext(DataContext)
    const [currentData, setCurrentData] = useState(defaultData)
    useEffect(() => { data.length > 0 ? setCurrentData(data[0]) : setCurrentData(defaultData) }, [data])

    return (
        <div className='main' >
            {/* {data.map((item, index) => <div className='card' key={index}>
                <span>{item.dateTime}</span>

                <div><img src={item.icon.url} alt={item.icon.description}></img></div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div>
                        < i className='wi wi-humidity' /> <span style={{ marginRight: '5px' }}>{item.humidity}</span>
                    </div>
                    <div>
                        <i className={`wi wi-wind towards-${item.wind.deg}-deg`} /> <span style={{ marginRight: '5px' }}>{item.wind.speed}</span>
                    </div>
                </div>

                <div>Day={item.temp.day}</div>
                <div>Evenig={item.temp.eve}</div>
                <div>Max={item.temp.max}</div>
                <div>Min={item.temp.min}</div>
                <div>humi={item.humidity}</div>

            </div>)} */}
            <div className='card' >
                {console.log(currentData)}
                <div className='dayName'><span>{currentData.dateTime}</span></div>
                <div className='Temp'><span >{currentData.temp.day}</span></div>
                <div className='dataView'>
                    <div className='leftIcon'>
                        <div>
                            <i className='wi wi-humidity' />
                            <span>{currentData.humidity}</span>
                        </div>
                        <div>
                            <i className={`wi wi-wind towards-${currentData.wind.deg}-deg`} />
                            <span>{currentData.wind.speed}</span>
                        </div>
                    </div>
                    <div className='iconDiv'><img src={currentData.icon.url} alt={currentData.icon.description} /></div>
                    <div className='rightIcon'>
                        <div>
                            <i className='wi wi-day-sunny'></i>
                            <span >{currentData.temp.day}</span>
                            <i className='wi wi-celsius'></i>
                        </div>
                        <div>
                            <i className='wi wi-night-clear'></i>
                            <span>{currentData.temp.night}</span>
                            <i className='wi wi-celsius'></i>
                        </div>
                    </div>
                </div>
                <div className='weekly'>
                    {data.map((day, index) => <div className='dailyData' onClick={() => setCurrentData(day)}>
                        <span>{day.dateTime.slice(0,3)}</span>
                        <img src={day.icon.url} alt={day.icon.description} />
                        <div>
                            <span>{day.temp.max}</span>
                            <span>{day.temp.min}</span>
                        </div>
                    </div>

                    )}
                </div>
            </div>
        </div >
    )
}

export default Body