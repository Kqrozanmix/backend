const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  updateInfoWeb,
  getInfo,
  creteHome,
} = require("../controller/infoWebCtrl");
const upload = require("../utils/multer");

router.put("/", upload.single("logo"), updateInfoWeb);
router.get("/", getInfo);
router.post("/", creteHome);
module.exports = router;
