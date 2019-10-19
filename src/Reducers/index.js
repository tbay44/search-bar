import { combineReducers } from 'redux';
import uniqueIdReducer from './uniqueIdReducer';


export default combineReducers({
    uniqueId: uniqueIdReducer
})