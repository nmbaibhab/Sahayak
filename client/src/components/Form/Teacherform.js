import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TeacherForm = () => {

  return (
    <div>
      <div className="p-2">
        <Form className="bg-primary p-3 rounded">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="font-weight-bold">
              Enrollment Number
            </Form.Label>
            <Form.Control type="Text" placeholder="Enrollment Number" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="font-weight-bold"> Reply</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your reply here"
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="success">Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TeacherForm;
