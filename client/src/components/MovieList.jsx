import React from 'react';
import MovieTitle from './MovieTitle.jsx'

const MovieList = ({movies}) => {
  // iterate over items in movie list array
  return ( <ul>
    { movies.map(movie => {
      //for each movie, call movieTitle component
      return <MovieTitle movie={movie} key={movie.title}/>;
      })
    }
    </ul>
  )
};


export default MovieList;