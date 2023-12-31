import React from 'react';
import MovieTitle from './MovieTitle.jsx'
import _, { once } from 'underscore';

const MovieList = ({movies, searchValue, handleWatchToggle}) => {
  // iterate over items in movie list array
  // create variable to track if movie title is rendered
  var searchComplete = false;
  var moviesChecked = 0;
    // if no title rendered, returns fail message
  return ( <ul>
    { movies.map((movie, index) => {
      //for each movie, call movieTitle component
      moviesChecked += 1;
      if (searchValue === '') {
        return <MovieTitle movie={movie} key={index} index={index} handleWatchToggle={handleWatchToggle}/>;
      } else if (searchValue === movie.title) {
        searchComplete = true;
        return <MovieTitle movie={movie} key={index} index={index} handleWatchToggle={handleWatchToggle}/>;
      } else if ((!searchComplete) && (moviesChecked === movies.length)){
        return <div key={movie.title}>Movie not found!</div>
      }
      })
    }
    </ul>
  )
};


export default MovieList;