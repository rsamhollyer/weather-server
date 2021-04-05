const db = require("../data/db");
const axios = require("axios");
const { OPEN_WEATHER_KEY } = process.env;

// Gets passed the search params from React and hits the API end point
// Returns the data json or an error
const getWeather = async (req, res) => {
  const { q, units } = req.query;

  const URL = `https://api.openweathermap.org/data/2.5/weather`;
  const params = { q, units, appid: OPEN_WEATHER_KEY };

  try {
    const resp = await axios.get(URL, { params });

    res.status(200).json(resp.data);
  } catch (err) {
    if (err.toString() === "Error: Request failed with status code 404") {
      res.status(404).send("This city was not found");
    } else {
      res
        .status(500)
        .send("Something went wrong with the request. Please try again.");
    }
  }
};

// Send saved searches to the front end state
const getSearches = async (req, res) => {
  try {
    const resp = await db("weather").orderBy("created_at", "desc");
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send("Something went wrong, please try again.");
  }
};

//Save search to DB
const saveSearch = async (req, res) => {
  const { city, temp, humidity } = req.body;
  try {
    const resp = await db("weather").insert({ city, temp, humidity });
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).send("Something went wrong, please try again.");
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
    res.status(500).send("Something went wrong, please try again.");
  }
};

module.exports = {
  getWeather,
  getSearches,
  saveSearch,
  deleteSearch,
};
