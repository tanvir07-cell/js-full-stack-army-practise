require("dotenv").config("../.env");
const express = require("express");
const { notFoundHandler, errorHandler } = require("./error");
const app = express();
app.use(require("./middlewares"));
app.use(require("./router"));

//custom mane e amader create kora error:

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;
