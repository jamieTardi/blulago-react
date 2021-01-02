import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Weather = () => {
    const [getWeather, setGetWeather] = useState(null)
    const [isDay, setIsDay] = useState(1)
    console.log(getWeather)
    
   
    
    useEffect(() => {
        axios.get('http://api.weatherapi.com/v1/current.json?key=59793abdf2ba474ca3b141104210101&q=Troyes')
        .then(data => {
            setGetWeather(data)
            setIsDay(getWeather.data.current.is_day)
        })
        .catch(error => console.log(error))
        

    }, [])
    return (
        <>
            {getWeather &&(
                <WeatherContainer>
                    <TextContainer>
            <h3>Lake Current Weather</h3>
            <p>Conditions: {getWeather.data.current.condition.text}</p>
            <p>Tempreture: {getWeather.data.current.temp_c} Celsius</p>
            <p>Pressure: {getWeather.data.current.pressure_mb} Millibar</p>
            <p>Wind Direction: {getWeather.data.current.wind_dir}</p>
            <p>Wind Speed: {getWeather.data.current.wind_mph} mph</p>
            </TextContainer>
            {isDay ? (<StyledImg src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-cloud.jpg" alt="day"/>) : 
            <StyledImg src="https://cdn.lynda.com/course/163609/163609-637286158074364266-16x9.jpg" alt="night"/>}
            <WeatherIcon src={getWeather.data.current.condition.icon} alt="weather icon"/>
            </WeatherContainer>
            )}
            
            </>
        
    )
}

const StyledImg = styled.img`
width: 100%;
height: 100%;
z-index: -1;
position: absolute;
top: 0%;
filter: brightness(55%);
`

const WeatherContainer = styled.div`
width: 100%;
height: 100%;
position: relative;
h3{
    color: #eeeeee;
    padding-top: 0.5rem;
}
p{
    color: #eeeeee;
    padding-top: 0.5rem;
}

`
const TextContainer = styled.div`
width: 100%;
text-align: center;

`

const WeatherIcon = styled.img`
max-width: 100px;
max-height: 100px;
position: absolute;
right: 32%;
bottom: -9%;
left: 3%;
top: 30%;
@media (max-width: 600px){
    max-width: 60px;
    max-height: 60px;
}
`

export default Weather
