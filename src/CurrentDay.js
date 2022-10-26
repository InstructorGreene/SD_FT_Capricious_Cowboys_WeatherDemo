import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CurrentDay(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.date}</Card.Title>
        <Card.Text>Some description of the weather</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CurrentDay;
