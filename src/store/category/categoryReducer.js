import {GET_CATEGORY_FAIL,GET_CATEGORY_LOADING,GET_CATEGORY_SUCCESS} from './categoryActionsType'

const defaultState = {
    loading:false
}

const categoryReducer = (state = defaultState,action ) =>{
    switch (action.type) {
        case GET_CATEGORY_FAIL:
            return {
                loading:false
            }
            break;
        case GET_CATEGORY_LOADING:
            return {
                loading:true
            }
            break;
        case GET_CATEGORY_SUCCESS:
            return {
                loading:false,
                category:action.payload
            }
            break;
        default:
            return state
            break;
    }
    return state;
}


export default categoryReducer;