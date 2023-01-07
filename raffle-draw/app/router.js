const router = require("express").Router();

// this is the global or main route:
router.use("/api/v1/tickets", require("../routes/ticket"));

// this is the /health route. When we deploy the application to the cloud then the many cloud check the health of the application and it's the good practice to add this:
router.get("/health", (req, res) => {
  // throw new Error();
  res.status(200).json({ message: "Success" });
});

module.exports = router;
