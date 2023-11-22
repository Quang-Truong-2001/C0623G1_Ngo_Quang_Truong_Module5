import {useEffect, useState} from "react";
import * as listService from "../../services/ListService"
import {NavLink} from "react-router-dom";

function BookList(){
    const [listBook,setListBook]=useState([]);

    const getAllBook=async ()=>{
        if(listBook){
            let data= await listService.getAll();
            console.log(data)
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
                        <td>{index}</td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )
}
export default BookList;