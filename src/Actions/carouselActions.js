import {INCREMENT, DECREMENT} from './types';

export function incrementButton(num){
    return function (dispatch) {
        dispatch({
            type: INCREMENT,
            payload: num
        })
    }
}

export function decrementButton(num){
    return function (dispatch) {
        dispatch({
            type: DECREMENT,
            payload: num
        })
    }
}

export function initializeButton(){
    return function (dispatch) {
        dispatch({
            type: 'INITIALIZE',
        })
    }
}
