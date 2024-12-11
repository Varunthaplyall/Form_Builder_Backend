const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  title: { type: String },
  headerImage: { type: String },
  questions: [
    {
      type: {
        type: String,
        enum: ["categorize", "cloze", "comprehension"],
        required: true,
      },
      questionData: { type: Object, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Form", FormSchema);
