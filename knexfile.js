require("dotenv").config({ path: "./.env" });

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: __dirname + "/data/migrations",
    },
    seeds: {
      directory: __dirname + "/data/seeds",
    },
  },

  staging: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: __dirname + "/data/migrations",
    },
    seeds: { directory: __dirname + "/data/seeds" },
  },

  production: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: __dirname + "/data/migrations",
    },
    seeds: { directory: __dirname + "/data/seeds" },
  },
};
