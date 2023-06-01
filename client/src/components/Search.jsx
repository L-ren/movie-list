import React from 'react';

// TO DO NEXT: PASS INPUT TEXT DATA TO HANDLE SUBMIT FUNCTION
const Search = ({handleSearchInput, handleSearchSubmit}) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <input type='text' name='search' onChange={handleSearchInput} placeholder='Search for a movie'/>
      <input type='submit' name='submit' />
    </form>
  )
};

export default Search;