"use strict";

/** Get articles route. */

const express = require("express");
const { BadRequestError } = require("../expressError");
const router = new express.Router();
const BASE_URL = "https://api.nytimes.com/svc/topstories/v2/";
const NYT_API_KEY = ".json?api-key=" + process.env.NYT_API_KEY;
const News = require("../models/news");
const axios = require("axios");

// GET request to news source, retrieving cached or live articles.
router.get("/:section", async (req, res, next) => {
  try {
    const section = req.params.section;
    const date = new Date().toJSON();
    let articles;

    // check if news data already stored in local DB.
    const dbRes = await News.get(date);

    const dbArticles = dbRes.data;

    const dbSectionData = dbArticles[section];
    console.log(dbSectionData);

    // query news API if it's not.
    if (dbSectionData == null) {
      articles = await axios.get(`${BASE_URL}${section}${NYT_API_KEY}`);
      articles = articles.data;
    } else {
      articles = dbSectionData;
    }

    // return the result
    return res.status(200).json({
      success: true,
      message: articles,
    });
  } catch (error) {
    return next(error);
  }
});

// test route to check if DB is working, not for users.
router.get("/db/:id", async function (req, res, next) {
  console.log("------------getting from DB--------------");
  try {
    const articles = await News.get(req.params.id);
    return res.json({
      success: true,
      message: articles,
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
