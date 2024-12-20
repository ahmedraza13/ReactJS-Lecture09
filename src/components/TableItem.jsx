import Table from "react-bootstrap/Table";

function StudentTable(props) {
  return (
    <tbody>
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.studentName}</td>
      <td>{props.data.email}</td>
      <td>{props.data.contactNo}</td>
      <td>{props.data.rollNo}</td>
      <td>{props.data.course}</td>
      <td>Edit</td>
    </tr>
    </tbody>
  );
}

export default StudentTable;
