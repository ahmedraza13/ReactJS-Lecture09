import { useState } from "react";
import Table from "react-bootstrap/Table";
import TableItem from "./TableItem";

function StudentTable() {
  const [data, setData] = useState([
    {
      studentName: "Umer",
      email: "umer@gmail.com",
      rollNo: "1234",
      course: "Web and App Development",
      age: 30,
    },
    {
      studentName: "Ali",
      email: "ali@gmail.com",
      rollNo: "1235",
      course: "Python Basic to Advance",
      age: 40,
    },
    {
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

  return (
    <div className="table-container">
      <Table striped bordered hover responsive className="student-table">
        <thead>
          <tr>
           
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
  );
}


export default StudentTable