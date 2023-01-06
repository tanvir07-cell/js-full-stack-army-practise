const router = require("express").Router();

const {
  fsController,
  aboutController,
  helpController,
} = require("./controllers");

router.get("/", fsController);

router.get("/about", aboutController);
router.get("/help", helpController);

module.exports = router;
