const Response = require("../model/responses.model");

const createResponse = async (req, res) => {
  try {
    const { formId, responses } = req.body;
    const newResponse = new Response({ formId, responses });
    await newResponse.save();
    res.status(201).json({
      message: "Response created successfully",
      response: newResponse,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { createResponse };
