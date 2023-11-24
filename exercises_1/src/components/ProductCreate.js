import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import {addProduct} from "../service/ProductService";
import {toast} from "react-toastify";
import {getTypeProductList} from "../service/TypeProductService";

export function ProductCreate() {
    const navigate = useNavigate();
    const [typeProduct, setTypeProduct] = useState([]);

    const loadTypeProduct = async () => {
        const data = await getTypeProductList();
        setTypeProduct(data);
    }
    useEffect(() => {
        loadTypeProduct()
    }, [])
    const addNewProduct = async (data) => {
        const rs = {...data, typeProduct: JSON.parse(data.typeProduct)}
        const result = await addProduct(rs)
        console.log(result)
        if (result.status === 201) {
            navigate("/productList")
            alert("ok")
            toast.success("Add New Success")
        } else {
            toast("Add New Errors")
        }
    }

    const initValue = {
        idProduct: "",
        nameProduct: "",
        unit: "",
        price: "",
        typeProduct: JSON.stringify({
                id: "1",
                name: "Quả"
            }
        ),
        harvestDay: ""
    }

    const validateObject = {
        idProduct: Yup.string()
            .required()
            .matches(/^MHH-[0-9]{4}$/, "IdProduct must be correct format (ex: MHH-xxxx)"),
        nameProduct: Yup.string()
            .required(),
        unit: Yup.string()
            .required(),
        price: Yup.number()
            .required()
            .min(1000, "Price must be bigger 1000"),
        typeProduct: Yup.string()
            .required(),
        harvestDay: Yup.date()
            .required()
            .min(new Date(), "Harvest Day must be bigger currentTime"),
    }
    return (
        <>
            <h1>Create Product</h1>
            <Formik initialValues={initValue}
                    validationSchema={Yup.object(validateObject)}
                    onSubmit={(values) => {
                        addNewProduct(values)
                    }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <Form>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="idProduct">Mã Hàng Hóa</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="idProduct" name="idProduct" type="text"/>
                                    <ErrorMessage name="idProduct" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="nameProduct">Tên Hàng Hóa</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="nameProduct" name="nameProduct"
                                           type="text"/>
                                    <ErrorMessage name="nameProduct" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="unit">Đơn Vị Tính</label>
                                    </h6>
                                    <Field as="select" className="form-control mt-2" id="unit" name="unit">
                                        <option value={""}>-Option-</option>
                                        <option value={"KG"}>KG</option>
                                        <option value={"Bó"}>Bó</option>
                                        <option value={"Túi"}>Túi</option>
                                    </Field>
                                    <ErrorMessage name="unit" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="price">Giá Hàng Hóa</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="price" name="price" type="number"/>
                                    <ErrorMessage name="price" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="customerType">Kiểu Hàng Hóa</label>
                                    </h6>
                                    <Field as="select" className="form-control mt-2" id="customerType"
                                           name="customerType">
                                        {typeProduct.map((type) => (
                                            <option key={type.id}
                                                    value={JSON.stringify(type)}>{type.name}</option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="harvestDay">Ngày Thu Hoạch</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="harvestDay" name="harvestDay" type="date"/>
                                    <ErrorMessage name="harvestDay" className="text-danger" component="span"/>
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                    <div>
                                        <Link to={"/productList"}>
                                            <button className="btn btn-warning">Cancel</button>
                                        </Link>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}