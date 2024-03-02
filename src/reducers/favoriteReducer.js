import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions"
const initialState = {
    favorites: [],
    showFavorites: true
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case REMOVE_FAVORITE: return {...state, favorites: state.favorites.filter(mov => mov.id != action.payload)}
        case ADD_FAVORITE: return {...state, favorites: [...state.favorites, action.payload]}
        case TOGGLE_FAVORITES: return {...state, showFavorites: !state.showFavorites}
        default: return state
    }
}

export default favoriteReducer