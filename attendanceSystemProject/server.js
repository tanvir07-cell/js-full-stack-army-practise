const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (_, res) => {
  const obj = {
    name: "Tanvir Rifat",
    email: "tanvir@gmail.com",
  };
  res.json(obj);
});

app.listen(PORT, () => {
  console.log(`I am listenig on the port ${PORT}`);
});
