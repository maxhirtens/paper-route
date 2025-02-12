import { query, end } from "../db.js";
import { create, update } from "./news.js";

async function commonBeforeAll() {
  await query("DELETE FROM news");
  await create("08-14-23");
  await create("08-15-23");
  await create("08-16-23");
  await update({
    date: "08-14-23",
    section: "arts",
    content: "arts db content",
  });
  await update({
    date: "08-15-23",
    section: "business",
    content: "business db content",
  });
  await update({
    date: "08-16-23",
    section: "politics",
    content: "politics db content",
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
