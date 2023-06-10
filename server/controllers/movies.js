/* CONTROLLER */
var models = require('../models')

// define object, with methods to retrieve all movie objects or add movie
var controller = {};

controller.get = function(req, res) {
  // make a call to model function getall
  models.getAll((movieList) => {
    // pass in callback to send respond
    res.status(200).send(movieList);
  });
}

controller.post = function(req, res) {
  debugger;
  // get movie data from request object
  // movie object: {'title': addValue, 'watched': false}
  var title = req.body;
  // make a call to model function create
  models.create(title, () => {
    res.status(201).send();
  });
}

// export to module.exports
module.exports = controller;