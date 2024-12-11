const Joi = require("joi");

const categorizeSchema = Joi.object({
  categories: Joi.array().items(Joi.string()).required(),
  description: Joi.string().required(),
  items: Joi.array()
    .items(
      Joi.object({
        text: Joi.string().required(),
        category: Joi.string().required(),
      })
    )
    .required(),
  type: Joi.string().valid("categorize").required(),
});

const clozeSchema = Joi.object({
  blanks: Joi.array().items(Joi.string()).required(),
  options: Joi.array().items(Joi.string()).required(),
  sentence: Joi.string().required(),
  type: Joi.string().valid("cloze").required(),
});

const comprehensionSchema = Joi.object({
  passage: Joi.string().required(),
  questions: Joi.array()
    .items(
      Joi.object({
        text: Joi.string().required(),
        options: Joi.array().items(Joi.string()).required(),
        correctAnswer: Joi.number().required(),
      })
    )
    .required(),
  type: Joi.string().valid("comprehension").required(),
});

const formSchema = Joi.object({
  title: Joi.string().min(3).optional(),
  headerImage: Joi.string().uri().optional(),
  questions: Joi.array()
    .items(
      Joi.object({
        type: Joi.string()
          .valid("categorize", "cloze", "comprehension")
          .required(),
        questionData: Joi.when("type", {
          is: "categorize",
          then: categorizeSchema,
          otherwise: Joi.when("type", {
            is: "cloze",
            then: clozeSchema,
            otherwise: comprehensionSchema,
          }),
        }),
      })
    )
    .required(),
});

module.exports = { formSchema };
