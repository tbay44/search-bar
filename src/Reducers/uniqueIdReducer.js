import { UPDATE_UNIQUE_ID } from '../Actions/types';

const initialState = {
    currentId: [],
    currentCategory: 0
}

export default function ( state = initialState, action){
    switch(action.type){
        case UPDATE_UNIQUE_ID:
            return {
                ...state,
                currentId: action.payload.id,
                currentCategory: action.payload.category
            }
        default: 
        return state;
    }
}