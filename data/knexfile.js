require("dotenv").config();
// Update with your config settings.
module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_HOST,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

  staging: {
    client: "pg",
    connection: process.env.DB_HOST,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

  production: {
    client: "pg",
    connection: process.env.DB_HOST,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
