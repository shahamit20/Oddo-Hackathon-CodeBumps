const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");
const { getPendingItem, approveditem, rejectItem } = require("../controllers/adminController");

router.get("/pending-items", protect, adminOnly, getPendingItem);
router.put("/item/:id/approve", protect, adminOnly, approveditem);
router.delete("/item/:id", protect, adminOnly, rejectItem);

module.exports = router;
