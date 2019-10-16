import { combineReducers } from 'redux';
import productReducer from './productReducer';
import personalCarouselReducer from './personalCarouselReducer'

export default combineReducers({
    posts: productReducer,
    personalCarousel: personalCarouselReducer
})