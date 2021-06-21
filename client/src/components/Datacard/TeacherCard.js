import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
const CardComponent = ({ query }) => {
  // console.log(query);
  const colors = ["danger", "warning", "primary", "success", "info"];
  let color = Math.floor(Math.random() * colors.length);
  return (
    <div>
      <Card
        className="my-3"
        bg={colors[color]}
        text={"black"}
        style={{ width: "18rem" }}
      >
        <Card.Header>Query</Card.Header>
        <Card.Header style={{backgroundColor:"green"}}> <b>ID: </b> {query.question_id}</Card.Header>
        <Card.Body>
          <Card.Text><b>Name: </b>  {query.name}</Card.Text>
          <Card.Text> <b>University: </b> {query.university}</Card.Text>
          <Card.Text> <b>Enrollment Num: </b> {query.enrollmentNum}</Card.Text>
          <Card.Text><b>Query: </b> {query.query}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

Card.propTypes = {
  bgcolor: PropTypes.string,
};

export default CardComponent;
