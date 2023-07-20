"use strict";

/** ChatGPT route. */
// some inspiration from https://blog.bitsrc.io/interacting-with-openai-in-node-js-and-express-647e771fc4ad

const express = require("express");
const { BadRequestError } = require("../expressError");
const { Configuration, OpenAIApi } = require("openai");
const router = new express.Router();

// configure OpenAI API with our key from .env
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// new instance of OpenAPI API class.
const openai = new OpenAIApi(configuration);

// POST request to ChatGPT.
router.post("/", async (req, res, next) => {
  // getting prompt question from request
  const prompt = req.body.prompt;

  try {
    if (prompt == null) {
      throw new BadRequestError("No prompt was provided.");
    }

    // get a response from chatgpt.
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
    });
    console.log(response.data);

    // retrieve the answer text.
    const completion = response.data.choices[0].text;

    // return the result
    return res.status(200).json({
      success: true,
      message: completion,
    });
  } catch (error) {
    return next(err);
  }
});

module.exports = router;
