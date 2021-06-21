import React, { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardComponent from "../components/Datacard/TeacherCard";
// import CardColumns from "react-bootstrap/CardColumns";
import CardDeck from "react-bootstrap/CardDeck";
import TeacherForm from "../components/Form/Teacherform";

const Teacher = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/teacher/")
      .then((response) => {
        setQueries(...queries, response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(queries);

  // console.log(color);
  // console.log(queries[0]);
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <CardDeck>
            {queries.map((query) => (
              <CardComponent query={query} />
            ))}
          </CardDeck>
        </Col>
        <Col xs={6} md={4}>
          <TeacherForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Teacher;
