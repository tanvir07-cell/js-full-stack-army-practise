// middleware:
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const middlewares = [
  morgan("dev"),

  // for safety all cors origin is acceptable with this cors()
  cors(),
  express.json(),
];

module.exports = middlewares;
