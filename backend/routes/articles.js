"use strict";

/** Get articles route. */

const express = require("express");
const { BadRequestError } = require("../expressError");
const router = new express.Router();
const BASE_URL = "https://api.nytimes.com/svc/topstories/v2/";
const NYT_API_KEY = ".json?api-key=" + process.env.NYT_API_KEY;
const News = require("../models/news");
const axios = require("axios");

// POST route to send API data to local DB.
// router.patch("/", async function (req, res, next) {
//   console.log("writing to DB...");
//   try {
//     const data = await News.update(req.body);
//     return res.status(201).json({ data });
//   } catch (err) {
//     return next(err);
//   }
// });

// GET request to news source, retrieving cached or live articles.
router.get("/:section", async (req, res, next) => {
  try {
    const section = req.params.section;
    const date = new Date().toJSON();
    let articles;

    // check if news section data is already stored in local DB.
    const dbRes = await News.get(date);
    const dbArticles = dbRes.data;
    const dbSectionData = dbArticles[section];

    // then extract it's data or start new API search.
    if (dbSectionData !== null) {
      console.log("obtained news from DB");
      articles = dbSectionData;
    } else {
      // query news API.
      console.log("querying API");
      articles = await axios.get(`${BASE_URL}${section}${NYT_API_KEY}`);
      articles = articles.data;

      // extract just text contents.
      let selects = articles.results;
      let top3 = selects.slice(0, 3);
      let top3Data = top3.map((c) => c.title + ": " + c.abstract);
      let top3joined = top3Data.join(" ");
      articles = top3joined;

      // send to local DB, do i need to await this?
      News.update({
        date: date,
        section: section,
        content: articles,
      });
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
