import {GET_PRODUCTS_FAIL, GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCCESS,
GET_PRODUCTS_FOR_SUBCAT_FAIL,GET_PRODUCTS_FOR_SUBCAT_LOADING,GET_PRODUCTS_FOR_SUBCAT_SUCCESS,
GET_PRODUCT_ID_FAIL,GET_PRODUCT_ID_LOADING,GET_PRODUCT_ID_SUCCESS} from './productActionsType'

import axios from 'axios'
import {CONFIG} from '../../config'

export const GetProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCTS_LOADING
        })
        let products = []
        for(let i=1;i<=38;i++){
            const response = await axios.get(CONFIG.backend+'/products/subcategory/'+i)
            products.push(response.data)
        }
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: products
        })
    } catch(error){
        console.log(error)
        dispatch({
            type: GET_PRODUCTS_FAIL
        })
    }
}   

export const GetProductsForSubcat = (idSubcat) => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCTS_FOR_SUBCAT_LOADING
        })
        const response = await axios.get(CONFIG.backend+'/products/subcategory/'+idSubcat)
        dispatch({
            type: GET_PRODUCTS_FOR_SUBCAT_SUCCESS,
            payload: response.data
        })
    } catch(error){
        console.log(error)
        dispatch({
            type: GET_PRODUCTS_FOR_SUBCAT_FAIL
        })
    }
}   

export const GetProductById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCT_ID_LOADING
        })
        const response = await axios.get(CONFIG.backend+'/products/'+id)
        dispatch({
            type: GET_PRODUCT_ID_SUCCESS,
            payload: response.data
        })
    } catch(error){
        console.log(error)
        dispatch({
            type: GET_PRODUCT_ID_FAIL
        })
    }
}   