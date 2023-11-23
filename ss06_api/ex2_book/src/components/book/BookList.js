import {useEffect, useState} from "react";
import * as listService from "../../services/ListService"
import {NavLink, Link} from "react-router-dom";
import {deleteBook} from "../../services/ListService";

function BookList(){
    const [listBook,setListBook]=useState([]);

    const getAllBook=async ()=>{
        if(listBook){
            let data= await listService.getAll();
            setListBook(data);
        }
    }

    useEffect(()=>{
        getAllBook()
    },[]);

    if (!listBook){
        return null;
    }
    return(
        <>
            <NavLink to="/create">
                <button className="btn btn-promary">Thêm mới</button>
            </NavLink>
            <h1>Danh sách sách</h1>
            <table>
                <thead>
                <tr>
                    <td>STT</td>
                    <td>Tiêu đề </td>
                    <td>Số lượng</td>

                </tr>
                </thead>
                <tbody>
                {listBook.map((item, index)=>(
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <Link className="btn btn-warning" to={`/update/${item.id}`}>Chỉnh sửa</Link>
                        </td>
                        <td>
                            <button  className="btn btn-danger" onClick={() => deleteBook(item)}>Xóa</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )
}
export default BookList;