import { combineReducers } from 'redux';
import productReducer from './productReducer';
import personalCarouselReducer from './personalCarouselReducer'
import carouselButton from './carouselButton';

export default combineReducers({
    posts: productReducer,
    personalCarousel: personalCarouselReducer,
    sponserCarouselPageNum: carouselButton
})