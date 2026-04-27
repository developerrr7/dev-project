const express = require("express");
const mongoose = require("mongoose");

const app = express();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB connected 🚀"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from DC's DevOps App 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
