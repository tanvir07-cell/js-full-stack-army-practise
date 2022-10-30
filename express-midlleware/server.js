// const express = require("express");

// const app = express();

// // app.use() er moddeh alltime middleware pass korte hoy:

// // body parser middleware:
// app.use(express.json());

// // for seeing or accessing static file in the browser:
// app.use(express.static("public"));

// const port = process.env.PORT || 8000;

// // middleware:

// // eikhane simpleLogger ekti middleware karon middleware alltime next() tike call kore and middleware usually response generate kore nah but error hole response generate kore:

// const simpleLogger = (req, res, next) => {
//   console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`);

//   const { name } = req.query;

//   if (name === "Tanvir Rifat") {
//     return res.json({
//       message: `Hello ${name}!`,
//     });
//   }

//   //   jodi query te mane url e name = Tanvir Rifat nah pay tahole next call hobe and ei next call hoye jabe /hello controller er moddeh and ei controller er response ti generata korbe:
//   next();
// };

// app.get("/hello", simpleLogger, (req, res, next) => {
//   // eikhane arrow function ti holo ekti controller. ar ei controller all time response generate kore:

//   res.json({
//     message: `Hello ${port}`,
//   });
// });

// app.listen(port, () => {
//   console.log(`Listening on port : ${port}`);
// });

const http = require("http");
const app = require("./app/app");

require("dotenv").config();

const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
