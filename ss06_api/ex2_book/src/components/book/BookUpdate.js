import {Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as listService from "../../services/ListService"
// import {logDOM} from "@testing-library/react";

function BookUpdate() {
    const navigate=useNavigate();
    let param = useParams();
    let idBook = param.id;
    // const {id} = useParams();
    const [book, setBook] = useState(null)


    useEffect(() => {
        findBookById();
    }, []);

    const findBookById = async () => {
        let data = await listService.findBookById(idBook);
        console.log(data)
        setBook(data);
    }

    const updateBook = async (values) => {
        let isSuccess = await listService.updateBook(values,idBook);
        if(isSuccess) {
            navigate("/list")
        }
    }
    if (!book){
        return null;
    }
    return (
        <>
            <div className='container'>
                <h1>Update Book</h1>
                <Formik
                    initialValues={{...book}}
                    onSubmit={(values) => {
                        updateBook(values)
                    }}
                >
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>Title</label>
                            <Field type="text" className='form-control' id="title" name="title"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='quantity' className='form-label'>Quantity</label>
                            <Field type='number' className='form-control' id="quantity" name="quantity"/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default BookUpdate;
