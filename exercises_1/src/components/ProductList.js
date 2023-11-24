import React, {useEffect, useState} from "react";
import {getProductList} from "../service/ProductService";
import Table from 'react-bootstrap/Table';
import {getTypeProductList} from "../service/TypeProductService";
import {Link} from "react-router-dom";
import {ProductDelete} from "./ProductDelete";

export function ProductList() {
    const [product, setProduct] = useState([]);
    const [typeProduct, setTypeProduct] = useState([]);
    const [nameSearch, setNameSearch] = useState("");
    const [typeSearch, setTypeSearch] = useState("");
    const [modalStatus, setModalStatus] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();


    const getProduct = async () => {
        const data = await getProductList(nameSearch, typeSearch)
        setProduct(data);
    }
    const getTypeProduct = async () => {
        const rs = await getTypeProductList()
        setTypeProduct(rs);
    }

    useEffect(() => {
        getProduct()
        getTypeProduct()
    }, [nameSearch, typeSearch])

    const getSearch = () => {
        const nameSearch = document.getElementById("nameSearch").value
        const typeSearch = document.getElementById("typeSearch").value
        setNameSearch(nameSearch)
        setTypeSearch(typeSearch)
    }
    const handModal = (c) => {
        setModalStatus(true);
        setSelectedProduct(c);
    }
    const closeModal = () => {
        setModalStatus(false);
        getProduct();
    }


    return (
        product && (
            <>
                <div className="container">
                    <h1>Product List</h1>
                    <div className="container" style={{display: "flex"}}>
                        <Link className="btn btn-primary" to="/products/create">ADD</Link>
                        <input type="text" placeholder="Search Name" id="nameSearch" className="form-control"
                               style={{width: "40%", marginLeft: "60%"}}/>
                        <select id="typeSearch" className="form-select" style={{width: "20%"}}>
                            <option value="">Select</option>
                            {typeProduct.map((type) => (
                                <option key={type.id} value={type.id}>{type.name}</option>
                            ))}
                        </select>
                        <div>
                            <button type="submit" className="btn btn-primary" onClick={() => getSearch()}>
                                <i className="fas fa-search"/>
                            </button>
                        </div>
                    </div>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã Hàng Hóa</th>
                            <th>Tên Hàng Hóa</th>
                            <th>Đơn Vị Tính</th>
                            <th>Giá</th>
                            <th>Loại Hàng Hóa</th>
                            <th>Ngày Thu Hoạch</th>
                            <th>Chỉnh Sửa</th>
                            <th>Xóa</th>
                        </tr>
                        </thead>
                        <tbody>
                        {product.length !== 0 ?
                            product.map((pro, index) => (
                                <tr key={pro.id}>
                                    <td>{index + 1}</td>
                                    <td>{pro.idProduct}</td>
                                    <td>{pro.nameProduct}</td>
                                    <td>{pro.unit}</td>
                                    <td>{pro.price}</td>
                                    <td>{pro.typeProduct.name}</td>
                                    <td>{pro.harvestDay}</td>
                                    <td>
                                        <button className="btn btn-primary">Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>handModal(pro)}>Delete</button>
                                    </td>
                                </tr>
                            )) : (
                                <td><b>No Data</b></td>
                            )}
                        </tbody>
                    </Table>
                </div>
                <ProductDelete
                    isModalShow={modalStatus}
                    selectedProduct={selectedProduct}
                    closeModal={closeModal}
                >
                </ProductDelete>
            </>
        )
    )
}
export default ProductList;