"use strict";

/** Get articles route. */

const express = require("express");
const { BadRequestError } = require("../expressError");
const router = new express.Router();
const BASE_URL = "https://api.nytimes.com/svc/topstories/v2/";
const NYT_API_KEY = ".json?api-key=" + process.env.NYT_API_KEY;
const News = require("../models/news");
const axios = require("axios");

// GET request to news source.
router.get("/:section", async (req, res, next) => {
  try {
    const section = req.params.section;
    let articles = await axios.get(`${BASE_URL}${section}${NYT_API_KEY}`);

    // return the result
    return res.status(200).json({
      success: true,
      message: articles.data,
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    let test = News.get(id);
    console.log("db route");

    // return the result
    return res.status(200).json({
      success: true,
      message: test,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
