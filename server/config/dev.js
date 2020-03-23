var mysql = require('mysql');

function mySql() {
  let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "wholesale_sys",
    multipleStatements: true
  });

  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to mysql server!");
  });
  return conn;
}

exports.CONN = mySql();
