import React from "react";
import "./Weather.css";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Luxembourg",
    time: "Sunday, at 14:00",
    description: "Clear",
    temperature: 17,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    feel: 18,
    humidity: 63,
    wind: 4
  };
  return (
    <div className="Weather">
      <form className="mb-4">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a location..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="overview-location">
        <h1> {weatherData.city}</h1>
        <ul>
          {" "}
          <li> Last update: {weatherData.time} </li>
          <li> {weatherData.description} </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-temperature">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <strong> {weatherData.temperature}</strong>
            <span className="temperature-units"> ºC </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Real feel: {weatherData.feel}ºC </li>
            <li> Humidity: {weatherData.humidity}% </li>
            <li> wind: {weatherData.wind}km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
