require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
// Create a MongoClient
mongoose
  .connect(process.env.uri)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB!");
    console.error(error);
  });
