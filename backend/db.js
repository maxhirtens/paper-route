import pkg from "pg";
import { readFileSync } from "fs";

const { Pool } = pkg;

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    ca: readFileSync("ca.crt").toString(),
  },
});

export { pool };
