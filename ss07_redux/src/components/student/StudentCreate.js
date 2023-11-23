import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as studentService from "../../services/StudentService"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createNewStudent} from "../../redux/middleware/StudentMiddleware";

function StudentCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initValue = {
        name: "",
        age: 0,
        gender: "",
        languages: []
    }
    const validateObject = {
        name: Yup.string()
            .required("Tên không được để trống")
    }

    const createStudent = async (values) => {
        values.gender = +values.gender;

        dispatch(createNewStudent(values));
        toast.success("Thêm mới thành công")
        navigate("/students")

    }

    return (
        <>
            <div className='container'>
                <h1>Create Student</h1>
                <Formik
                    initialValues={initValue}
                    onSubmit={(values) => {
                        createStudent(values);
                    }}
                    validationSchema={Yup.object(validateObject)}
                >

                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Name</label>
                            <Field type='text' className='form-control' id='studentName' name="name"/>
                            <ErrorMessage name="name" component="span" className="err-mess"/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentAge' className='form-label'>Age</label>
                            <Field type='number' className='form-control' id='studentAge' name="age"/>
                        </div>
                        <div className='mb-3'>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">FeMale</label>
                            </div>
                        </div>

                        <label htmlFor='studentAge' className='form-label'>Languages</label>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="C#" name="languages"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                C#
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="JAVA" name="languages" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                JAVA
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="ReactJS" name="languages"
                                   id="cb2"/>
                            <label className="form-check-label" htmlFor="cb2">
                                ReactJS
                            </label>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default StudentCreate;
