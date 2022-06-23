import { GET_MOVIES, ADD_MOVIE_FAVORITE } from '../actions/actionTypes'

const initialState = {
  moviesFavourites: [],
  movies: [],
  movieDetail: {}
}

export function reducer(state = initialState, {type, payload} ){
  switch (type) {

    case GET_MOVIES:
      return{
        ...state,
        movies: payload.Search
      }

    case ADD_MOVIE_FAVORITE: 
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.find(movie => movie.id === payload.id) 
        ? [...state.moviesFavourites] 
        : [...state.moviesFavourites, payload], 
      };
      
    default:
      return state
  }
}
