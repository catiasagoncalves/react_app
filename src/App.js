import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
    <div className="container">

          <Weather />
      <footer>
  Project coded by Cátia Gonçalves and is 
       <a href="https://github.com/catiasagoncalves/react_app" target="_blank" rel="noreferrer"> open-sourced on GitHub </a>
      
     </footer>
    </div>
    </div>
  );
}
