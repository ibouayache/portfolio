import {combineReducers} from "redux";
import testReducer from "./test";
import messageReducer from "./message";

const rootReducer = combineReducers({
    testReducer,
    messageReducer,
});
export default rootReducer;
