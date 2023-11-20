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
        healthInsurance: "0",
        province: "",
        district: "",
        commune: "",
        apartmentNumber: "",
        phone: "",
        email: ""
    }
    const validateObject={
        name: Yup.string().required("Không được để trống"),
        idCard: Yup.string().required("Không được để trống")
            .matches(/^[0-9]{11}$/, "Số CCCD không hợp lệ"),
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
                <h1>Tờ khai y tế</h1>
                <Formik
                    initialValues={initValue}
                    onSubmit={(result) => {
                        console.log(result.gender)
                        alert("Thành công")
                    }}
                    validationSchema={Yup.object(validateObject)}
                >
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor="name" className='form-lable'>Họ tên</label>
                            <Field type="text" className="form-control" id="name" name='name'/>
                            <ErrorMessage name="name" component='span' className='text-danger' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="birthYear" className='form-lable'>Năm sinh</label>
                            <Field type="number" className="form-control" id="birthYear" name='birthYear'/>
                            <ErrorMessage name="birthYear" component='span' className='text-danger' />
                        </div>
                        <label className='form-lable'>Giới tính</label>
                        <div className='mb-3'>
                            <div className='form-check form-check-inline'>
                                <Field type="radio" className="form-check-input" id="male" name='gender' value='1'/>
                                <label htmlFor="male" className='form-lable'>Nam</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field type="radio" className="form-check-input" id="feMale" name='gender' value='0'/>
                                <label htmlFor="feMale" className='form-lable'>Nữ</label>
                            </div>
                        </div>

                        <label htmlFor="healthInsurance" className='form-lable'>Bảo hiểm y tế</label>
                        <div className='form-check'>
                            <Field type="checkbox" value='1' className="form-check-input" id="healthInsurance" name='healthInsurance'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="idCard" className='form-lable'>Số CCCD</label>
                            <Field type="text" className="form-control" id="idCard" name='idCard'/>
                            <ErrorMessage name="idCard" component='span' className='text-danger' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="nationality" className='form-lable'>Quốc tịch</label>
                            <Field type="text" className="form-control" id="nationality" name='nationality'/>
                            <ErrorMessage name="nationality" component='span' className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="workingParts" className='form-lable'>Bộ phận làm việc</label>
                            <Field type="text" className="form-control" id="workingParts" name='workingParts'/>
                            <ErrorMessage name="workingParts" component='span' className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="workingCompany" className='form-lable'>Công ty làm việc</label>
                            <Field type="text" className="form-control" id="workingCompany" name='workingCompany'/>
                            <ErrorMessage name="workingCompany" component='span' className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="province" className='form-lable'>Tỉnh</label>
                            <Field type="text" className="form-control" id="province" name='province'/>
                            <ErrorMessage name="province" component='span' className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="district" className='form-lable'>Quân/Huyện</label>
                            <Field type="text" className="form-control" id="district" name='district'/>
                            <ErrorMessage name="district" component='span' className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="commune" className='form-lable'>Thị trấn/xã</label>
                            <Field type="text" className="form-control" id="commune" name='commune'/>
                            <ErrorMessage name="commune" component='span' className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="apartmentNumber" className='form-lable'>Sô nhà</label>
                            <Field type="text" className="form-control" id="apartmentNumber" name='apartmentNumber'/>
                            <ErrorMessage name="apartmentNumber" component='span' className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="email" className='form-lable'>Email</label>
                            <Field type="text" className="form-control" id="email" name='email'/>
                            <ErrorMessage name="email" component='span' className='text-danger' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="phone" className='form-lable'>Số điện thoại</label>
                            <Field type="text" className="form-control" id="phone" name='phone'/>
                            <ErrorMessage name="phone" component='span' className='text-danger' />
                        </div>
                        <button type='submit' className='btn btn-primary'>Hoàn thành</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default MedicalDeclarationForm;