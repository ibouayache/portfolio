import {combineReducers} from "redux";
import testReducer from "./test";
import messageReducer from "./message";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    testReducer,
    messageReducer,
    form: formReducer
});
export default rootReducer;
