import React from 'react';
import movies from '../movies/movieData.js'
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import {useState} from 'react'

const App = function(props) {
  const [titleSearch, setTitleSearch] = useState('');
  const [movieList, setMovieList] = useState(movies);

  var handleSearch = (event) => {
    console.log(event);
  };

  return (
    <>
    <h3>MovieList</h3>
    <Search />
    <MovieList movies={movies}/>
    </>);
  };

export default App;