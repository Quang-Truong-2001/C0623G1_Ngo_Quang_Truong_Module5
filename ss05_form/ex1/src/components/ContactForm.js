import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

function ContactForm(){
    const initValue={
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const validateObject={
        name: Yup.string().required("Không được để trống")
        ,
        email: Yup.string().required("Không được để trống")
            .matches( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"Email không hợp lệ")
        ,
        phone: Yup.string().required("Không được để trống")
            .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ")

    }
    return(
        <>
            <div className='container'>
                <h1>Contact form</h1>
                <Formik
                    initialValues={initValue}
                    onSubmit={() => {
                        alert("Thêm mới thành công")
                    }}
                    validationSchema={Yup.object(validateObject)}
                >
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor="name" className='form-lable'>Name</label>
                            <Field type="text" className="form-control" id="name" name='name'/>
                            <ErrorMessage name="name" component='span' className='text-danger' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='form-lable'>Email</label>
                            <Field type="text" className="form-control" id="email" name='email'/>
                            <ErrorMessage name="email" component='span' className='text-danger' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="phone" className='form-lable'>Phone</label>
                            <Field type="text" className="form-control" id="phone" name='phone'/>
                            <ErrorMessage name="phone" component='span' className='text-danger' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="message" className='form-lable'>Message</label>
                            <Field type="text" className="form-control" id="message" name='message'/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </>)
}
export default ContactForm;
