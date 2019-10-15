import {FETCH_PRODUCTS, MAIN_PRODUCT} from '../Actions/types';

const initialState = {
    items : [],
    item : {}
}

export default function (state = initialState, action){
    console.log(initialState, action)
    switch(action.type) {
        case FETCH_PRODUCTS:
            console.log('further')
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}