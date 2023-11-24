import axios from "axios";

export const getProductList = async (nameSearch, typeProduct) => {
    if (typeProduct === "") {
        try {
            const result = await axios.get(`http://localhost:8080/products?nameProduct_like=${nameSearch}`);
            return result.data
        } catch (e) {
            console.log(e)
        }
    } else {
        try {
            const result = await axios.get(`http://localhost:8080/products?nameProduct_like=${nameSearch}&typeProduct.id_like=${typeProduct}`)
            return result.data
        } catch (e) {
            console.log(e)
        }
    }


}
export const addProduct = async (product) => {
    try {
        return await axios.post(`http://localhost:8080/products`, product)
    } catch (e) {
        console.log(e)
    }
}
export const removeProduct = async (id) => {
    try {
        return await axios.delete(`http://localhost:8080/products/${id}`,)
    } catch (e) {
        console.log(e)
    }

}