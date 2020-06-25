// DEPENDENCIES
const express = require("express");
const router = express.Router();
const book = require("../models/book.js");

// ROUTES

// GET route, using select method from ORM to create object to be rendered via handlebars
router.get("/", function (req, res) {
  book.select(function (data) {
    let booksObj = {
      books: data,
    };
    res.render("index", booksObj);
  });
});

// POST route, taking input from user entered book title, using insert method from ORM.
router.post("/api/books", function (req, res) {
  book.insert("book_name", [req.body.book_name], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// PUT route, taking the book id from the user-clicked button to update the "read" status to true or a value of 1
router.put("/api/books/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  book.update(
    {
      wasRead: req.body.wasRead,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// DELETE route, grabs book id from user-clicked delete button, used delete method from ORM to remove book from db
router.delete("/api/books/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  book.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// export router
module.exports = router;
