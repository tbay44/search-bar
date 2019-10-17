import {ADD_PRODUCT} from '../Actions/types';

const initialState = {
    items : []
}

export default function (state = initialState, action){
    switch(action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}