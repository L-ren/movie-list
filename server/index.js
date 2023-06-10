

const express = require('express');
const path = require('path');
// import routes, db //*\, DOES IMPORT ORDER MATTER??*
const router = require('./routes.js');
const db = require('./db');
// import middleware for logging and parsing
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const cors = require('cors'); //*DO I NEED CORS?? WHAT DOES THIS DO AGAIN?*

const app = express();
const PORT = 3000 || process.env.PORT;
// using middleware for requests
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
})); // ** 'devs'
app.use(bodyParser.text());
//app.use(cors()); //
//app.use()
// set up routes
app.use('/api', router);
// directly serve request for static files (front end/html/webpage)
app.use(express.static('client/dist'));
// DOES THE ORDER OF THIS MIDDLEWARE (EG ROUTER, EXPRESS.STATIC MATTER?)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
