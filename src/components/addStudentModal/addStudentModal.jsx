import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddStudentModal() {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-success add-student-btn mt-5" onClick={handleShow}>Add Student</button>

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
              <Form.Label>Class</Form.Label>
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddStudentModal;
