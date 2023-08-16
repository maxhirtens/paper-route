"use strict";

const db = require("../db.js");
const News = require("../models/news");
const date = new Date().toJSON();

async function commonBeforeAll() {
  await db.query("DELETE FROM news");
  await News.create(date);
  await News.update({
    date: date,
    section: "world",
    content: "world test content",
  });
  await News.update({
    date: date,
    section: "sports",
    content: "",
  });
}

async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
};
