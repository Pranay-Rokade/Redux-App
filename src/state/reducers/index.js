import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const rootReducer = combineReducers({
    amount: amountReducer,
});

export default rootReducer;