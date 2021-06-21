import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
// import { v4 as uuid } from "uuid";

const StudentForm = () => {
  const [filterData, setFilterData] = useState("");
  console.log("Filtered data=", filterData);

  const [teacherData, setTeacherData] = useState({
    question_id: "",
    query: "",
    teacher_name: "",
    authority_position: "",
    reply: "",
  });

  useEffect(() => {
    setTeacherData({ ...teacherData, query: filterData });
  }, [filterData]);

  const [queries, setQueries] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/teacher/")
      .then((response) => {
        setQueries(...queries, response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(teacherData);
    axios
      .post("http://localhost:5000/teacher/add", teacherData)
      .then((res) => {
        console.log(res.data);
        Swal.fire("Success...", "Data has been submitted!", "success");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Oops...", "Something went wrong!", "error");
      });
  };
  console.log(teacherData);

  useEffect(() => {
    const queryfilter = () => {
      const filteredData = queries.filter((query) => {
        // return query.question_id === teacherData.question_id;
        if (query.question_id === teacherData.question_id) return query.query;
      });
      filteredData.map((e) => {
        setFilterData(e.query);
      });
      // console.log("object",filteredData,typeof(filteredData));
    };
    queryfilter();
  }, [teacherData]);

  return (
    <div className="p-2">
      <Form className="bg-primary p-3 rounded" onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="font-weight-bold">Question ID</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Question ID"
            value={teacherData.question_id}
            onChange={(e) =>
              setTeacherData({ ...teacherData, question_id: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold">Query</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            readOnly
            type="Text"
            placeholder="Will be updated automatically!!"
            value={teacherData.query}
            // onChange={(e) =>
            //   setTeacherData({ ...teacherData, query: e.target.value })
            // }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="font-weight-bold">Teacher's Name</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Teacher's Name"
            value={teacherData.teacher_name}
            onChange={(e) =>
              setTeacherData({ ...teacherData, teacher_name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="font-weight-bold">
            Authority Position
          </Form.Label>
          <Form.Control
            type="Text"
            placeholder="Authority Position"
            value={teacherData.authority_position}
            onChange={(e) =>
              setTeacherData({
                ...teacherData,
                authority_position: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reply</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="Text"
            placeholder="Write your reply"
            value={teacherData.reply}
            onChange={(e) =>
              setTeacherData({
                ...teacherData,
                reply: e.target.value,
              })
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
