import {FETCH_PRODUCTS, MAIN_PRODUCT} from './types';

    export const fetchProducts = () => dispatch => {
    fetch('/api')
    .then(res => {
        console.log(res)
        return res.json()})
    .then(posts =>
        dispatch({
            type: FETCH_PRODUCTS,
            payload: posts
        })
    );
};