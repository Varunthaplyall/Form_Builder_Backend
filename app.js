const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const formRoutes = require("./routes/formRoutes");
const responseRoutes = require("./routes/responseRoutes");

const frontendUrl =
  process.env.FRONTEND_URL ||
  "https://form-builder-frontend-n3b3ylae0-varunthaplyalls-projects.vercel.app";
const app = express();
const options = {
  origin: frontendUrl,
};

app.use(express.json());
app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/forms", formRoutes);
app.use("/api/v1/responses", responseRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });

module.exports = app;
