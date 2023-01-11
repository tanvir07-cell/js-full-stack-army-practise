const express = require("express");
const app = express();
const PORT = 4000;
const User = require("./models/User");
const connectDB = require("./db");
const bcrypt = require("bcrypt");
app.use(express.json());

app.get("/", (_, res) => {
  const obj = {
    name: "Tanvir Rifat",
    email: "tanvir@gmail.com",
  };
  res.json(obj);
});

// for registering the user:
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide a name and email and password" });
  }

  // ekhon ami user er name,email,pass pabo kothay! ei sob gulay pabo ami models er moddeh User model e :

  // jodi user age account create kore rakhe seta check korbo findOne(email) ei method tir maddome:

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  // now new user create and save to the database:
  user = new User({ name, email, password });
  // hashing the password jate kore database e password ti hash kore save hoy:
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  user.password = hash;
  await user.save();
  return res.status(201).json({ message: "User created successfully", user });
});

connectDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`I am listenig on the port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
