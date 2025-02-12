DROP TABLE IF EXISTS news;
DROP TABLE IF EXISTS summaries;

CREATE TABLE news (
  newsdate DATE PRIMARY KEY,
  source TEXT NOT NULL,
  home TEXT,
  arts TEXT,
  business TEXT,
  politics TEXT,
  technology TEXT,
  sports TEXT,
  world TEXT
);

CREATE TABLE summaries (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  newsdate DATE NOT NULL,
  source TEXT NOT NULL,
  section TEXT NOT NULL,
  manner TEXT NOT NULL,
  message TEXT NOT NULL,
  summary TEXT NOT NULL
);