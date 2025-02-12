/** ChatGPT route. */
// some inspiration from https://blog.bitsrc.io/interacting-with-openai-in-node-js-and-express-647e771fc4ad
import { Router } from "express";
import OpenAI from "openai";
import { BadRequestError } from "../expressError.js";
import Summaries from "../models/Summaries.js";

const router = new Router();

// Configure OpenAI API client with our key from .env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
  project: process.env.OPENAI_PROJECT_ID,
});

// POST request to ChatGPT.
router.post("/", async (req, res, next) => {
  // getting content from request body.
  const { message } = req.body[0];

  // get user choices too.
  const { paper, section, manner } = req.body[1];

  let content = `Summarize today's top ${paper} ${section} content you are given ${manner}`;

  try {
    if (message == null) {
      throw new BadRequestError("No articles were provided.");
    }

    // get a response from chatgpt.
    const response = await openai.chat.completions.create({
      model: "o1-mini",
      messages: [
        {
          role: "assistant",
          content: content,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_completion_tokens: 1024,
    });

    // retrieve the answer text.
    const completion = response.choices[0].message.content;

    // Save the summary to the database
    if (!completion) {
      throw new BadRequestError("No summary was generated. Try again.");
    }

    await Summaries.create({
      newsdate: new Date(),
      source: paper,
      section,
      manner,
      message,
      summary: completion,
    });

    // return the result
    return res.status(200).json({
      success: true,
      message: completion,
    });
  } catch (error) {
    // Enhanced error handling
    console.error("Error:", error);

    if (error.response) {
      // OpenAI API error
      return next(
        new Error(`OpenAI API error: ${error.response.data.error.message}`)
      );
    } else {
      // Network or other error
      return next(error);
    }
  }
});

export default router;
