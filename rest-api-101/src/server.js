const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const shortid = require("shortid");
const fs = require("fs/promises");

const path = require("path");
const dbLocation = path.resolve("src", "data.json");

const app = express();

// middlewares:
app.use([morgan("dev"), express.json(), cors()]);

const port = process.env.PORT || 8000;

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "OK" });
});

// create the players and it's save in the src/data.json file automatically:
app.post("/", async (req, res) => {
  const player = {
    id: shortid.generate(),
    ...req.body,
  };
  //   ekhon ekekti kore player src/data.json er moddeh array teh push korbo:

  const data = await fs.readFile(dbLocation);
  const players = JSON.parse(data);

  //   now push the player to the players array:
  players.push(player);

  //   src/data.json e write/save korbo data gula:
  fs.writeFile(dbLocation, JSON.stringify(players));
  res.status(201).json(player);
});

// get all players:
app.get("/", async (req, res) => {
  const data = await fs.readFile(dbLocation);
  const players = JSON.parse(data);
  res.status(200).json(players);
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await fs.readFile(dbLocation);
  const players = JSON.parse(data);
  const player = players.find((p) => p.id === id);

  if (!player) {
    return res.status(404).json({ message: `${id} is not found` });
  }
  res.status(200).json(player);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
