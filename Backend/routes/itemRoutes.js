const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { protect } = require("../middleware/authMiddleware");
const { addItem, getAllItems, getMyItems, getItemById } = require("../controllers/itemControllers");

router.post("/", protect,upload.array("images", 5), addItem);
router.get("/", getAllItems);
router.get("/mine", protect, getMyItems);
router.get("/:id", getItemById);

module.exports = router;
