const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  href: { type: String, required: true },
  imgSrc: { type: String, required: true },
});

module.exports = mongoose.model("Project", ProjectSchema);
