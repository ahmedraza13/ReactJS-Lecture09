import { useState } from "react";
import Table from 'react-bootstrap/Table';
import Header from "../../components/Header";
import AddStudentForm from "../../components/AddStudentForm";



function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      studentName: "Ahmed Raza",
      email: "ahmedfaisalakhawala@gmail.com",
      contactNo: "03142322336",
      rollNo: 97745,
      course: "Web Development",
    },
    {
      id: 2,
      studentName: "Ali Sohail",
      email: "alisohail11@gmail.com",
      contactNo: "03141234567",
      rollNo: 97746,
      course: "Python",
    },
    {
      id: 3,
      studentName: "Umair Siddiq",
      email: "umairsiddiq@gmail.com",
      contactNo: "03141234567",
      rollNo: 97747,
      course: "Graphic Designing",
    },
  ]);

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <AddStudentForm />
      </div>
      <div className="d-flex justify-content-center mt-5">
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ahmed Raza</td>
            <td>ahmedraza@gmail.com</td>
            <td>03142322336</td>
            <td>97745</td>
            <td>Web Development</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Fuzail</td>
            <td>fuzailraza@gmail.com</td>
            <td>03343037456</td>
            <td>97746</td>
            <td>Flutter Development</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Umair</td>
            <td>umairsiddiq@gmail.com</td>
            <td>03333104530</td>
            <td>97747</td>
            <td>Graphic Designiing</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </Table>
     
    </div>
    </>
  );
}

export default Home;
