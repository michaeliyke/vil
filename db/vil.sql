CREATE TABLE IF NOT EXISTS vil(
  id SERIAL PRIMARY KEY,
  url_link VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description_text TEXT NOT NULL,
  category_list TEXT NOT NULL,
  uuid VARCHAR(64) NOT NULL,
  user_uuid VARCHAR(64) DEFAULT NULL,
  time_stamp TIMESTAMP NOT NULL
  );

-- user_uuid VARCHAR(64) REFERENCES users(uuid),