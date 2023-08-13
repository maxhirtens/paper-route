"use strict";

// Helper functions to clean up my routes.

function extract(articles) {
  articles = articles.data;
  let selects = articles.results;
  let top3 = selects.slice(0, 3);
  let top3Data = top3.map((c) => c.title + ": " + c.abstract);
  let top3joined = top3Data.join(" ");
  return top3joined;
}

module.exports = {
  extract,
};
