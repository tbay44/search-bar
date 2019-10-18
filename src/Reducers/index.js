import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import carouselButton from './carouselButtonReducer';
import productReducer from './productReducer';


export default combineReducers({
    posts: productsReducer,
    sponserCarouselPageNum: carouselButton,
    uniqueId: productReducer
})