import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from "yup"
function Test(){
    // const initValue={
    //     name: "",
    //     age: 0,
    //     gender: "",
    //     languages: [
    //     ]
    // }
    // const validateObject={
    //     name: Yup.string().required("Tên không được để trống")
    //         .min(16).required("")
    //
    // }
    // return(
    //     <>
    //         <div className='container'>
    //             <h1>Contact form</h1>
    //             <Formik
    //                 initialValues={initValue}
    //                 onSubmit={values => {
    //
    //                 }}
    //                 validationSchema={Yup.object(validateObject)}
    //             >
    //                 <Form>
    //                     <div className='mb-3'>
    //                         <label htmlFor="name" className='form-lable'>Name</label>
    //                         <Field type="text" className="form-control" id="name" name='name'/>
    //                         <ErrorMessage name="name" component='span' className='text-danger' />
    //                     </div>
    //                     <div className='mb-3'>
    //                         <label htmlFor="age" className='form-lable'>Age</label>
    //                         <Field type="text" className="form-control" id="age" name='age'/>
    //                         <ErrorMessage name="age" component='span' className='text-danger' />
    //                     </div>
    //                     <div className='mb-3'>
    //                         <div className='form-check form-check-inline'>
    //                             <Field type="radio" className="form-check-input" id="male" name='gender' value='1'/>
    //                             <label htmlFor="male" className='form-lable'>Male</label>
    //                         </div>
    //                         <div className='form-check form-check-inline'>
    //                             <Field type="radio" className="form-check-input" id="feMale" name='gender' value='0'/>
    //                             <label htmlFor="feMale" className='form-lable'>Female</label>
    //                         </div>
    //                     </div>
    //
    //                     <label htmlFor="language" className='form-lable'>Languages</label>
    //                     <div className='form-check'>
    //                         <Field type="checkbox" value='C#' className="form-check-input" id="male" name='lg1'/>
    //                         <label htmlFor="lg1" className='form-lable'>C#</label>
    //                     </div>
    //                     <div className='form-check'>
    //                         <Field type="checkbox" value='Java' className="form-check-input" id="male" name='lg2'/>
    //                         <label htmlFor="lg2" className='form-lable'>Java</label>
    //                     </div>
    //                     <div className='form-check'>
    //                         <Field type="checkbox" value='php' className="form-check-input" id="male" name='lg3'/>
    //                         <label htmlFor="lg3" className='form-lable'>Php</label>
    //                     </div>
    //                     <button type='submit' className='btn btn-primary'>Submit</button>
    //                 </Form>
    //             </Formik>
    //         </div>
    //     </>
    // )
}
export default Test;