import {GET_CATEGORY_FAIL,GET_CATEGORY_LOADING,GET_CATEGORY_SUCCESS,GET_CATEGORY_ID_FAIL,
    GET_CATEGORY_ID_LOADING,GET_CATEGORY_ID_SUCCESS,GET_SUBCAT_FOR_CAT_FAIL,GET_SUBCAT_FOR_CAT_LOADING,
    GET_SUBCAT_FOR_CAT_SUCCESS,GET_SUBCATEGORY_FAIL,GET_SUBCATEGORY_LOADING,GET_SUBCATEGORY_SUCCESS,
    GET_SUBCATEGORY_ID_FAIL,GET_SUBCATEGORY_ID_LOADING,GET_SUBCATEGORY_ID_SUCCESS} from './categoryActionsType'

const defaultState = {
    loading:false
}

export const categoryReducer = (state = defaultState,action ) =>{
    switch (action.type) {
        case GET_CATEGORY_FAIL:
            return {
                loading:false
            }
        case GET_CATEGORY_LOADING:
            return {
                loading:true
            }
        case GET_CATEGORY_SUCCESS:
            return {
                loading:false,
                category:action.payload
            }
        default:
            return state
    }
}

export const subcategoryReducer = (state = defaultState,action ) =>{
    switch (action.type) {
        case GET_SUBCATEGORY_FAIL:
            return {
                loading:false
            }
        case GET_SUBCATEGORY_LOADING:
            return {
                loading:true
            }
        case GET_SUBCATEGORY_SUCCESS:
            return {
                loading:false,
                subcategory:action.payload
            }
        default:
            return state
    }
}

export const categoryByIdReducer = (state = defaultState,action ) =>{
    switch (action.type) {
        case GET_CATEGORY_ID_FAIL:
            return {
                loading:false
            }
        case GET_CATEGORY_ID_LOADING:
            return {
                loading:true
            }
        case GET_CATEGORY_ID_SUCCESS:
            return {
                loading:false,
                categoryById:action.payload
            }
        default:
            return state
    }
}

export const subcatForCatReducer = (state = defaultState,action ) =>{
    switch (action.type) {
        case GET_SUBCAT_FOR_CAT_FAIL:
            return {
                loading:false
            }
        case GET_SUBCAT_FOR_CAT_LOADING:
            return {
                loading:true
            }
        case GET_SUBCAT_FOR_CAT_SUCCESS:
            return {
                loading:false,
                subcatForCat:action.payload
            }
        default:
            return state
    }
}

export const subcategoryByIdReducer = (state = defaultState,action ) =>{
    switch (action.type) {
        case GET_SUBCATEGORY_ID_FAIL:
            return {
                loading:false
            }
        case GET_SUBCATEGORY_ID_LOADING:
            return {
                loading:true
            }
        case GET_SUBCATEGORY_ID_SUCCESS:
            return {
                loading:false,
                subcategoryById:action.payload
            }
        default:
            return state
    }
}