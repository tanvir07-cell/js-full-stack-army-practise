// file system that means kono file listen korte chaile ei fs module ti import korte hoy

const fs = require("fs");
const fsController = (_req, res) => {
  //   throw new Error();
  // fs.readFile("pages/index.html", (err, data) => {
  //   if (err) {
  //     console.log("Error : ", err);
  //     res.send(`<h1>Something went wrong!</h1>`);
  //   } else {
  //     res.write(data);
  //     //   jehetu kono response pathabo nah tai res.end() use korechi:
  //     res.end();
  //   }
  // });

  // for ejs file:
  res.render("pages/index.ejs", { title: "Tanvir | Home" });
};

const aboutController = (_req, res) => {
  // ei fs diye amra pages theke data gula file system akare niyechilam:

  // fs.readFile("pages/about.html", (err, data) => {
  //   if (err) {
  //     console.log("Error:", err);
  //     res.send(`<h1>Something went wrong!</h1`);
  //   } else {
  //     res.write(data);
  //     res.end();
  //   }
  // });

  // ar eikhane amra ejs diye dynamic template use kore data dekhabo:
  res.render("pages/about.ejs", { title: "Tanvir | About" });
};

const helpController = (_req, res) => {
  res.render("pages/help.ejs", { title: "Tanvir | Help" });
};

module.exports = {
  fsController,
  aboutController,
  helpController,
};
