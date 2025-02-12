import { query, end } from "../db.js";
import { create, update } from "../models/news";

const date = new Date().toJSON();

async function commonBeforeAll() {
  await query("DELETE FROM news");
  await create(date);
  await update({
    date: date,
    section: "world",
    content: "world test content",
  });
  await update({
    date: date,
    section: "sports",
    content: "",
  });
}

async function commonBeforeEach() {
  await query("BEGIN");
}

async function commonAfterEach() {
  await query("ROLLBACK");
}

async function commonAfterAll() {
  await end();
}

export default {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
};
