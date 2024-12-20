import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaUserPlus, FaSave, FaTimes } from "react-icons/fa"; // Importing icons for the buttons

function AddStudentForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="add-student-button"
      >
        <FaUserPlus className="me-2" /> Add Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="studentName" className="mb-3">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Student Name"
                name="name"
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
              />
            </Form.Group>

            <Form.Group controlId="contact" className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Contact Number"
                name="contact"
              />
            </Form.Group>

            <Form.Group controlId="rollNo" className="mb-3">
              <Form.Label>Roll No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Roll Number"
                name="rollNo"
              />
            </Form.Group>

            <Form.Group controlId="course" className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Select name="course">
                <option value="">Select a Course</option>
                <option value="math">Web and Mobile App Development</option>
                <option value="science">Flutter Development</option>
                <option value="history">Python</option>
                <option value="english">Graphic Designing</option>
                <option value="art">Video Animation</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="close">
            <FaTimes className="me-2" /> Close
          </Button>
          <Button variant="primary" className="save">
            <FaSave className="me-2" /> Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddStudentForm;
