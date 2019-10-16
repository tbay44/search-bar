import {FETCH_PRODUCTS, ADD_PRODUCT} from './types';

    export function fetchProducts(inputId){ 
        return function (dispatch){
            return fetch('/api',{
                headers: {"Content-Type" : "application/json"},
                method: "POST", 
                body: JSON.stringify({
                    id: inputId
                })
            })
            .then(res => {
                console.log(res)
            return res.json()})
            .then(posts =>
                dispatch({
                    type: FETCH_PRODUCTS,
                    payload: posts
                })
            );
        }
    };

    export function addPersonal(inputId){ 
        return function (dispatch){
            return fetch('/api/add?id='+inputId)
            .then(res => {
                console.log(res)
            return res.json()})
            .then(products =>
                dispatch({
                    type: ADD_PRODUCT,
                    payload: products
                })
            );
        }
    };