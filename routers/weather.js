const express = require("express");
const router = express.Router();

const { weatherController } = require("../controllers");

router
  .get("/", weatherController.getWeather)
  .get("/saved", weatherController.getSearches)
  .post("/save", weatherController.saveSearch)
  .delete("/delete/:weatherId", weatherController.deleteSearch);

module.exports = router;
