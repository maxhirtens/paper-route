"use strict";

/** Shared config for application; can be required many places. */

require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 4000;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return process.env.NODE_ENV === "test"
    ? "paper_route_test"
    : process.env.DATABASE_URL || "paper_route";
}

console.log("paper-route.app Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".red, PORT.toString());
console.log("Database:".blue, getDatabaseUri());
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  getDatabaseUri,
};
