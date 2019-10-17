import {FETCH_PRODUCTS} from './types';

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
            return res.json()})
            .then(posts =>
                dispatch({
                    type: FETCH_PRODUCTS,
                    payload: posts
                })
            );
        }
    };

    // export function addPersonal(inputId, currentState = []){ 
    //     return function (dispatch){
    //         return fetch('/api/add?id='+inputId)
    //         .then(res => {
    //         return res.json()})
    //         .then(products =>{
    //             currentState = currentState.concat(products)
    //             dispatch({
    //                 type: ADD_PRODUCT,
    //                 payload: currentState
    //             })
    //         });
    //     }
    // };