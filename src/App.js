import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App </h1>

      <Weather />

      <div className="container">
        <footer>
          This project was coded by Aigi Buht and it is{" "}
          <a
            href="https://github.com/aigib/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
