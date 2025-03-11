const express = require("express");
const router = express.Router();




router.post("/:responseId/score", async (req, res) => {
    try {
      const { score, feedback } = req.body;
      const response = await Response.findById(req.params.responseId);
  
      if (!response) return res.status(404).json({ message: "Response not found" });
  
      response.score = score;
      response.feedback = feedback;
      await response.save();
  
      res.json({ message: "Evaluation submitted", response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;