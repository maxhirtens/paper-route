"use strict";

/** Get articles route. */

const express = require("express");
const { BadRequestError } = require("../expressError");
const router = new express.Router();
const BASE_URL = "https://api.nytimes.com/svc/topstories/v2/";
const NYT_API_KEY = ".json?api-key=" + process.env.NYT_API_KEY;
const axios = require("axios");

// GET request to news source.
router.get("/:section", async (req, res, next) => {
  try {
    const section = req.params.section;
    let frontPage = await axios.get(`${BASE_URL}${section}${NYT_API_KEY}`);
    console.log(frontPage);
    // return the result
    return res.status(200).json({
      success: true,
      message: frontPage.data,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
