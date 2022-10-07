const express = require("express");
const { hello, askInput, attainedInput } = require("../controllers/weather");
const router = express.Router();

router.get("/", askInput);
router.post("/", attainedInput);

module.exports = router;
