import React, { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardComponent from "../components/Datacard/StudentCard";
import CardColumns from "react-bootstrap/CardColumns";
import StudentForm from "../components/Form/Studentform";

const Student = () => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/student/")
      .then((response) => {
        setReplies(...replies, response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(replies);

  // console.log(color);
  // console.log(replies[0]);
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <CardColumns>
            {replies.map((reply) => (
              <CardComponent reply={reply} />
            ))}
          </CardColumns>
        </Col>
        <Col xs={6} md={4}>
          <StudentForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Student;
