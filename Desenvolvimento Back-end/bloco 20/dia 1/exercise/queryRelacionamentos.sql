SELECT c.city, c.country_id, ct.country FROM sakila.city AS c
INNER JOIN sakila.country AS ct
ON c.country_id = ct.country_id;
# o relação da tabela city com a tabela country, é uma relação N:1. Onde temos varias cidades é um pais por cidades
# essa query tem um relacionamento N:1

# A tabela actor tem uma relação 1:N com a tabela film_actor, onde um ator pode fazer varios filmes