const express = require('express');
const cors = require("cors");
const userRoutes = require("./authRouter");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/users", userRoutes);
module.exports = app;