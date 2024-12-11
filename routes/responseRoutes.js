const express = require("express");
const router = express.Router();
const responseController = require("../controller/responseController");

router.post("/", responseController.createResponse);

module.exports = router;
