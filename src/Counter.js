import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Counter(props) {
  const [counter, changeCounter] = useState(0);

  const handleClick = () => {
    changeCounter((prevState) => {
      return prevState + 1;
    });
  };
  const handleReset = () => {
    changeCounter(0);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Counter</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            ID : {props.id + 1}
          </Card.Subtitle>
          <Card.Text>{counter}</Card.Text>
          <Button variant="primary" onClick={() => handleClick()}>
            Increase Count
          </Button>
          <Button variant="danger" onClick={() => handleReset()}>
            Reset Count
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Counter;
