import {combineReducers} from "redux";
import usersReducer from './usersReducer.js';

const rootReducers = combineReducers({
    users: usersReducer,
})

export default rootReducers;