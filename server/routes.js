// contains routes for '/movies' received by index.js server to direct requests to the controller

// import controllers, and express .Router()
const controller = require('./controllers');
const router = require('express').Router(); // this call to Router returns a router object that handles requests

// define get method to '/movies', pass in functions from controller as callbacks
router.get('/movies', controller.movies.get);

// define post method to '/movies'
router.post('/movies', controller.movies.post);
//router.post();

// export router and its methods by reassigning the exports property of this module
module.exports = router;