import { GET_MOVIES, ADD_MOVIE_FAVORITE } from './actionTypes';
import axios from 'axios';
import {APIKEY} from '../App';

export const getMovies = (movie) => {
  return (dispatch) => {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${APIKEY}&s=${movie}`)
    .then(response => dispatch({type: GET_MOVIES, payload: response.data}))
    .catch(err => console.log('Error'))
  }  
}

export const addMovieFavorite = (payload) => {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload
  }
}
