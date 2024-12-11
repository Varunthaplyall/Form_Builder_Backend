const { formSchema } = require("../validation/validate");

const validateForm = (req, res, next) => {
  const { categories, cloze, comprehension } = req.body;
  console.log(categories, cloze, comprehension);
  const { error } = formSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { validateForm };
