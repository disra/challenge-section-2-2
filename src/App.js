import "./App.css";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function App() {
  const [categories, setCategories] = useState([]);
  const [result, setResult] = useState([]);

  const getData = () => {
    fetch("https://api.publicapis.org/categories")
      .then((res) => res.json())
      .then((data) => {
        setResult(data.categories);
        setCategories(data.categories);
      });
  };

  const handleFilter = (text) => {
    setResult(
      categories.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <Form.Control
          className="my-3"
            type="text"
            onChange={(e) => handleFilter(e.target.value)}
          ></Form.Control>
          <div className="d-flex flex-wrap">
            {result.map((item) => {
              return <div className="h5 mx-3 my-1">{item}</div>;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
