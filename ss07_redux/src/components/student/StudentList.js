import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import * as studentService from "../../services/StudentService"
import {useDispatch, useSelector} from "react-redux";
import {getAllStudent, removeStudentMiddle} from "../../redux/middleware/StudentMiddleware";
import {toast} from "react-toastify";

function StudentList() {
    const students = useSelector(store => store.students)
    const [nameSearch, setNameSearch] = useState("");
    const dispatch = useDispatch();
    const [studentDelete, setStudentDelete] = useState({});

    useEffect(() => {
        //call API
        dispatch(getAllStudent());


    }, [nameSearch]);

    const removeStudent = () => {
        dispatch(removeStudentMiddle(studentDelete.id))
        toast.success("Xóa thành công");
    }
    if (!students) {
        return null;
    }

    return (

        <>
            <input value={nameSearch} onChange={(evt) => setNameSearch(evt.target.value)}/>
            <NavLink to="/create">
                <button className="btn btn-promary">Thêm mới</button>
            </NavLink>
            <h1>Danh sách học sinh lớp </h1>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Ngôn ngữ</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {students.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.languages}</td>
                        <td>
                            <button onClick={() => setStudentDelete(item)} type="button" class="btn btn-danger"
                                    data-bs-toggle="modal" data-bs-target="#deleteModal">
                                Delete
                            </button>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Xóa học sinh</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc muốn xóa {studentDelete.name} không?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={removeStudent} data-bs-dismiss="modal" className="btn btn-danger">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default StudentList;
