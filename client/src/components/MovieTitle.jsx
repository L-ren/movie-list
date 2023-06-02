import React from 'react';

const MovieTitle = ({movie, index, handleWatchToggle}) => {
  var wasWatched = movie.watched ? 'Watched' : 'Watched?';
  return (<div>
    {movie.title}
    <button onClick={() => {handleWatchToggle(event, movie, index)}} movie={movie}>{wasWatched}</button>
    </div>)
}


export default MovieTitle;