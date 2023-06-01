import React from 'react';

var Add = function({handleAddInput, handleAddSubmit}) {
  return (
    <form onSubmit={handleAddSubmit}>
      <input type='text' name='newMovie' placeholder='Add a movie' onChange={handleAddInput}></input>
      <input type='submit' name='submit'></input>
    </form>
  );
}

export default Add;