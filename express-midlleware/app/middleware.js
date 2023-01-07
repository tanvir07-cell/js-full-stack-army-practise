const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const middleware = [express.json(), morgan("dev"), cors()];

module.exports = middleware;
