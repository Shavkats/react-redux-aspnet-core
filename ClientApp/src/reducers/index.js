import {combineReducers} from "redux";
import courseReducers from "./courseReducers";

const rootReducer = combineReducers({courses: courseReducers});

export default rootReducer;

