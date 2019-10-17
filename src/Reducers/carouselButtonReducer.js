import {INCREMENT, DECREMENT, INITIALIZE} from '../Actions/types';

const initialState = {
    page: 1
}

export default function (state = initialState, action){
    switch(action.type) {
        case INCREMENT:
            let page = action.payload + 1;
            if(page === 4){
                page = 1
            } 
        return {
            ...state,
            page: page
        };

        case DECREMENT:
            page = action.payload - 1;
            if(page === 0){
                page = 3
            } 
        return {
            ...state,
            page: page
        };
        case INITIALIZE:
            return{
                ...state,
                page: 1
            }
        default:
            return state;
    };
}