require("dotenv").config();

// Getting Express ready
const http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
const server = http.createServer(app);
const logger = morgan("dev");
const PORT = 9999;
const HOST = "localhost";

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(logger);

server.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
