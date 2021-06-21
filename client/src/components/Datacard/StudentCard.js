import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
const CardComponent = ({ reply }) => {
  console.log(reply);
  const colors = ["danger", "warning", "primary", "success", "info"];
  let color = Math.floor(Math.random() * colors.length);

  return (
    <div>
      <Card bg={colors[color]} text={"black"} style={{ width: "18rem" }} className="my-3">
        <Card.Header>Replies</Card.Header>
        <Card.Body>
          <Card.Text>
            {" "}
            <b>ID:</b> {reply.question_id}
          </Card.Text>
          <Card.Text>
            <b>MyQuery:</b>
            {reply.query}
          </Card.Text>
          <Card.Text style={{ backgroundColor: "green" }}>
            {" "}
            <b>Reply: </b>
            {reply.reply}
          </Card.Text>
          <Card.Text>
            <b>Teacher's name: </b>
            {reply.teacher_name}
          </Card.Text>
          <Card.Text>
            <b>Position: </b>
            {reply.authority_position}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

Card.propTypes = {
  bgcolor: PropTypes.string,
};

export default CardComponent;
