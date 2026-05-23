const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoutes = require("./routes/authRouter");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// DB connect
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;