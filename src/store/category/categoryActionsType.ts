//Define the Actions
export const GET_CATEGORY_LOADING = 'GET_CATEGORY_LOADING';
export const GET_CATEGORY_FAIL = 'GET_CATEGORY_FAIL';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';

export const GET_SUBCATEGORY_LOADING = 'GET_SUBCATEGORY_LOADING';
export const GET_SUBCATEGORY_FAIL = 'GET_SUBCATEGORY_FAIL';
export const GET_SUBCATEGORY_SUCCESS = 'GET_SUBCATEGORY_SUCCESS';

export const GET_CATEGORY_ID_LOADING = 'GET_CATEGORY_ID_LOADING';
export const GET_CATEGORY_ID_FAIL = 'GET_CATEGORY_ID_FAIL';
export const GET_CATEGORY_ID_SUCCESS = 'GET_CATEGORY_ID_SUCCESS';

export const GET_SUBCAT_FOR_CAT_LOADING = 'GET_SUBCAT_FOR_CAT_LOADING';
export const GET_SUBCAT_FOR_CAT_FAIL = 'GET_SUBCAT_FOR_CAT_FAIL';
export const GET_SUBCAT_FOR_CAT_SUCCESS = 'GET_SUBCAT_FOR_CAT_SUCCESS';

export const GET_SUBCATEGORY_ID_LOADING = 'GET_SUBCATEGORY_ID_LOADING';
export const GET_SUBCATEGORY_ID_FAIL = 'GET_SUBCATEGORY_ID_FAIL';
export const GET_SUBCATEGORY_ID_SUCCESS = 'GET_SUBCATEGORY_ID_SUCCESS';

//CATEGORY
export type CategoryType =  {
    caregory_id: number;
    category_name: string;
};

export interface GetCategoryLoading {
    type: typeof GET_CATEGORY_LOADING
}

export interface GetCategoryFail {
    type: typeof GET_CATEGORY_FAIL
}

export interface GetCategorySuccess {
    type: typeof GET_CATEGORY_SUCCESS,
    payload: CategoryType[] | undefined
}

//SUBCATEGORY
export type SubcategoryType =  {
    subcategory_id: number;
    subcategory_name: string;
    caregory_id: number;
    category_name: string;
};

export interface GetSubcategoryLoading {
    type: typeof GET_SUBCATEGORY_LOADING
}

export interface GetSubcategoryFail {
    type: typeof GET_SUBCATEGORY_FAIL
}

export interface GetSubcategorySuccess {
    type: typeof GET_SUBCATEGORY_SUCCESS,
    payload: SubcategoryType[] | undefined
}

//CATEGORY BY ID
export type CategoryByIdType =  {
    caregory_id: number;
    category_name: string;
};

export interface GetCategoryByIdLoading {
    type: typeof GET_CATEGORY_ID_LOADING
}

export interface GetCategoryByIdFail {
    type: typeof GET_CATEGORY_ID_FAIL
}

export interface GetCategoryByIdSuccess {
    type: typeof GET_CATEGORY_ID_SUCCESS,
    payload: CategoryType[] | undefined
}

//SUBCAT FOR CAT
export type SubcatForCatType =  {
    subcategory_id: number;
    subcategory_name: string;
    caregory_id: number;
    category_name: string;
};

export interface GetSubcatForCatLoading {
    type: typeof GET_SUBCAT_FOR_CAT_LOADING
}

export interface GetSubcatForCatFail {
    type: typeof GET_SUBCAT_FOR_CAT_FAIL
}

export interface GetSubcatForCatSuccess {
    type: typeof GET_SUBCAT_FOR_CAT_SUCCESS,
    payload: SubcatForCatType[] | undefined
}

//SUBCATEGORY BY ID
export type SubcategoryByIdType =  {
    caregory_id: number;
    category_name: string;
};

export interface GetSubcategoryByIdLoading {
    type: typeof GET_SUBCATEGORY_ID_LOADING
}

export interface GetSubcategoryByIdFail {
    type: typeof GET_SUBCATEGORY_ID_FAIL
}

export interface GetSubcategoryByIdSuccess {
    type: typeof GET_SUBCATEGORY_ID_SUCCESS,
    payload: SubcategoryByIdType[] | undefined
}


export type GetCategoriesDispatchTypes = GetCategoryLoading | GetCategoryFail | GetCategorySuccess
                                        | GetSubcategoryLoading | GetSubcategoryFail | GetSubcategorySuccess
                                        |GetCategoryByIdLoading | GetCategoryByIdFail | GetCategoryByIdSuccess
                                        | GetSubcatForCatLoading | GetSubcatForCatFail | GetSubcatForCatSuccess
                                        | GetSubcategoryByIdLoading | GetSubcategoryByIdFail | GetSubcategoryByIdSuccess;
