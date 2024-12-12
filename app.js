const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const formRoutes = require("./routes/formRoutes");
const responseRoutes = require("./routes/responseRoutes");

const app = express();
const options = {
  origin: "*",
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
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });
