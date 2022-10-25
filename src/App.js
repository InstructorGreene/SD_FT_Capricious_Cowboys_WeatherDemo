import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import Counter from "./Counter";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [counters, changeCounters] = useState([]);

  const addCounter = () => {
    // // counters.push(2);
    changeCounters((prevState) => {
      return [...prevState, 1];
    });
  };

  return (
    <div className="App">
      <Container>
        <Button
          variant="primary"
          onClick={() => {
            addCounter();
          }}
        >
          Add counter
        </Button>
        <Row className="counterRow justify-content-md-center">
          {counters.map((value, index) => {
            return (
              <Col key={index}>
                <Counter key={index} id={value} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
