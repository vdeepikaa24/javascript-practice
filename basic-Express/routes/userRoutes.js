const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const checkRole = require("../middleware/roleMiddleware");

router.get("/", checkRole(["Guest", "Member", "Admin"]), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", checkRole(["Member", "Admin"]), async (req, res) => {
  try {
    const { name, userId, role } = req.body;
    const newUser = new User({ name, userId, role });
    await newUser.save();
    res.json({ message: "User created successfully", data: newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:userId", checkRole(["Admin"]), async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ userId: req.params.userId });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully", data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
