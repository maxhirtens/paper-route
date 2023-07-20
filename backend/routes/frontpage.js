"use strict";

/** News frontpage route. */

const express = require("express");
const { BadRequestError } = require("../expressError");
const router = new express.Router();
const BASE_URL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=";
const NYT_API_KEY = process.env.NYT_API_KEY;
const axios = require("axios");

// GET request to news source.
router.get("/", async (req, res, next) => {
  try {
    let frontPage = await axios.get(`${BASE_URL}${NYT_API_KEY}`);
    // console.log(frontPage.data);
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
