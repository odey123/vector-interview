require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(errorHandler);

// Database Connection
const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString)
  .then(() => console.log('Database connection is ready...'))
  .catch((err) => console.error('Database connection error:', err));
  

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/interviews", require("./routes/interviewRoutes"));
app.use("/api/evaluation", require("./routes/evaluationRoutes"))
app.use("/api/response", require("./routes/responseRoutes"))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
