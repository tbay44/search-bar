import {CURRENT_SEARCH_STRING, RESET_SEARCH} from '../Actions/types';

const initialState = {
    products: []
}

export default function ( state = initialState, action) {
    switch(action.type){
        case CURRENT_SEARCH_STRING:
            return {
                ...state,
                products: action.payload
            }
        case RESET_SEARCH:
            return {
                products: []
            }
        default: 
        return state;
    }
}