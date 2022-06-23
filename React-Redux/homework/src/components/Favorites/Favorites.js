import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';
import { addMovieFavorite } from '../../actions/index';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.moviesFavourites.map(movie => (
              <li key={movie.id}>
                {movie.title}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    moviesFavourites: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch){
  return{
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
