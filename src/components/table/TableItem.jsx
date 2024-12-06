function TableItem(props) {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.studentName}</td>
      <td>{props.data.email}</td>
      <td>{props.data.rollNo}</td>
      <td>{props.data.course}</td>
      <td>{props.data.age}</td>

      <td className="action-buttons">
        <button
          className="btn btn-danger p-2 mx-2"
          onClick={() => props.onClickHandler(props.data.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-warning p-2 mx-2"
          onClick={() => props.onClickHandler(props.data.id)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

export default TableItem;
