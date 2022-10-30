require("dotenv").config("../.env");

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use([express.json(), morgan("dev"), cors()]);

// ei /health route ti alltime sob website ei deoaa lage jate kore api/endPoint gular health/error check korte pare:

// eikhane _req er means hocceh je ami req argument ti use kori nai tai _req diyechi:
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});

//eikhane ami app tike listen kori nai karon jodi ei app.js er moddeh amar app tike listen korai tahole jokhon ami website ti test korbo tokhon listen hoye barbar webiste ti sesh hoye jabe. Each and every route ke test korbe nah:

module.exports = app;
