import {FETCH_PRODUCTS} from '../Actions/types';
const initialState = {
    pageOne : [],
    pageTwo : [],
    pageThree: []
}

export default function (state = initialState, action){
    switch(action.type) {
        case FETCH_PRODUCTS:
            let pageOne = []
            let pageTwo = []
            let pageThree = []
            for(var i = 0; i < action.payload.length; i++){
                if(i < 5){
                    pageOne = pageOne.concat(action.payload[i]);
                }else if(i < 10){
                    pageTwo = pageTwo.concat(action.payload[i]);
                }else if(i < 15){
                    pageThree = pageThree.concat(action.payload[i]);
                }
            }
            return {
                ...state,
                pageOne: pageOne,
                pageTwo: pageTwo,
                pageThree: pageThree
            }
        default:
            return state;
    }
}