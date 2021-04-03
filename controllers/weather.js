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
    res.status(200).json(resp.data);
  } catch (err) {
    console.log(`error in getWeather ${err}`);
    res.json({
      status: 400,
      error: err.toString(),
    });
  }
};

// Send saved searches to the front end state
const getSearches = async (req, res) => {
  try {
    const resp = await db("weather").orderBy("created_at", "desc");
    res.status(200).json(resp);
    console.log(`getsearches response`, resp);
  } catch (err) {
    console.log(`error in getSearches ${err}`);
    res.json({
      status: 400,
      error: err.toString(),
    });
  }
};

//Save search to DB
const saveSearch = async (req, res) => {
  const { city, temp, humidity } = req.body;
  try {
    const resp = await db("weather").insert({ city, temp, humidity });
    console.log(`saveSearch response`, resp);
    res.json({
      status: `Success`,
    });
  } catch (err) {
    res.json({
      status: 400,
      error: err.toString(),
    });
  }
};

//Delete specific record
const deleteSearch = async (req, res) => {
  const { weatherId } = req.params;
  try {
    const resp = await db("weather").where("id", weatherId).del();
    res.json({
      status: `Success`,
    });
  } catch (err) {
    console.log(`error in deleteSearch : ${err}`);
    res.json({
      status: 400,
      error: err.toString(),
    });
  }
};

module.exports = {
  getWeather,
  getSearches,
  saveSearch,
  deleteSearch,
};
