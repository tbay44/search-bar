import { combineReducers } from 'redux';
import uniqueIdReducer from './uniqueIdReducer';
import searchReducer from './searchReducer'
import categoryReducer from './categoryReducer';

export default combineReducers({
    options: searchReducer,
    uniqueId: uniqueIdReducer,
    categories: categoryReducer
})