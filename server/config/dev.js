var mysql = require('mysql');

function mySql() {
  let conn = mysql.createConnection({
    host: "spring2020dbthota.cesjud7fuq8g.us-east-1.rds.amazonaws.com",
    user: "tthota",
    password: "ABCabc123!",
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
