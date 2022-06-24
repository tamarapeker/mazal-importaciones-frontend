import axios from 'axios'
import {GET_CATEGORY_FAIL,GET_CATEGORY_LOADING,GET_CATEGORY_SUCCESS} from './categoryActionsType'
import {CONFIG} from '../../config'

export const GetCategories = () => async (dispatch) => {
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
        dispatch({
            type: GET_CATEGORY_FAIL
        })
    }
}   
