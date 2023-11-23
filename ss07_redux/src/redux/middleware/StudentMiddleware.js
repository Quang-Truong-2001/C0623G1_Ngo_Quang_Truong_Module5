import * as studentService from "../../services/StudentService"
import {ADD_NEW_STUDENT, GET_ALL_STUDENT, REMOVE_STUDENT} from "../constant";

export const getAllStudent = () => async (dispatch) => {
    const res = await studentService.getAll();
    dispatch({
        type: GET_ALL_STUDENT,
        payload: res
    })
}

export const createNewStudent = (value) => async (dispatch) => {
    await studentService.saveStudent(value);
    dispatch({
        type: ADD_NEW_STUDENT,
        payload: value
    })
}

export const removeStudentMiddle = (id) => async (dispatch) => {
    await studentService.removeById(id);
    dispatch({
        type: REMOVE_STUDENT,
        payload: id
    })
}
