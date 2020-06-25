// DEPENDENCIES
const orm = require("../config/orm.js");

const book = {
  select: function (cb) {
    orm.select("books", function (res) {
      cb(res);
    });
  },

  insert: function (cols, vals, cb) {
    orm.insert("books", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("books", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("books", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller
module.exports = book;
