CREATE TABLE vocab_sets(
  ID SERIAL PRIMARY KEY,
  set_name VARCHAR(299),
  folder_id INTEGER REFERENCES folders(id) ON DELETE CASCADE
);