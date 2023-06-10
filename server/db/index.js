/* DATABASE */

// instantiate db, linking to schema.sql
const mysql = require('mysql2');

// import mysql2
// use mysql2 to create a db connection
const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movieDb' // *** created an empty db called moviedb but could not import it into this db ***
});

connection.connect(function(err) {
  if (err) {
    console.log(`error connection: ${err.stack}`)
  }
  console.log(`connected as id ${connection.threadId}`);
})
// export connection
module.exports = connection;