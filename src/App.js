import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
    <div className="container">

      <h1>Weather Search Engine</h1>
      <WeatherSearch />
      <footer>
        this project was coded by Cátia Gonçalves and is open-sourced
       <a href="https://github.com/catiasagoncalves/react_app" target="_blank" rel="noreferrer">    </a>
       hosted in Netlify!
     </footer>
    </div>
    </div>
  );
}
