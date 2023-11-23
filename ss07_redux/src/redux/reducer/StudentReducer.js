import {ADD_NEW_STUDENT, GET_ALL_STUDENT, REMOVE_STUDENT} from "../constant";

const studentReducer = (students = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_STUDENT:
            return payload;
        case ADD_NEW_STUDENT:
            return [...students, payload]
        case REMOVE_STUDENT:
            let temp = [...students];
            temp = temp.filter((value) => value.id !== payload);
            return temp;
        default:
            return students;
    }
}
export default studentReducer;
