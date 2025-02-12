import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import summarizeRoutes from "./routes/summarize.js";
import articlesRoutes from "./routes/articles.js";
import recentSummariesRoutes from "./routes/recentsummaries.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

class NotFoundError extends Error {
  constructor(message = "Not Found") {
    super(message);
    this.status = 404;
  }
}

app.use("/summarize", summarizeRoutes);
app.use("/articles", articlesRoutes);
app.use("/recentsummaries", recentSummariesRoutes);

/** 404 handler */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

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

export default app;
