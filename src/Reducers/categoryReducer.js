import {CREATE_SELECTION, CURRENT_SELECTION} from '../Actions/types'

const initialState = {
    selections: [],
    currentSelection: {category_id: 0}
}

export default function (state = initialState, action) {
    switch (action.type){
        case CREATE_SELECTION:
            return {
                ...state,
                selections: action.payload
            }
        case CURRENT_SELECTION:
            return{
                ...state,
                currentSelection: action.payload
            }
        default: 
        return state;
    }
}