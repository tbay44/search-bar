import { UPDATE_UNIQUE_ID } from './types';



export function changeUniqueId (id) {
    return function (dispatch) {
        fetch('http://tbay-search-bar.us-east-2.elasticbeanstalk.com/add?id='+id)
            .then(res => {
            return res.json()})
            .then(product => {
                return dispatch({
                    type: UPDATE_UNIQUE_ID,
                    payload: product
                })
            })
    }
}
