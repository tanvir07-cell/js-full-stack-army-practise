const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
app.use(require("./routes"));

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

app.listen(4000, () => {
  console.log("Express server is listening");
});
