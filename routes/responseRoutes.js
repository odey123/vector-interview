const express = require("express");
const router = express.Router();

router.post("/submit/:interviewId", async (req, res) => {
    try {
      const { candidateId, videoUrl } = req.body;
  
      if (!videoUrl) return res.status(400).json({ message: "Video link required" });
  
      const response = await Response.create({ candidateId, interviewId: req.params.interviewId, videoUrl });
  
      res.status(201).json({ message: "Video submitted successfully", response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;