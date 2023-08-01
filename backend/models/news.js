"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");

class News {
  /** Given a section name, return it's data if saved to DB.
   *
   * Throws NotFoundError if not found.
   **/

  static async get(id) {
    const newsRes = await db.query(
      `SELECT sports
           FROM news
           WHERE id = $1`,
      [id]
    );

    const data = newsRes.rows[0];

    if (!data) throw new NotFoundError(`No news: ${handle}`);

    return data;
  }
}

module.exports = News;
