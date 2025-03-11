const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Interview Model
const InterviewSchema = new mongoose.Schema({
  title: String,
  questions: [String],
  recruiterId: mongoose.Schema.Types.ObjectId,
}, { timestamps: true });

const Interview = mongoose.model("Interview", InterviewSchema);

// Create Interview
router.post("/create", async (req, res) => {
  try {
    const interview = await Interview.create(req.body);
    res.status(201).json({ message: "Interview created", interview });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Interviews
router.get("/", async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
