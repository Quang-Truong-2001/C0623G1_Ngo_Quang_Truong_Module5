import axios from "axios";

export const getAll=async ()=>{
    try {
        let res=await axios.get("http://localhost:8080/list");
        return res.data;
    } catch (e){
        return undefined;
    }
}

export const addWork = async (nameWork)=>{
    try {
        await axios.post("http://localhost:8080/list",nameWork);
        return true;
    } catch (e){
        return false;
    }
}