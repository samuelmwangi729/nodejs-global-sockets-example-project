const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const indexRouter = require("../Routers/index.router");
const morgan = require("morgan");

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(helmet());
app.use(morgan("dev"))
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use("/api/index", indexRouter);

app.use(( req, res, next) => {
  return res.status(404).json({
    status: "error",
    message: "path not found",
  });
});
module.exports = app;
