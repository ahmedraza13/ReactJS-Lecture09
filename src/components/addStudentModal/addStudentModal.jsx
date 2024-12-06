import { useState } from "react";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddStudentModal(props) {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState('')

  let schema = yup.object().shape({
    studentName: yup.string().max(10).min(3).required('Student name is required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    rollNo: yup.number().required().typeError("Must be a number"),
    course: yup.string().required('Course is required'),
    age: yup.number().required('Age is required'),
  }); 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addStudent = async () => {
    handleClose();
    let data = {
      studentName: studentName,
      email: email,
      rollNo: rollNo,
      course: course,
      age: age,
    };

    try {
      let result = await schema.validate(data);
      console.log(result);
      props.onAddHandler(data);
    } catch (error) {
      console.log("error", error.toString());
      setError(error.toString())
      alert(error
     )
    }
  };

  return (
    <>
      <button
        className="btn btn-success add-student-btn mt-5"
        onClick={handleShow}
      >
        Add Student
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formStudentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student name"
                onChange={(e) => setStudentName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStudentEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStudentRoll">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter roll number"
                onChange={(e) => setRollNo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStudentClass">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter class"
                onChange={(e) => setCourse(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStudentAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addStudent}>
            Add Student
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddStudentModal;
