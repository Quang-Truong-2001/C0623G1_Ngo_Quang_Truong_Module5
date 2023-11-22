import axios from "axios";

export const getAll = async () => {

    try {
        let res = await axios.get("http://localhost:8080/students");
        return res.data;
    } catch (e) {
        return undefined;
    }
};

export const saveStudent = async (student) => {
    try {
        await axios.post("http://localhost:8080/students", student)
        return true;
    }catch (e) {
        return false;
    }
}
