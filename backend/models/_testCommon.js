const db = require("../db.js");
const News = require("./news.js");

async function commonBeforeAll() {
  await db.query("DELETE FROM news");
  await News.create("08-14-23");
  await News.create("08-15-23");
  await News.create("08-16-23");
  await News.update({
    date: "08-14-23",
    section: "arts",
    content: "arts db content",
  });
  await News.update({
    date: "08-15-23",
    section: "business",
    content: "business db content",
  });
  await News.update({
    date: "08-16-23",
    section: "politics",
    content: "politics db content",
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
