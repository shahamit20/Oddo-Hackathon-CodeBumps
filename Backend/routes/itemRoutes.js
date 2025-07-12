const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { additem, getAllitem, getMyitem, getItembyid } = require("../controllers/itemController");

router.post("/", protect, additem);
router.get("/", getAllitem);
router.get("/mine", protect, getMyitem);
router.get("/:id", getItembyid);

module.exports = router;
