import { UPDATE_UNIQUE_ID } from './types';



export function changeUniqueId (id) {
    return function (dispatch) {
        return dispatch({
            type: UPDATE_UNIQUE_ID,
            payload: id
        })
    }
}