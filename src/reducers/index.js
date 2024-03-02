import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';
import { combineReducers } from 'redux';
const keyReducer = combineReducers({
    movieReducer,
    favoriteReducer
})
export default keyReducer;