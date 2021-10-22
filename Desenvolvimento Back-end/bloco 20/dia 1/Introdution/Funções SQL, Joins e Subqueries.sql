SELECT UCASE('trybe');
SELECT REPLACE( 'Você já ouviu falar do DuckDuckGo?','DuckDuckGo', 'Google?');
SELECT char_length('Uma frase qualquer');
SELECT substring('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

SELECT * FROM sakila.film;
SELECT title, IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film
WHERE film_id = 2;

SELECT
    title,
    rating,
    CASE
        WHEN rating = 'G' THEN  'Livre para todos'
         WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
          WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
           WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE  'Proibido para menores de idade'
    END AS 'público-alvo'
FROM sakila.film;
-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'
SELECT IF(15 MOD 2, 'par', 'ímpar') AS 'Par ou ímpar';
-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 220 DIV 12; -- 18
-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 220 MOD 12; -- 4

SELECT ROUND(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR( 39.494 );
SELECT CEIL(85.234);

SELECT DATE(now());
SELECT DATEDIFF('2030-01-20', '2021-10-20');
SELECT TIMEDIFF('11:00:00', '10:25:45');

SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
SELECT MIN(length) AS 'duração mínima ' FROM sakila.film;
SELECT MAX(length) AS 'duração máxima' FROM sakila.film;
SELECT SUM(length) AS 'soma de todas' FROM sakila.film;
SELECT COUNT(length) AS 'quantidade total ' FROM sakila.film;

