const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Member", "Guest"],
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
