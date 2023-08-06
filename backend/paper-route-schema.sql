CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  newsdate DATE NOT NULL,
  source TEXT NOT NULL,
  homepage TEXT,
  arts TEXT,
  business TEXT,
  politics TEXT,
  technology TEXT,
  sports TEXT,
  world TEXT
);