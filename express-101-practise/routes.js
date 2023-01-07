const morgan = require("morgan");

const router = require("express").Router();
router.use(morgan("dev"));

const { homeController, aboutController } = require("./controllers");

router.get("/", homeController);
router.get("/about", aboutController);

module.exports = router;
