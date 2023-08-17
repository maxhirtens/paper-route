"use strict";

const db = require("../db.js");
const News = require("./news.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** create */

describe("create", function () {
  const date = "08-22-23";

  test("works", async function () {
    let job = await News.create(date);
    expect(job).toBeTruthy();
  });
});

/************************************** get */

describe("get", function () {
  test("works", async function () {
    let news = await News.get("08-15-23");
    expect(news.data.business).toEqual("business db content");
  });

  test("not found if no such date", async function () {
    let news = await News.get("09-19-99");
    expect(news).toEqual(null);
  });
});

/************************************** update */

describe("update", function () {
  test("works", async function () {
    let job = await News.update({
      date: "08-14-23",
      section: "arts",
      content: "arts db content replacement",
    });

    expect(job.arts).toEqual("arts db content replacement");
  });

  test("bad request with no data", async function () {
    try {
      await News.update({});
    } catch (err) {
      expect(err.routine).toMatch(/DateTime/);
    }
  });
});
