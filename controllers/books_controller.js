const express = require("express");
const router = express.Router();

const connection = require("../config/connection.js");

// const book = require("../models/book.js");

router.get("/", function (req, res) {
  connection.query("SELECT * FROM books;", function (err, data) {
    if (err) throw err;
    res.render("index", { books: data });
  });
});

router.post("/", function (req, res) {
  connection.query(
    "INSERT INTO books (book) VALUES (?)",
    [req.body.book],
    function (err, result) {
      if (err) throw err;

      res.redirect("/");
    }
  );
});

router.put("/api/books/:id", function (req, res) {
  connection.query(
    "UPDATE books SET wasRead = true WHERE id = ?",
    [req.params.id],
    function (err, result) {
      console.log(req.params.id);

      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      } else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});
// router.put("/api/burgers/:id", function (req, res) {
//   console.log("PUT REQUEST");
// });

module.exports = router;
