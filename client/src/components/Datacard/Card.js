import React from "react";
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
// import Col from "react-bootstrap/Col";
const CardComponent = ({bgcolor}) => {
  return (
    <div>
        
      <Card
        bg={bgcolor === null ? "dark" : bgcolor}
        text={bgcolor !== null ? "dark" : "white"}
        style={{ width: "14rem" }}
        className=" p-2 "
      >              
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>{bgcolor} Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    
    </div>
  );
};

Card.propTypes = {
    bgcolor: PropTypes.string,
  }
  


export default CardComponent;
