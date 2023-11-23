import logo from './logo.svg';
import './App.css';
import StudentCreate from "./components/student/StudentCreate";
import 'react-toastify/dist/ReactToastify.css';
import StudentList from "./components/student/StudentList";
import StudentUpdate from "./components/student/StudentUpdate";
import {NotFound} from "./components/NotFound";
import {Routes, Route} from "react-router-dom"
import {ToastContainer} from "react-toastify";
import {useSelector} from "react-redux";

function App() {
  const students = useSelector(store => store.students);
  return (
  <>
    <p>Số lượng học sinh hiện có là {students.length}</p>
    <Routes>
      <Route path="/students" element={<StudentList/>}></Route>
      <Route path="/create" element={<StudentCreate/>}></Route>
      <Route path="/update/:id" element={<StudentUpdate/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
