import Header from './components/header/Header';
import AddStudentModal from './components/addStudentModal/addStudentModal';
import StudentTable from './components/table/Table';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className='d-flex justify-content-center'>
      <AddStudentModal/>
      </div>
      <StudentTable/>
    </>
  );
}

export default App;
