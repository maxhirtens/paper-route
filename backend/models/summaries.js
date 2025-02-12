import { pool } from "../db.js";
import { v4 as uuidv4 } from "uuid";

class Summaries {
  // Create new date row for DB.
  static async create({ newsdate, source, section, manner, message, summary }) {
    const id = uuidv4();
    const result = await pool.query(
      `INSERT INTO summaries (id, newsdate, source, section, manner, message, summary)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [id, newsdate, source, section, manner, message, summary]
    );

    console.log("inserted summary to db", result);

    const datares = result.rows[0];

    if (!datares) return null;

    return { data: datares };
  }

  // Get all summary entries.
  static async getAll() {
    console.log("fetching the 5 most recent summaries from DB");
    const result = await pool.query(
      `SELECT * FROM summaries ORDER BY created_at DESC LIMIT 5`
    );

    const data = result.rows;

    if (!data || data.length === 0) return null;

    return { data: data };
  }
}

export default Summaries;
