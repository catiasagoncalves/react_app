import React from "react";
import "./Weather.css";


export default function Weather() {
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
      <h1> Luxembourg</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li> Mostly Cloudy</li>
      </ul>
<div className="row">
  <div className="col-6">
    <img src="http://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy"/>
    º6C
    </div> 
    <div className="col-6">
<ul>
  <li>Reall feel: 16ºC</li>
  <li>Humidity: 72%</li>
  <li>Wind: 10 km/h</li>
</ul>
    </div>
</div>
    </div>
  );
}
