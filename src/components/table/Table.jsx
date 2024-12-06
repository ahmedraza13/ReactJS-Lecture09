import { useState } from "react";

import AddStudentModal from "../addStudentModal/addStudentModal";
import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";

function StudentTable() {
  const [data, setData] = useState([
    {
      id: 1,
      studentName: "Umer",
      email: "umer@gmail.com",
      rollNo: "1234",
      course: "Web and App Development",
      age: 30,
    },
    {
      id: 2,
      studentName: "Ali",
      email: "ali@gmail.com",
      rollNo: "1235",
      course: "Python Basic to Advance",
      age: 40,
    },
    {
      id: 3,
      studentName: "Ahmed",
      email: "ahmed@gmail.com",
      rollNo: "1236",
      course: "Cloud Computing",
      age: 50,
    },
  ]);

  const onClickHandler = (id) => {
    let newData = data.filter((item) => item.id != id);
    setData(newData);
  };

  const onAddHandler = (student) => {
    console.log("student in home", student);
    setData([
      ...data,
      {
        id: data.length + 1,
        studentName: student.studentName,
        email: student.email,
        rollNo: student.rollNo,
        course: student.course,
        age: student.age,
      },
    ]);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <AddStudentModal onAddHandler={onAddHandler} />
      </div>
      <div className="table-container">
        <Table striped bordered hover responsive className="student-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Roll No</th>
              <th>Course</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <TableItem
                  data={item}
                  onClickHandler={onClickHandler}
                  key={index}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default StudentTable;
