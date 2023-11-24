import axios from "axios";

export const getTypeProductList = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/typeProduct`)
        console.log("---------------")
        console.log(result)
        return result.data
    } catch (e) {

        console.log(e)
    }


}