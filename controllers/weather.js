const axios = require("axios");
const { WEATHER_KEY } = process.env;

const getWeather = async (req, res) => {
  const { q, units } = req.query;

  const URL = `https://api.openweathermap.org/data/2.5/weather`;
  const params = { q, units, appid: WEATHER_KEY };
  try {
    const resp = await axios.get(URL, { params });
    res.json(resp.data);
  } catch (err) {
    console.log(`error`);
    res.status(500).json(err);
  }
};

module.exports = {
  getWeather,
};
