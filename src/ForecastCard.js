import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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

export default ForecastCard;
