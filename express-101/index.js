const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// file system that means kono file listen korte chaile ei fs module ti import korte hoy

const fs = require("fs");

// middleware gula app.use() er moddeh use kora hoy:
app.use(express.json());
// multipage application er time e jodi form submit kori tahole nicher ei middleware ti use kora laage:
app.use(express.urlencoded({ extended: true }));

// request tir log console.kore dekhabe ei morgan middleware ti and eiti install kora laage:
app.use(morgan("dev"));
app.use(cors());
app.use(globalMiddleware);

app.get("/", (_req, res) => {
  fs.readFile("pages/index.html", (err, data) => {
    if (err) {
      console.log("Error : ", err);
      res.send(`<h1>Something went wrong!</h1>`);
    } else {
      res.write(data);

      //   jehetu kono response pathabo nah tai res.end() use korechi:
      res.end();
    }
  });
});

app.get("/about", (_req, res) => {
  fs.readFile("pages/about.html", (err, data) => {
    if (err) {
      console.log("Error:", err);
      res.send(`<h1>Something went wrong!</h1`);
    } else {
      res.write(data);
      res.end();
    }
  });
});

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
