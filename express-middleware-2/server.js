const express = require("express");

app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Express server on listening on port ${port}`);
});
