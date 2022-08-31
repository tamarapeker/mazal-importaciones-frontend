import {GET_PRODUCTS_FAIL, GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCCESS,
GET_PRODUCTS_FOR_SUBCAT_FAIL,GET_PRODUCTS_FOR_SUBCAT_LOADING,GET_PRODUCTS_FOR_SUBCAT_SUCCESS,
GET_PRODUCT_ID_FAIL,GET_PRODUCT_ID_LOADING,GET_PRODUCT_ID_SUCCESS} from './productActionsType'

import axios from 'axios'
import {CONFIG} from '../../config'

export const GetProducts = () => async (dispatch:any) => {
    try {
        dispatch({
            type: GET_PRODUCTS_LOADING
        })
        let products:any = []
        for(let i=1;i<=38;i++){
            const response:any = await axios.get(CONFIG.backend+'/products/subcategory/'+i)
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

export const GetProductsForSubcat = (idSubcat:any) => async (dispatch:any) => {
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

export const GetProductById = (id:any) => async (dispatch:any) => {
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