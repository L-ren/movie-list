/* MODEL - the app's connection with database, must contain db connection object */
// import db connection object

const connection = require('../db'); // *** double check that this import/object is occurring correctly ***

var model = {};
// getAll
model.getAll = function(callback) {
  // make query to database, get array of movie objects
  connection.query(`SELECT * FROM movies`, (err, movieList, fields) => {
    console.log(`returned movie list: ${movieList}`)
    callback(movieList);
  });
  // invoke callback, passing in array
  //var movieList = [{name: 'Legally Blonde'}, {name: 'Inception'}]
}

// create
model.create = function(title, callback) {
  connection.query(`INSERT INTO movies (name, watched)
  VALUES (?, false);`, title, (err, results, fields) => {
    console.log(`request to add movie to db`);
    callback();
  });
}

module.exports = model;