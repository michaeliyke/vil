const mysql = require('mysql2');
const connection = mysql.createConnection(require('./config'));

/* con.promise().query("SELECT 1")
  .then( ([rows,fields]) => {
    console.log(rows);
  })
  .catch(console.log)
  .then( () => con.end()); */

console.log('Db connected successfully');
connection.closeAndEnd = connection.end.bind(connection);
module.exports = connection;
