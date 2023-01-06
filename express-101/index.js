const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
app.use(require("./routes"));

// for setting ejs and ejs is a template engine and ejs works for the dynamic data:
app.set("view engine", "ejs");

// for serving static files:
app.use(express.static("public"));

// middleware gula router.use() er moddeh use kora hoy:
app.use(express.json());
// multipage routerlication er time e jodi form submit kori tahole nicher ei middleware ti use kora laage:
app.use(express.urlencoded({ extended: true }));

// request tir log console.kore dekhabe ei morgan middleware ti and eiti install kora laage:
app.use(morgan("dev"));
app.use(cors());
app.use(globalMiddleware);

// global middleware:
function globalMiddleware(req, res, next) {
  console.log(`${req.method} - ${req.url}`);
  if (req.query.bad) {
    return res.status(400).send("Bad Request");
  }
  next();
}

// for error handling middleware:
app.use((req, res, next) => {
  const error = new Error("404 error");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  // jodi error.status thake tahole amra ager app.use() e jei error diyechi sei error ti dekhabe:
  // ei if er means holo amra jodi status code diye thaki tahole ei if er error message ti dekhabe:
  if (error.status) {
    return res.status(error.status).send(`<h1>${error.message}</h1>`);
  }

  // ar ei error ti holo server error:

  return res.status(500).send(`<h1>Something went wrong!</h1>`);
});

app.listen(4000, () => {
  console.log("Express server is listening");
});
