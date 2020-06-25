// DEPENDENCIES
const mysql = require("mysql");

// mysql connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "books_db",
});

// make connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// export connection for ORM
module.exports = connection;
