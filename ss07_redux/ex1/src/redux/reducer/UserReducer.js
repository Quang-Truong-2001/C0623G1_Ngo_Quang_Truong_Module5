import {DELETE_USER, GET_ALL_USER} from "../constant";

const userReducer=(users=[], action )=>{
    const {type, payload}=action;
    switch (type){
        case GET_ALL_USER:
            return payload;
        case DELETE_USER:
            let temp=[...users];
            temp=temp.filter((value)=>value.id!==payload);
            return temp;
        default:
            return users;
    }
}
export default userReducer;