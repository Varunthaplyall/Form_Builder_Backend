const express = require("express");
require("dotenv").config();
const { PORT } = process.env;
const mongoose = require("mongoose");
const cors = require("cors");
const formRoutes = require("./routes/formRoutes");
const responseRoutes = require("./routes/responseRoutes");

const app = express();
const options = {
  origin: "http://localhost:5173",
};

app.use(express.json());
app.use(cors(options));

app.use("/api/v1/forms", formRoutes);
app.use("/api/v1/responses", responseRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
