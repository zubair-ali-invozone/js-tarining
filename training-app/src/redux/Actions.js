import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "./Constants";
import Axios from "axios";

export const productListAction = () => async (dispatch) => {
    dispatch({type: PRODUCT_LIST_REQUEST});
    const headers = {'Accept': 'application/json'}
    try {
        const {data} = await Axios.get("https://jsonplaceholder.typicode.com/posts", {headers: headers});
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}