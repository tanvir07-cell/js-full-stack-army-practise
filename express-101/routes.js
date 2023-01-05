const router = require("express").Router();

const { fsController, aboutController } = require("./controllers");

router.get("/", fsController);

router.get("/about", aboutController);

module.exports = router;
