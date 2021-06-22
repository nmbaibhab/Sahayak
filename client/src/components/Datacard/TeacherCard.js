import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Files, Check } from "react-bootstrap-icons";

const CardComponent = ({ query }) => {
  // console.log(query);
  const colors = ["danger", "warning", "primary", "success", "info"];
  let color = Math.floor(Math.random() * colors.length);

  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div>
      <Card
        className="my-3"
        bg={colors[color]}
        text={"black"}
        style={{ width: "18rem" }}
      >
        <Card.Header>
          <b>Student Query</b>
        </Card.Header>
        <Card.Header style={{ backgroundColor: "yellow" }}>
          {" "}
          <b>ID: </b> {query.question_id}
          <CopyToClipboard
            className=" d-flex justify-content-end"
            text={query.question_id}
            onCopy={onCopyText}
          >
            <span>
              {isCopied ? (
                <>
                  ID copied <Check size={30} />
                </>
              ) : (
                <Files size={20} />
              )}
            </span>
          </CopyToClipboard>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <b>Name: </b> {query.name}
          </Card.Text>
          <Card.Text>
            {" "}
            <b>University: </b> {query.university}
          </Card.Text>
          <Card.Text>
            {" "}
            <b>Enrollment Num: </b> {query.enrollmentNum}
          </Card.Text>
          <Card.Text>
            <b>Query: </b> {query.query}
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
