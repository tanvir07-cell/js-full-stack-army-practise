const express = require("express");
const app = express();
app.use(express.json());

// serve a static file:
app.use(express.static("public"));

// set ejs file:
app.set("view engine", "ejs");
app.set("");

// jehetu express e router o ekti middleware tai eke app.use er moddeh use kora laagbe:

app.use(require("./routes"));

// error middleware:
app.use((req, res, next) => {
  const err = new Error("This url doesn't exist!");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).send(`<h1>${err.message}</h1>`);
  }

  return res.status(500).send(`<h1>something went wrong!</h1>`);
});

app.listen(5000, () => {
  console.log("Express server is listening");
});
