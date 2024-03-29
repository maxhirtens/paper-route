// Express app for Quickereader.
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

const summarizeRoutes = require("./routes/summarize");
const articlesRoutes = require("./routes/articles");

app.use("/summarize", summarizeRoutes);
app.use("/articles", articlesRoutes);

/** Handle 404 errors -- this matches everything */
// app.use(function (req, res, next) {
//   return next(new NotFoundError());
// });

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;
  const body = req.body;

  return res.status(status).json({
    error: { message, status, body },
  });
});

module.exports = app;
