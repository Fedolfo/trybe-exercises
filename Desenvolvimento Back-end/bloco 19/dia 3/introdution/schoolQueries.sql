use sakila;
SELECT * FROM film;
SELECT title, description, release_year, rental_duration FROM film;
# select title, description, release_year and rental_duration the sakila.film;
SELECT COUNT(film_id) FROM film;
# thousand(1000) registered movies
SELECT DISTINCT * FROM actor;
SELECT DISTINCT last_name FROM actor;
# filters only a single last name in the column
# filtra apenas um unico sobrenome na coluna
SELECT COUNT(last_name) FROM actor;
# have two hundred(200) last name
SELECT * FROM actor;
ORDER BY fist_name ASC, last_name DESC;
# does in ascending order is the other in descending order
# faz em ordem crescente é o outro em ordem decrescente
SELECT * FROM language LIMIT 5 OFFSET 1;
# take the first 5 and remove the first and assign the value 6, 2 and 6
# pega as 5 primeira e retira o primeiro é atribui o 6 valor, 2 e 6.

SELECT title, description, release_year, rental_duration, rental_rate FROM film LIMIT 20
# Create a query to find the top 20 movies, including title, year of release, duration, rating, and replacement cost. Sort the results by the movies with the longest duration and then the lowest replacement cost.
