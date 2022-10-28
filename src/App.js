import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CurrentDay from "./CurrentDay";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import ForecastCards from "./ForecastCards";

function ForecastCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.forecast.day}</Card.Title>
        <Card.Subtitle>{props.forecast.temp}</Card.Subtitle>
        <Card.Text>{props.forecast.weather}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function ForecastCards(props) {
  console.log(props);
  return (
    <Row className="no-wrap">
      {/* {props.data.map((dailyForecastObj, i) => {
        console.log(dailyForecastObj);
        return (
          <Col key={i}>
            <ForecastCard forecast={dailyForecastObj} />
          </Col>
        );
      })} */}
      <ForecastCard forecast={props.data[0]} />
      <ForecastCard forecast={props.data[1]} />
      <ForecastCard forecast={props.data[2]} />
      <ForecastCard forecast={props.data[3]} />
      <ForecastCard forecast={props.data[4]} />
    </Row>
  );
}

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
      <ForecastCards data={forecastData} id={1} name={"Billy"} />
      <br />
    </div>
  );
}

export default App;
