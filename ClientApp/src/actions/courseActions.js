import axios from "axios";

export const GET_COURSES_REQUEST = "GET_COURSES_REQUEST";
export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS";
export const GET_COURSES_ERROR = "GET_COURSES_ERROR";

const getCoursesSuccess = payload => ({
    type: GET_COURSES_SUCCESS,
    payload
});

const getCoursesError = payload => ({
    type: GET_COURSES_ERROR,
    payload
});

export const getCourses = () => dispatch => {
    dispatch({type: GET_COURSES_REQUEST});
    return axios.get("api/Courses/GetCourses")
        .then(res => {
            const response = res.data;
            dispatch(getCoursesSuccess(response))
        })
        .catch(error => {
            dispatch(getCoursesError("Something went wrong!"));
            return Promise.reject({});
        });
}