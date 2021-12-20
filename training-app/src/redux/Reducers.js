import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "./Constants";

const productListDefState = {
    productListLoading: false,
    productListData: []
}
export const productListReducer = (state = productListDefState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                productListLoading: true,
                productListData: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                productListLoading: false,
                productListData: action.payload
            }
        case PRODUCT_LIST_FAIL:
            return {
                productListLoading: false,
                productListError: action.payload
            }
        default:
            return state;
    }
}