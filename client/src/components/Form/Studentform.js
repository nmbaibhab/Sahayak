import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const StudentForm = () => {
  return (
    <div className="p-2">
      <Form className="bg-primary p-3 rounded">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label  className="font-weight-bold">Name</Form.Label>
          <Form.Control type="Text" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="font-weight-bold">University</Form.Label>
          <Form.Control type="Text" placeholder="University" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="font-weight-bold">Enrollment Number</Form.Label>
          <Form.Control type="Text" placeholder="Enrollment Number" />
        </Form.Group>
        
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold"> Your Query</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Write your query here"/>
        </Form.Group>
        <div className="text-center">
        <Button variant="success">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default StudentForm;
