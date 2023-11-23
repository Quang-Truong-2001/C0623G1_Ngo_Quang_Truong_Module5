import axios from "axios";

export const getAll = async () => {

    try {
        let res = await axios.get("http://localhost:8080/list");
        return res.data;
    } catch (e) {
        return undefined;
    }
};

export const saveBook = async (book) => {
    try {
        await axios.post("http://localhost:8080/list", book)
        return true;
    }catch (e) {
        return false;
    }
}

export const deleteBook = async (book) =>{
    try {
        await axios.delete(`http://localhost:8080/list/${book.id}`);
        return true;
    } catch (e) {
        return false;
    }
}
export const findBookById = async (idBook) =>{
    try {
        let res=await axios.get(`http://localhost:8080/list/${idBook}`);
        return res.data;
    } catch (e) {
        return undefined;
    }
}
export const updateBook = async (book) => {
    try {
        await axios.patch(`http://localhost:8080/list/${book.id}`, book)
        return true;
    }catch (e) {
        return false;
    }
}
