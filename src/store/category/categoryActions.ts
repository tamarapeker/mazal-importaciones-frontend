import axios from 'axios'
import {GetCategoriesDispatchTypes, GET_CATEGORY_FAIL, GET_CATEGORY_LOADING, GET_CATEGORY_SUCCESS,
    GET_CATEGORY_ID_FAIL, GET_CATEGORY_ID_LOADING, GET_CATEGORY_ID_SUCCESS, GET_SUBCATEGORY_FAIL,
    GET_SUBCATEGORY_LOADING, GET_SUBCATEGORY_SUCCESS, GET_SUBCATEGORY_ID_FAIL, GET_SUBCATEGORY_ID_LOADING,
    GET_SUBCATEGORY_ID_SUCCESS, GET_SUBCAT_FOR_CAT_FAIL, GET_SUBCAT_FOR_CAT_LOADING, GET_SUBCAT_FOR_CAT_SUCCESS} from './categoryActionsType'
import {CONFIG} from '../../config'
import { Dispatch } from 'redux'

export const GetCategories = () => async (dispatch: Dispatch<GetCategoriesDispatchTypes>) => {
    try {
        dispatch({
            type: GET_CATEGORY_LOADING
        })
        const response = await axios.get(CONFIG.backend+'/category')
        dispatch({
            type: GET_CATEGORY_SUCCESS,
            payload: response.data
        })
    } catch(error){
        console.log(error)
        dispatch({
            type: GET_CATEGORY_FAIL
        })
    }
}   

export const GetSubcategories = () => async (dispatch: Dispatch<GetCategoriesDispatchTypes>) => {
    try {
        dispatch({
            type: GET_SUBCATEGORY_LOADING
        })
        const response = await axios.get(CONFIG.backend+'/category/subcategory')
        dispatch({
            type: GET_SUBCATEGORY_SUCCESS,
            payload: response.data
        })
    } catch(error){
        console.log(error)
        dispatch({
            type: GET_SUBCATEGORY_FAIL
        })
    }
}  

export const GetCategoriesById = (id:number) => async (dispatch: Dispatch<GetCategoriesDispatchTypes>) => {
    try {
        dispatch({
            type: GET_CATEGORY_ID_LOADING
        })
        const response = await axios.get(CONFIG.backend+'/category/'+id)
        dispatch({
            type: GET_CATEGORY_ID_SUCCESS,
            payload: response.data
        })
    } catch(error){
        console.log(error)
        dispatch({
            type: GET_CATEGORY_ID_FAIL
        })
    }
}   

export const GetSubcatForCat = (id:any) => async (dispatch: Dispatch<GetCategoriesDispatchTypes>) => {
    try {
        dispatch({
            type: GET_SUBCAT_FOR_CAT_LOADING
        })
        const response = await axios.get(CONFIG.backend+'/category/'+id+'/subcategory')
        dispatch({
            type: GET_SUBCAT_FOR_CAT_SUCCESS,
            payload: response.data
        })
    } catch(error){
        console.log(error)
        dispatch({
            type: GET_SUBCAT_FOR_CAT_FAIL
        })
    }
}   

export const GetSubcategoriesById = (id:number) => async (dispatch: Dispatch<GetCategoriesDispatchTypes>) => {
    try {
        dispatch({
            type: GET_SUBCATEGORY_ID_LOADING
        })
        const response = await axios.get(CONFIG.backend+'/category/subcategory/'+id)
        dispatch({
            type: GET_SUBCATEGORY_ID_SUCCESS,
            payload: response.data
        })
    } catch(error){
        console.log(error)
        dispatch({
            type: GET_SUBCATEGORY_ID_FAIL
        })
    }
}   
