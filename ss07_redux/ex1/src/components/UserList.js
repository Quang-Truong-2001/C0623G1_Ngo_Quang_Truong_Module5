import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import store from "../redux/Store";
import {getAllUser, removeUserMiddle} from "../redux/middleware/UserMiddleware";
import {removeById} from "../services/UserService";
import {toast} from "react-toastify";

function UserList(){
   const users=useSelector(store=>store.users);
   const [userDelete, setUserDelete]=useState({});
   const dispatch=useDispatch();

   useEffect(()=>{
       dispatch(getAllUser())
   },[])

    const removeUser=()=>{
        console.log()
       dispatch(removeUserMiddle(userDelete.id))
        toast.success("Xóa thành công")
    }
    if(!users){
        return null;
    }
    return(
        <>
            <div className="container">
                <h1>User List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((item, index)=>(
                        <tr key={item.id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.website}</td>
                            <td>
                                <div>
                                    <button onClick={()=>setUserDelete(item)} type="button" className="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                        Xóa
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>



                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Bạn có chắc chắn muốn xoa {userDelete.name} không?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={removeUser} type="button" class="btn btn-primary" data-bs-dismiss="modal">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserList;