import { combineReducers } from "redux";
import {categoryReducer,subcategoryReducer,categoryByIdReducer,subcatForCatReducer,subcategoryByIdReducer} from "./category/categoryReducer";
import {productsReducer, productsForSubcatReducer, productByIdReducer} from './product/productReducer'

const RootReducer = combineReducers({
    category: categoryReducer,
    subcategory: subcategoryReducer,
    categoryById: categoryByIdReducer,
    subcatForCat: subcatForCatReducer,
    subcategoryById: subcategoryByIdReducer,
    products: productsReducer,
    productsForSubcat: productsForSubcatReducer,
    productById: productByIdReducer,
})

export default RootReducer;