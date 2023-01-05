// file system that means kono file listen korte chaile ei fs module ti import korte hoy

const fs = require("fs");
const fsController = (_req, res) => {
  //   throw new Error();
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
};

const aboutController = (_req, res) => {
  fs.readFile("pages/about.html", (err, data) => {
    if (err) {
      console.log("Error:", err);
      res.send(`<h1>Something went wrong!</h1`);
    } else {
      res.write(data);
      res.end();
    }
  });
};

module.exports = {
  fsController,
  aboutController,
};
