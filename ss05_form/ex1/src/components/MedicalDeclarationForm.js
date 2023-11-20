import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function MedicalDeclarationForm(){
    const initValue={
        name: "",
        idCard: "",
        birthYear: "",
        gender: "",
        nationality: "",
        workingParts: "",
        workingCompany: "",
        healthInsurance: "",
        province: "",
        district: "",
        commune: "",
        apartmentNumber: "",
        phone: "",
        email: ""
    }
    const validateObject={
        name: Yup.string().required("Không được để trống"),
        idCard: Yup.string().required("Không được để trống"),
        birthYear: Yup.number().required("Không được để trống")
            .min(1900, "Năm sinh phải lớn hơn hoặc bằng năm 1900").max(2024,"Năm sinh phải nhỏ hơn hoặc bằng năm 2023")
        ,
        nationality: Yup.string().required("Không được để trống"),
        province: Yup.string().required("Không được để trống"),
        district: Yup.string().required("Không được để trống"),
        commune: Yup.string().required("Không được để trống"),
        apartmentNumber: Yup.string().required("Không được để trống"),
        phone: Yup.string().required("Không được để trống")
            .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không hợp lệ"),
        email: Yup.string().required("Không được để trống")
            .matches( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"Email không hợp lệ")
    }
    return(
        <>
            <div className='container'>
                <h1>Medical Declaration Form</h1>
                <Formik
                    initialValues={initValue}
                    onSubmit={(values) => {
                        alert("Thành công")
                    }}
                    validationSchema={Yup.object(validateObject)}
                >
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor="name" className='form-lable'>Name</label>
                            <Field type="text" className="form-control" id="name" name='name'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="birthYear" className='form-lable'>birthYear</label>
                            <Field type="number" className="form-control" id="birthYear" name='birthYear'/>
                        </div>
                        <label className='form-lable'>Gender</label>
                        <div className='mb-3'>
                            <div className='form-check form-check-inline'>
                                <Field type="radio" className="form-check-input" id="male" name='gender' value='1'/>
                                <label htmlFor="male" className='form-lable'>Male</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field type="radio" className="form-check-input" id="feMale" name='gender' value='0'/>
                                <label htmlFor="feMale" className='form-lable'>Female</label>
                            </div>
                        </div>

                        <label htmlFor="language" className='form-lable'>Health Insurance</label>
                        <div className='form-check'>
                            <Field type="checkbox" value='C#' className="form-check-input" id="male" name='lg1'/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="nationality" className='form-lable'>nationality</label>
                            <Field type="text" className="form-control" id="nationality" name='nationality'/>
                            <ErrorMessage name="nationality" component='span' className='text-danger' />
                        </div><div className='mb-3'>
                            <label htmlFor="workingParts" className='form-lable'>workingParts</label>
                            <Field type="text" className="form-control" id="workingParts" name='workingParts'/>
                            <ErrorMessage name="workingParts" component='span' className='text-danger' />
                        </div><div className='mb-3'>
                            <label htmlFor="workingCompany" className='form-lable'>workingCompany</label>
                            <Field type="text" className="form-control" id="workingCompany" name='workingCompany'/>
                            <ErrorMessage name="workingCompany" component='span' className='text-danger' />
                        </div><div className='mb-3'>
                            <label htmlFor="province" className='form-lable'>province</label>
                            <Field type="text" className="form-control" id="province" name='province'/>
                            <ErrorMessage name="province" component='span' className='text-danger' />
                        </div><div className='mb-3'>
                            <label htmlFor="district" className='form-lable'>district</label>
                            <Field type="text" className="form-control" id="district" name='district'/>
                            <ErrorMessage name="district" component='span' className='text-danger' />
                        </div><div className='mb-3'>
                            <label htmlFor="commune" className='form-lable'>commune</label>
                            <Field type="text" className="form-control" id="commune" name='commune'/>
                            <ErrorMessage name="commune" component='span' className='text-danger' />
                        </div><div className='mb-3'>
                            <label htmlFor="apartmentNumber" className='form-lable'>apartmentNumber</label>
                            <Field type="text" className="form-control" id="apartmentNumber" name='apartmentNumber'/>
                            <ErrorMessage name="apartmentNumber" component='span' className='text-danger' />
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
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default MedicalDeclarationForm;