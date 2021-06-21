import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";

const StudentForm = () => {
  // let qnid = uuid();
  const [studentData, setStudentData] = useState({
    name: "",
    university: "",
    enrollmentNum: "",
    query: "",
    question_id: `${uuid()}`,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(studentData);
    axios
      .post("http://localhost:5000/student/add", studentData)
      .then((res) => {
        console.log(res.data);
        Swal.fire("Success...", "Data has been submitted!", "success");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Oops...", "Something went wrong!", "error");
      });
  };
  console.log(studentData);
  return (
    <div className="p-2">
      <Form className="bg-primary p-3 rounded" onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="font-weight-bold">Name</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Name"
            value={studentData.name}
            onChange={(e) =>
              setStudentData({ ...studentData, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="font-weight-bold">University</Form.Label>
          <Form.Control
            type="Text"
            placeholder="University"
            value={studentData.university}
            onChange={(e) =>
              setStudentData({ ...studentData, university: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="font-weight-bold">
            Enrollment Number
          </Form.Label>
          <Form.Control
            type="Number"
            placeholder="Enrollment Number"
            value={studentData.enrollmentNum}
            onChange={(e) =>
              setStudentData({ ...studentData, enrollmentNum: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold"> Your Query</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your query here"
            value={studentData.query}
            onChange={(e) =>
              setStudentData({ ...studentData, query: e.target.value })
            }
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StudentForm;
