CREATE TABLE houses
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  address VARCHAR(60),
  city VARCHAR(30),
  state VARCHAR(30),
  zip integer
);

INSERT INTO houses
(name, address, city, state, zip)
VALUES
('white house', '123 fake street', 'arlington', 'texas', 76017),
('black mansion', '579 not real street', 'denver', 'colorado', 62934),
('brown beach house', '423 beach ave', 'mexico city beach', 'florida', 43234),
