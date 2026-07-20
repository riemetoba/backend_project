const mongoose = require("mongoose");

let dbConnection = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.kxdszjc.mongodb.net/${process.env.MONGODB_DBNAME}?appName=Cluster0`
    )
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Database Connetion Error:", err);
    });
};

module.exports = dbConnection;
