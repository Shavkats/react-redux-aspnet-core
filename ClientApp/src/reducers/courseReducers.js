import {
    GET_COURSES_REQUEST,
    GET_COURSES_SUCCESS,
    GET_COURSES_ERROR
} from "../actions/courseActions";

const INITIAL_STATE = {
    loading: false,
    hasError: false,
    error: null,
    data: []
}

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_COURSES_REQUEST:
            return{
                ...state,
                loading: true
            };
        case GET_COURSES_SUCCESS:
            return{
                ...state,
                loading: false,
                hasError: false,
                data: action.payload
            };
        case GET_COURSES_ERROR:
            return{
                ...state,
                loading: false,
                hasError: true,
                error: action.payload
            };
        default:
            return state;
    }
}