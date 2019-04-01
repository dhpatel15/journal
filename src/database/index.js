const mysql = require('mysql');
const { DBCREDENTIALS } = require('../../config')

const con = mysql.createConnection(DBCREDENTIALS);

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;