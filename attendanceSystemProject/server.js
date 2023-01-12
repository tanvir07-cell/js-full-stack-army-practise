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
app.post("/register", async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide a name and email and password" });
  }

  // eikhane try-catch use korar karon hocceh jodi keo vulval data pass kore register korte chay tahole amra error ti dhore jate pass kore dite pari global error middleware and er maddomei error ti show hobe:

  try {
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
  } catch (err) {
    next(err);
  }
});

// for login:
app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    // user er jodi email id nah thake tahole to se login korte parbe nah tai error dekhiye dibo:
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // check the given password and after registration the hash password:
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // jodi password match kore tahole ekti jwt token dibo and ei token ti amra pore sikhbo apadoto just ekti login successful message dibo:

    // and successfully response er age password ti delete kore dibo:
    delete user.__doc.user;
    return res.status(200).json({ message: "login successful" });
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ message: "Server error occured!" });
});

connectDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`I am listenig on the port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
