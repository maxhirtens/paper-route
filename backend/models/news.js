import { pool } from "../db.js";

class News {
  // Select entire row of news excerpts by date.
  static async get(date) {
    const newsRes = await pool.query(
      `SELECT *
       FROM news
       WHERE newsdate = $1`,
      [date]
    );

    const data = newsRes.rows[0];

    if (!data) return null;

    return { data: data };
  }

  // Create new date row for DB.
  static async create(date) {
    console.log("creating new row in DB for: " + date);
    const result = await pool.query(
      `INSERT INTO news (newsdate, source)
       VALUES ($1, $2)
       RETURNING *`,
      [date, "The New York Times"]
    );

    const data = result.rows[0];

    if (!data) return null;

    return { data: data };
  }

  // Insert today's news excerpts data to DB.
  static async update(data) {
    console.log("writing info to DB: " + data.section);
    const result = await pool.query(
      `UPDATE news 
       SET ${data.section} = $1
       WHERE newsdate = $2
       RETURNING *`,
      [data.content, data.date]
    );
    let res = result.rows[0];

    return res;
  }

  // Delete a news entry by date.
  static async delete(date) {
    console.log("deleting row in DB for: " + date);
    const result = await pool.query(
      `DELETE FROM news
       WHERE newsdate = $1
       RETURNING *`,
      [date]
    );

    const data = result.rows[0];

    if (!data) return null;

    return { data: data };
  }
}

export default News;
