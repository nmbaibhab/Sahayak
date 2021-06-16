import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
const CardComponent = ({ bgcolor }) => {
  // console.log(name);
  return (
    <div>
      <Card
        bg={bgcolor === null ? "dark" : bgcolor}
        text={bgcolor !== null ? "dark" : "white"}
        style={{ width: "14rem" }}
        className=" p-2 "
      >
        <Card.Header>Question</Card.Header>
        <Card.Body>
          <Card.Title> </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

Card.propTypes = {
  bgcolor: PropTypes.string,
};

export default CardComponent;
