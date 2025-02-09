var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const logger = require("./logger");
const statusMonitor = require("express-status-monitor");
const client = require("prom-client");

const PORT = process.env.PORT || 4000;
var startPage = "index.html";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(express.static("./public"));

app.use(statusMonitor());

// Prometheus Metrics Setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status_code"],
});
register.registerMetric(httpRequestCounter);

// Middleware to track request counts
app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.path,
      status_code: res.statusCode,
    });
  });
  next();
});

// Expose Prometheus Metrics
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

// API Routes
const { addGame } = require("./util/sheng-yang-backend");
app.post("/add-game", addGame);

const { getGames, editGame, deleteGame } = require("./util/zhixiang-backend");
app.get("/get-games", getGames);
app.put("/edit-game/:id", editGame);
app.delete("/delete-game/:id", deleteGame);

const { viewGames } = require("./util/justin-backend");
app.get("/view-game", viewGames);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + startPage);
});

// Start the server
server = app.listen(PORT, function () {
  const address = server.address();
  const baseUrl = `http://${
    address.address == "::" ? "localhost" : address.address
  }:${address.port}`;

  console.log(`Project hosted at: ${baseUrl}`);
  logger.info(`Demo project at: ${baseUrl}!`);
  logger.error(`Example or error log`);
});

module.exports = { app, server };
