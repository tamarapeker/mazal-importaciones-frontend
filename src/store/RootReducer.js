import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducer";

const RootReducer = combineReducers({
    category: categoryReducer
})

export default RootReducer;