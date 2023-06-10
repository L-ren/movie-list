import React from 'react';
import movies from '../movies/movieData.js'
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import Add from './Add.jsx'
import WatchTabs from './WatchTabs.jsx'
import {useState} from 'react'

const App = function(props) {
  const [searchValue, setSearchValue] = useState('');
  const [titleSearch, setTitleSearch] = useState('');
  const [addValue, setAddValue] = useState('');
  const [titleAdded, setTitleAdded] = useState('');
  const [movieList, setMovieList] = useState(movies);
  // add a watched property (boolean) to each movie object

  var handleSearchInput = (event) => {
    // FIX SEARCH INPUT DEBOUNCE
    var searchText = event.target.value;
    var inputTimeout
    clearTimeout(inputTimeout)
    inputTimeout = setTimeout(() => {
      console.log('function invoked')
      setSearchValue(searchText)
    }, 500);
  };
  var handleSearchSubmit = (event) => {
    event.preventDefault();
    setTitleSearch(searchValue);
  };

  var handleAddInput = (event) => {
    // FIX SEARCH INPUT DEBOUNCE
    var addText = event.target.value;
    setAddValue(addText);
    //console.log('movie being added: ', addText);
  };
  var handleAddSubmit = (event) => {
    event.preventDefault();
    console.log(addValue);
    setMovieList([...movieList, {'title': addValue, 'watched': false}]);
  };

  var handleWatchToggle = (event, movie, index) => {
    setMovieList(movieList.toSpliced(index, 1, {'title': movie.title, 'watched': !movie.watched}))
    console.log(movieList);
  };

  return (
    <>
    <h3>MovieList</h3>
    <WatchTabs />
    <Add handleAddInput={handleAddInput} handleAddSubmit={handleAddSubmit}/>
    <Search handleSearchInput={handleSearchInput} handleSearchSubmit={handleSearchSubmit}/>
    <MovieList movies={movieList} searchValue={searchValue} handleWatchToggle={handleWatchToggle}/>
    </>);
  };

export default App;