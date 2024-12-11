const Form = require("../model/form.model");

const createForm = async (req, res) => {
  try {
    const { title, headerImage, questions } = req.body;
    const newForm = new Form({
      title,
      headerImage,
      questions,
    });
    await newForm.save();
    res
      .status(201)
      .json({ message: "Form created successfully", form: newForm });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    res.status(200).json(form);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { createForm, getFormById, getAllForms };
