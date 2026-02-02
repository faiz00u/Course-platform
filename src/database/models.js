const mongoose = require("./db");

const UserSchema = new mongoose.Schema({
  telegram_id: String,
  course_id: String,
  paid: Boolean,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
