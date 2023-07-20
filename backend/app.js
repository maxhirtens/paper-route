// Express app for Quickereader.
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const { NotFoundError } = require("./expressError");
const { authenticateJWT } = require("./middleware/auth");

// const authRoutes = require("./routes/auth");
const summarizeRoutes = require("./routes/summarize");
const frontpageRoutes = require("./routes/frontpage");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT);

// app.use("/auth", authRoutes);
app.use("/summarize", summarizeRoutes);
app.use("/frontpage", frontpageRoutes);

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
