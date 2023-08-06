"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");

class News {
  /** Given a section name, return it's data if saved to DB.
   *
   * Throws NotFoundError if not found.
   **/

  static async get(date) {
    const newsRes = await db.query(
      `SELECT *
           FROM news
           WHERE newsdate = $1`,
      [date]
    );

    const data = newsRes.rows[0];

    if (!data) throw new NotFoundError(`No news: ${handle}`);

    return { data: data };
  }
}

module.exports = News;
