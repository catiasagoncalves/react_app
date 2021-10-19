import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
    
    <a href="https://github.com/catiasagoncalves/Wather_app_CG/" target="_blank" rel="noreferrer">Open-source code,
    </a>
    <span>
        by Cátia Gonçalves and hosted in 
    </span>
    <a href="https://inspiring-shannon-b79cf1.netlify.app/" target="_blank" rel="noreferrer"> Netlify!
    </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
