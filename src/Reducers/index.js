import { combineReducers } from 'redux';
import uniqueIdReducer from './uniqueIdReducer';
import searchReducer from './searchReducer'


export default combineReducers({
    options: searchReducer,
    uniqueId: uniqueIdReducer
})