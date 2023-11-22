import {useEffect, useState} from "react";
import * as studentService from "../../services/StudentService"
import {NavLink} from "react-router-dom";

function StudentList(){
    const [students,setStudents]=useState([]);
    const [nameSearch,setNameSearch]=useState("")

    const getAllStudent=async ()=>{
        if(students){
            let data= await studentService.getAll()
            console.log(data)
            setStudents(data);
        }
    }

    useEffect(()=>{
        getAllStudent()
    },[]);

    if (!students){
        return null;
    }
    return(
        <>
            <NavLink to="/create">
                <button className="btn btn-promary">Thêm mới</button>
            </NavLink>
            <h1>Danh sách học sinh lớp</h1>
            <table>
                <thead>
                <tr>
                    <td>STT</td>
                    <td>Tên</td>
                    <td>Tuổi</td>
                    <td>Giới tính</td>
                    <td>Ngôn ngữ</td>
                </tr>
                </thead>
                <tbody>
                {students.map((item, index)=>(
                    <tr key={item.id}>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.languages}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )
}
export default StudentList;