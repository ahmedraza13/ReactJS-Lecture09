import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaUserPlus, FaSave, FaTimes } from "react-icons/fa"; 
import * as yup from "yup";
function AddStudentForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState()
  const [rollNo, setRollNo] = useState()
  const [course, setCourse] = useState("")

  let schema = yup.object().shape({
    name: yup.string().max(10, "Name must not exceed 10 characters").min(3, "Name must be at least 3 characters").required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    contact: yup.string().matches(/^\d{11}$/, "Contact must be exactly 11 digits").required("Contact is required"),
    rollNo: yup.string().matches(/^\d{5}$/, "Roll number must be exactly 5 digits").required("Roll number is required"),
    course: yup.string().required("Course is required")
  });

  const handleSubmit = async () => {
    let data = {
      name,
      email,
      contact,
      rollNo,
      course
    }

  

    try {
      let result = await schema.validate(data)
      console.log("schema result", result)
      console.log("Schema Matched")
    }
    
    catch(error) {
      console.log("error", error)
    }
  }

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
                onChange={(e) => setName(e.target.value)}
              
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="contact" className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Contact Number"
                name="contact"
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="rollNo" className="mb-3">
              <Form.Label>Roll No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Roll Number"
                name="rollNo"
                onChange={(e) => setRollNo(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="course" className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Select name="course" onChange={(e) => setCourse(e.target.value)}>
                <option value="">Select a Course</option>
                <option value="Web and Mobile App Development">Web and Mobile App Development</option>
                <option value="Flutter Development">Flutter Development</option>
                <option value="Python">Python</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Video Animation">Video Animation</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="close">
            <FaTimes className="me-2" /> Close
          </Button>
          <Button variant="primary" className="save" onClick={handleSubmit}>
            <FaSave className="me-2" /> Add Course
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddStudentForm;
