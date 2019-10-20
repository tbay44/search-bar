import {CURRENT_SEARCH_STRING, RESET_SEARCH} from './types';


export function currentSearchString (string){
    return function (dispatch)  {
        fetch('/autocomplete', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                search: string
            })
        })
        .then(data => {
            return data.json()
        })
        .then(products => {
            return dispatch({
            type: CURRENT_SEARCH_STRING,
            payload: products
        })
    })
        
    }
}

export function resetSelection (){
    return function(dispatch) {
        return dispatch({
            type: RESET_SEARCH
        })
    }
}