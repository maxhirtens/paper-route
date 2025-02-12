import express from "express";
import Summaries from "../models/Summaries.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("getting all recent summaries");
  try {
    const recentSummaries = await Summaries.getAll();
    return res.json({ data: recentSummaries });
  } catch (err) {
    return next(err);
  }
});

export default router;
