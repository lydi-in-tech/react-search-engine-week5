import React, { useState } from "react";
import FormattedDate from "./FormattedDate"
import axios from "axios"
import "./Weather.css"
  
export default function Weather(props) {

  const [weatherData, setWeatherData]=useState({ready: false})
  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
    description:response.data.weather[0].description,
    humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: "http://openweathermap.org/img/wn/50d@2x.png",
    city: response.data.name
   })
    
  }

  if (weatherData.ready) {
    return (
        <div className="Weather">
          <div className="container">
  <div className="search-bar">
    <form  id="search-form"> 
      <div className="row">
        <div className="search-bar">
          <div className="col-9 search-form">
            <input type="search" placeholder="Search for a city.." 
            autoFocus="on"
            autoComplete="off"
            className="form-control search-input"
            id="city-input"
            />
          </div>
          <div className="col-3 p-0">
          <input type="submit" className="btn w-200" value="Search"/>
          </div>
        </div>
      </div>
    </form>
          </div>
          
          <div className="icon" ><img src="http://openweathermap.org/img/wn/50d@2x.png" width="200" height="200" alt="clear" /> 
                <h1 className="temp" >{Math.round(weatherData.temperature)}</h1>
                <span className="celcius">
                    <a href="/#" className="celsius-link">°C</a>|<a href="/#" className="fahrenheit-link">°F</a>
                </span>
                </div>
            
            
                <h1 className="city">{weatherData.city}</h1>
            

            <div className="time">
                <FormattedDate date={weatherData.date} />
            </div>
            
            <div className="info">
                <div className="description text-capitalize">{weatherData.description}</div>
                <div className="humidity" >Humidity: {weatherData.humidity}%</div>
                <div className="windSpeed" >Wind: {Math.round(weatherData.windspeed)}km/h</div> 
            </div>
            
</div>

  
        </div>
      
        
    )
    
  } else {
    let apiKey = "bf54175800a55e59e6c4d6461deeef12"
      let city="New York"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  return "Loading..."
  }

 
    
}