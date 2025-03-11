const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  interviewId: { type: mongoose.Schema.Types.ObjectId, ref: "Interview" },
  videoUrl: String, // Candidate pastes a video link instead of uploading
  score: Number, // Only one evaluator for simplicity
  feedback: String
}, { timestamps: true });

module.exports = mongoose.model("Response", ResponseSchema);
