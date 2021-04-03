const express = require("express");
const router = express.Router();

const { weatherController } = require("../controllers");

router
  .get("/", weatherController.getWeather)
  .get("/saved", weatherController.getSearches);

module.exports = router;
