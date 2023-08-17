"use strict";

const request = require("supertest");

const app = require("../app");

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

/************************************** GET /:section */

describe("GET /articles/:section", function () {
  test("reset works", async function () {
    const section = "sports";
    const resp = await request(app).get(`/articles/${section}`);
    expect(resp.body).toEqual({
      message: "",
      success: true,
    });
  });

  test("world route from DB works", async function () {
    const section = "world";
    const resp = await request(app).get(`/articles/${section}`);
    expect(resp.body).toEqual({
      message: "world test content",
      success: true,
    });
  });

  test("politics API call works", async function () {
    const section = "politics";
    const resp = await request(app).get(`/articles/${section}`);

    expect(resp.body).not.toEqual({
      message: "",
      success: true,
    });
  });

  test("not found", async function () {
    const resp = await request(app).get(`/articles/bananas`);
    console.log(resp.body);
    expect(resp.body.message).toBeUndefined();
  });
});
