// DEPENDENCIES
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/books_controller");

// express app
var app = express();

// Set the port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing as JSON
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars configuration
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// allow server to use routes
app.use(routes);

// start server to listen for client requests
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
