import {Formik, Form, Field, ErrorMessage} from "formik";
import {toast} from "react-toastify";
import * as listService from "../../services/ListService"
import {useNavigate} from "react-router-dom";



function BookCreate() {
    const navigate=useNavigate();
    const initValue={
        title:"",
        quantity: 0
    }

    const createBook = async (values) => {
        let isSuccess = await listService.saveBook(values);
        if(isSuccess) {
            navigate("/list")
        }

    }

    return (
        <>
            <div className='container'>
                <h1>Create Student</h1>
                <Formik
                    initialValues={initValue}
                    onSubmit={(values) => {
                        createBook(values);
                    }}
                >

                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>Title</label>
                            <Field type='text' className='form-control' id='title' name="title"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='quantity' className='form-label'>Age</label>
                            <Field type='number' className='form-control' id='quantity' name="quantity"/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default BookCreate;
