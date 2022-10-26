import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import CurrentDay from "./CurrentDay";

import ForecastCards from "./ForecastCards";

function App() {
  const [forecastData, changeForecastData] = useState([
    { day: "thursday", temp: 30, weather: "miserable" },
    { day: "friday", temp: 30, weather: "apocalyptic" },
    { day: "saturday", temp: 30, weather: "Nothingnes" },
    { day: "sunday", temp: 30, weather: "Creatiion of all" },
    { day: "monday", temp: 30, weather: "Grey and drizzly" },
  ]);

  // one for the current day
  // the 5 day forecast
  return (
    <div className="App">
      <CurrentDay date={"Today"} id={12} />
      <ForecastCards data={forecastData} />
      <br />
    </div>
  );
}

export default App;
