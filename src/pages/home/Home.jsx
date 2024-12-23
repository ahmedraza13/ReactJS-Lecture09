import { useState } from "react";
import Table from 'react-bootstrap/Table';
import Header from "../../components/Header";
import AddStudentForm from "../../components/AddStudentForm";
import TableItem from "../../components/TableItem";



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

  const onDeleteHandler = (id) => {
    let newData = data.filter((item, index) => {
        return (
          item.id !== id
        )
    })
    setData(newData)
   
  }

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
     {data.map((item, index) => {
      return (
          <TableItem data={item} key={index} onDeleteHandler={onDeleteHandler}/>
      )
     })}
      </Table>
     
    </div>
    </>
  );
}

export default Home;
