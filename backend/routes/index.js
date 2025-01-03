const express = require("express");
const Route = express.Router();
var apiRouter = require("../routes/api/index");
var authRouter = require("../routes/auth");

Route.use("/auth", authRouter);
Route.use("/api", apiRouter);
// Route.use("/application", applicationRoute);

module.exports = Route;

