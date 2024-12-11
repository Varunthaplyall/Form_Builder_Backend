const express = require("express");
const router = express.Router();
const formController = require("../controller/formController");
const { validateForm } = require("../middleware/formValidation");

router.post("/new", formController.createForm);
router.get("/all", formController.getAllForms);
router.get("/:id", formController.getFormById);

module.exports = router;
