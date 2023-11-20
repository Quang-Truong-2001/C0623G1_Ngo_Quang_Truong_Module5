import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function MedicalDeclarationForm2(){
    const initValue={
        answerOne: "",
        answerTwo: [],
        answerThree: [],
    }
    const validateObject={
        answerOne: Yup.string().required("Không được để trống"),
        answerTwo: Yup.string().required("Không được để trống"),
        answerThree: Yup.string().required("Không được để trống")
    }
    return(
        <>
            <div className='container'>
                <Formik
                    initialValues={initValue}
                    onSubmit={values => {
                        alert("Thành công")
                    }}
                    validationSchema={Yup.object(validateObject)}
                >
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor="answerOne" className='form-lable'>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia/vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</label>
                            <Field type="text" className="form-control" id="answerOne" name='answerOne'/>
                            <ErrorMessage name="answerOne" component='span' className='text-danger' />
                        </div>

                        <label className='form-lable'>Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu nào sau đây không?</label>
                        <div className='form-check'>
                            <Field type="checkbox" value='1' className="form-check-input" id="male" name='lg1'/>
                            <label htmlFor="lg1" className='form-lable'>Sốt</label>
                        </div>
                        <div className='form-check'>
                            <Field type="checkbox" value='2' className="form-check-input" id="male" name='lg1'/>
                            <label htmlFor="lg2" className='form-lable'>Ho</label>
                        </div>
                        <div className='form-check'>
                            <Field type="checkbox" value='3' className="form-check-input" id="male" name='lg1'/>
                            <label htmlFor="lg3" className='form-lable'>Khó thơ</label>
                        </div>
                        <div className='form-check'>
                            <Field type="checkbox" value='4' className="form-check-input" id="male" name='lg1'/>
                            <label htmlFor="lg4" className='form-lable'>Viêm phổi</label>
                        </div>
                        <div className='form-check'>
                            <Field type="checkbox" value='5' className="form-check-input" id="male" name='lg1'/>
                            <label htmlFor="lg5" className='form-lable'>Đau họng</label>
                        </div>
                        <div className='form-check'>
                            <Field type="checkbox" value='6' className="form-check-input" id="male" name='lg1'/>
                            <label htmlFor="lg6" className='form-lable'>Mệt mỏi</label>
                        </div>
                        <br/>
                        <label className='form-lable'>Trong vòng 14 ngày qua, Anh /Chị có tiếp súc với?</label>
                        <div className='form-check'>
                            <Field type="checkbox" value='1' className="form-check-input" id="male" name='lg2'/>
                            <label htmlFor="lg7" className='form-lable'>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                        </div>
                        <div className='form-check'>
                            <Field type="checkbox" value='2' className="form-check-input" id="male" name='lg2'/>
                            <label htmlFor="lg8" className='form-lable'>Người từ nước có bệnh COVID-19</label>
                        </div>
                        <div className='form-check'>
                            <Field type="checkbox" value='3' className="form-check-input" id="male" name='lg2'/>
                            <label htmlFor="lg9" className='form-lable'>Người có biều hiện (Sốt, ho, khó thờ, viêm phổi)</label>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
export default MedicalDeclarationForm2;