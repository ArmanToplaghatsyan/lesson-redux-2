import { combineReducers } from "redux";
import { taskReduser } from "./task/reducer";

export default combineReducers({
    task: taskReduser
})