import {GetCategoriesDispatchTypes, GET_CATEGORY_FAIL, GET_CATEGORY_LOADING, GET_CATEGORY_SUCCESS,
    GET_CATEGORY_ID_FAIL, GET_CATEGORY_ID_LOADING, GET_CATEGORY_ID_SUCCESS, GET_SUBCATEGORY_FAIL,
    GET_SUBCATEGORY_LOADING, GET_SUBCATEGORY_SUCCESS, GET_SUBCATEGORY_ID_FAIL, GET_SUBCATEGORY_ID_LOADING,
    GET_SUBCATEGORY_ID_SUCCESS, GET_SUBCAT_FOR_CAT_FAIL, GET_SUBCAT_FOR_CAT_LOADING, GET_SUBCAT_FOR_CAT_SUCCESS,
    CategoryType, CategoryByIdType, SubcategoryType, SubcatForCatType, SubcategoryByIdType} from './categoryActionsType'

//CATEGORY
export interface CategoryDefaultStateI {
    loading:boolean,
    categories?: CategoryType[] | any
}

const defaultStateCat:CategoryDefaultStateI = {
    loading:false
};

export const categoryReducer = (state: CategoryDefaultStateI = defaultStateCat,action:GetCategoriesDispatchTypes):CategoryDefaultStateI  =>{
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
                categories:action.payload
            }
        default:
            return state
    }
}

//SUBCATEGORY
export interface SubcategoryDefaultStateI {
    loading:boolean,
    subcategories?: SubcategoryType[] | any
}

const defaultStateSubcat:SubcategoryDefaultStateI = {
    loading:false
};

export const subcategoryReducer = (state: SubcategoryDefaultStateI = defaultStateSubcat,action:GetCategoriesDispatchTypes):SubcategoryDefaultStateI  =>{
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
                subcategories:action.payload
            }
        default:
            return state
    }
}

//CATEGORY BY ID
export interface CategoryByIdDefaultStateI {
    loading:boolean,
    categoryById?: CategoryByIdType[] | any
}

const defaultStateCatById:CategoryByIdDefaultStateI = {
    loading:false
};


export const categoryByIdReducer = (state: CategoryByIdDefaultStateI = defaultStateCatById,action:GetCategoriesDispatchTypes):CategoryByIdDefaultStateI  =>{
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

//SUBCAT FOR CAT
export interface SubcatForCatDefaultStateI {
    loading:boolean,
    subcatForCat?: SubcatForCatType[] | any
}

const defaultStateSubcatForCat:SubcatForCatDefaultStateI = {
    loading:false
};

export const subcatForCatReducer = (state: SubcatForCatDefaultStateI = defaultStateSubcatForCat,action:GetCategoriesDispatchTypes):SubcatForCatDefaultStateI =>{
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

//SUBCATEGORY BY ID
export interface SubcategoryByIdDefaultStateI {
    loading:boolean,
    subcategoryById?: CategoryByIdType[] | any
}

const defaultStateSubcatById:SubcategoryByIdDefaultStateI = {
    loading:false
};

export const subcategoryByIdReducer = (state: SubcategoryByIdDefaultStateI = defaultStateSubcatById,action:GetCategoriesDispatchTypes):SubcategoryByIdDefaultStateI =>{
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