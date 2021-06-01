import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardComponent from "../components/Datacard/Card";
import CardColumns from "react-bootstrap/CardColumns";
import StudentForm from "../components/Form/Studentform";

const Student = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <CardColumns >
            <CardComponent bgcolor="warning" />
            <CardComponent bgcolor="warning" />
            <CardComponent bgcolor="warning" />
            <CardComponent bgcolor="warning" />
            <CardComponent bgcolor="warning" />
          </CardColumns>
        </Col>
        <Col xs={6} md={4}>
          <StudentForm/>
        </Col>
      </Row>
    </Container>
  );
};

export default Student;
