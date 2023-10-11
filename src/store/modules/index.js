import { combineReducers } from "redux";
import login from "./login";
import page from "./page";

const rootReducer = combineReducers({ login, page });

export default rootReducer;
