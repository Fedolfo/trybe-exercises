SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;

INSERT INTO Pixar.Movies(title, director, `year`, length_minutes) VALUES
('Monstros SA','Pete Docter',2001, 92),
('Procurando Nemo','John Lasseter', 2003, 107),
('Os Incríveis','Brad Bird',2004,  116),
('WALL-E','Pete Docter',2008, 104);

INSERT INTO Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales) VALUES
(10, 6.8,450000000, 370000000);

DELETE FROM Pixar.BoxOffice
WHERE movie_id IS NULL;

UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE id = 10;

UPDATE Pixar.Movies
SET title = 'Ratatouille', `year` = 2007
WHERE id = 3;

INSERT INTO Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales) VALUES
(8, 9.5,300000000, 250000000),
(11, 7.4,460000000, 510000000),
(12, 9.9,290000000, 280000000);

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (2, 10);

DELETE FROM Pixar.Movies
WHERE id  IN (2, 10);

SET SQL_SAFE_UPDATES = 1;

