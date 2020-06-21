const express = require("express");
const router = express.Router();

const burger = require("../models/buger.js");

router.get("/", function (req, res) {
  console.log("GET REQUEST");
});

router.post("/api/burgers", function (req, res) {
  console.log("POST REQUEST");
});

router.put("/api/burgers/:id", function (req, res) {
  console.log("PUT REQUEST");
});

module.exports = router;
