import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ForecastCard from "./ForecastCard";

function ForecastCards(props) {
  console.log(props);
  return (
    <Row className="no-wrap">
      {props.data.map((v, i) => {
        return (
          <Col key={i}>
            <ForecastCard forecast={v} />
          </Col>
        );
      })}
    </Row>
  );
}

export default ForecastCards;
