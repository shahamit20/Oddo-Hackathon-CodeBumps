const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { createSwap, getUser } = require("../controllers/swapController");

router.post("/", protect, createSwap);
router.get("/", protect, getUser);

module.exports = router;
