const db = require("../data/db");
const axios = require("axios");
const { WEATHER_KEY } = process.env;

// Gets passed the search params from React and hits the API end point
// Returns the data json or an error
const getWeather = async (req, res) => {
  const { q, units } = req.query;

  const URL = `https://api.openweathermap.org/data/2.5/weather`;
  const params = { q, units, appid: WEATHER_KEY };
  try {
    const resp = await axios.get(URL, { params });
    res.json(resp.data);
  } catch (err) {
    console.log(`error in getWeather`);
    res.status(500).json(err);
  }
};

// Send saved searches to the front end state
const getSearches = async (req, res) => {
  try {
    const data = await db("weather").orderBy("created_at", "desc");
    res.json(data);
  } catch (err) {
    console.log(`error in getSearches`);
    res.status(500).json(err);
  }
};

module.exports = {
  getWeather,
  getSearches,
};
