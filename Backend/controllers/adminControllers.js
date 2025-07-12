const Item = require('../models/Item')

exports.getPendingItem = async (req, res) => {
    const item = await Item.find({ isApproved: false })
    res.json(item);
}

exports.approveditem = async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, { isApproved: true }, { new: true });
    res.json(item);
}

exports.rejectItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item rejected and removed" });
};