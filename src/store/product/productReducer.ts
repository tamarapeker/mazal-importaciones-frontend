import {GET_PRODUCTS_FAIL, GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FOR_SUBCAT_FAIL,GET_PRODUCTS_FOR_SUBCAT_LOADING,GET_PRODUCTS_FOR_SUBCAT_SUCCESS,
    GET_PRODUCT_ID_FAIL,GET_PRODUCT_ID_LOADING,GET_PRODUCT_ID_SUCCESS} from './productActionsType'

const defaultState = {
    loading:false
}

export const productsReducer = (state = defaultState,action:any ) =>{
    switch (action.type) {
        case GET_PRODUCTS_FAIL:
            return {
                loading:false
            }
        case GET_PRODUCTS_LOADING:
            return {
                loading:true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                loading:false,
                products:action.payload
            }
        default:
            return state
    }
}

export const productsForSubcatReducer = (state = defaultState,action:any ) =>{
    switch (action.type) {
        case GET_PRODUCTS_FOR_SUBCAT_FAIL:
            return {
                loading:false
            }
        case GET_PRODUCTS_FOR_SUBCAT_LOADING:
            return {
                loading:true
            }
        case GET_PRODUCTS_FOR_SUBCAT_SUCCESS:
            return {
                loading:false,
                productsForSubcat:action.payload
            }
        default:
            return state
    }
}

export const productByIdReducer = (state = defaultState,action:any ) =>{
    switch (action.type) {
        case GET_PRODUCT_ID_FAIL:
            return {
                loading:false
            }
        case GET_PRODUCT_ID_LOADING:
            return {
                loading:true
            }
        case GET_PRODUCT_ID_SUCCESS:
            return {
                loading:false,
                productById:action.payload
            }
        default:
            return state
    }
}