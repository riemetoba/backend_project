// require('node:dns').setServers(['1.1.1.1','8.8.8.8'])
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dbConnection = require("./config/dbConnection");
const authRoute = require("./routes/authRoute");
const { swaggerUi, specs } = require("./config/swagger");
const { generalLimiter } = require("./utils/rateLimiter");

// ===================

dbConnection();

// rate-limit 

app.use(generalLimiter);

// rate-limit 


app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


//for express routes =============================

app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello Browser");
});

//for express routes =============================

app.listen(5000, () => {
  console.log("Server is running");
});
