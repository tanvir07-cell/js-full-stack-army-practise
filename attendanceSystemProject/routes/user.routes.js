const router = require("express").Router();
const userController = require("../controller/user.controller");

router.get("/", userController.getAllUser);

module.exports = router;
