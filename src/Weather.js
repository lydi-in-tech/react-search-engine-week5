import { Button } from "bootstrap";
import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
        <div className="Weather">
            <div className="container">
  <div className="search-bar">
    <form  id="search-form"> 
      <div className="row">
        <div className="search-bar">
          <div className="col-9 search-form">
            <input type="search" placeholder="Search for a city" 
            autofocus="on"
            autocomplete="off"
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

  <div className="icon" ><img src="http://openweathermap.org/img/wn/50d@2x.png" width="200" height="200" alt="clear" id="icon"/> 
    <div className="temp" id="temp">21</div>
    <span id="celcius" className="celcius">
      <strong id="temperature"></strong>
      <a href="/#" id="celsius-link">°C</a>|<a href="/#" id="fahrenheit-link">°F</a>
    </span>
  </div> 

<h1>
  <div id="city" className="city">New York</div>
</h1>

<p>
  <div className="time" id="time">15:00 Friday</div>
</p>

<div className="info">
  <div className="description" id="description">rainy</div>
  <div className="humidity" id="humidity">Humidity: 25%</div> 
  <div className="windSpeed" id="windSpeed">Windspeed: 2km/h</div> 
</div>
</div>
        </div>

    )
}