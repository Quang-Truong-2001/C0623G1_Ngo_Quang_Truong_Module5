import logo from './logo.svg';
import './App.css';
import {Route, Routes, Router} from "react-router-dom";
import StudentList from "./components/student/StudentList";
import StudentCreate from "./components/student/StudentCreate";
import StudentUpdate from "./components/student/StudentUpdate";
import {NotFound} from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/students" element={<StudentList/>}></Route>
        <Route path="/create" element={<StudentCreate/>}></Route>
        <Route path="/update/:id" element={<StudentUpdate/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
