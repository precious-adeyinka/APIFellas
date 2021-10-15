import { combineReducers } from "redux";
import lessonsReducer from "./lessonsReducer";

const rootReducer = combineReducers({ lessons: lessonsReducer });

export default rootReducer;
