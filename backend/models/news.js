"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");

class News {
  /** Given a date, return all that date's data if saved to DB.
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

    if (!data) return null;

    return { data: data };
  }

  // Insert today's news API data to DB.
  static async update(data) {
    console.log("writing info to DB:" + data.section);
    const result = await db.query(
      `UPDATE news 
                      SET ${data.section} = '${data.content}'
                      WHERE newsdate = '${data.date}'
                      RETURNING *`
    );
    let res = result.rows[0];

    return res;
  }
}

module.exports = News;
