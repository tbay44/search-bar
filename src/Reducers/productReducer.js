import { UPDATE_UNIQUE_ID } from '../Actions/types';

const initialState = {
    id: 0
}

export default function ( state = initialState, action){
    switch(action.type){
        case UPDATE_UNIQUE_ID:
            return {
                ...state,
                id: action.payload
            }
        default: 
        return state;
    }
}