import axios from "axios";

export const getAll = async () => {

    try {
        let res = await axios.get("http://localhost:8080/list");
        return res.data;
    } catch (e) {
        return undefined;
    }
};

export const saveBook = async (addBook) => {
    try {
        await axios.post("http://localhost:8080/list", addBook)
        return true;
    }catch (e) {
        return false;
    }
}
