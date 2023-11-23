import axios from "axios";

export const getAll=async ()=>{
    try {
        let res=await axios.get("http://localhost:8080/list");
        return res.data;
    } catch (e){
        return undefined;
    }
}
export const removeById=async (id)=>{
    try {
        await axios.delete(`http://localhost:8080/list/${id}`);
        return true
    } catch (e){
        return false;
    }
}