const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  icon: { type: [String], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Skill", SkillSchema);
