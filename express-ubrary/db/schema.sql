DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(171) NOT NULL, 
  author VARCHAR(24) NOT NULL,
  average_rating NUMERIC(4,2) NOT NULL,
  number_of_pages INTEGER  NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON books (author);

DROP TABLE IF EXISTS favs;

CREATE TABLE favs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(171) NOT NULL, 
  author VARCHAR(24) NOT NULL,
  average_Rating NUMERIC(4,2) NOT NULL,
  number_of_pages INTEGER  NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON favs (author);

DROP TABLE IF EXISTS reads;

CREATE TABLE read (
  id SERIAL PRIMARY KEY,
  title VARCHAR(171) NOT NULL, 
  author VARCHAR(24) NOT NULL,
  average_rating NUMERIC(4,2) NOT NULL,
  number_of_pages INTEGER  NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON read (author);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL, 
  review VARCHAR(500) NOT NULL,
  rating NUMERIC(4,2) NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON reviews (title);

