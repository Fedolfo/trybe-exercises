-- 1
SELECT a.actor_id, a.first_name, f.actor_id FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;

-- 2
SElECT s.first_name, s.last_name, a.address FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.staff_id = a.address_id;

-- 3
SELECT c.customer_id AS 'ID', a.address_id AS 'id_address',
concat(c.first_name, ' ', c.last_name) AS 'name', c.email AS 'e-mail', a.address AS 'address' FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.customer_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;
-- Two format
SELECT 
    C.customer_id,
    C.first_name,
    C.email,
    C.address_id,
    A.address
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

-- 4
SELECT 
    c.customer_id AS 'ID',
    c.address_id AS 'id_address',
    c.first_name,
    c.last_name,
    a.address AS 'address',
    c.email AS 'e-mail',
    a.district AS 'district'
FROM
    sakila.customer AS c
        INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
    WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

-- 5
SELECT 
    c.first_name,
    count(a.address) AS 'address'
FROM
    sakila.customer AS c
        INNER JOIN
    sakila.address AS a ON c.customer_id = a.address_id
    WHERE c.active = 1
    group by c.first_name
    ORDER BY c.first_name DESC;
    -- ----------------------------------------------------------------------------------
-- 6 
SELECT * FROM sakila.payment;
SELECT s.* FROM sakila.staff AS s;
SELECT concat(s.first_name, ' ', s.last_name) AS 'name', AVG(p.amount) AS 'media' FROM sakila.staff s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
group by name;

-- 7
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film;
SELECT * FROM sakila.film_actor;

SELECT 
    a.actor_id, a.first_name, f.film_id, f.title
FROM
    sakila.actor AS a
        INNER JOIN
    sakila.film_actor AS fa ON a.actor_id = fa.actor_id
        INNER JOIN
    sakila.film AS f ON f.film_id = fa.film_id;
    
-- SELF JOIN
 -- 1
SELECT 
    A.film_id, A.replacement_cost, B.film_id, B.replacement_cost
FROM
    sakila.film AS A,
    sakila.film AS B
WHERE
    A.replacement_cost = B.replacement_cost;
    
-- 2
SELECT 
    A.title, A.rental_duration, B.title, B.rental_duration
FROM
    sakila.film AS A,
    sakila.film AS B
WHERE
    A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;

-- UNION AND UNION ALL
-- 1
SELECT first_name, last_name FROM sakila.actor
UNION ALL
SELECT first_name, last_name FROM sakila.staff;

-- 2

SELECT first_name FROM sakila.customer where first_name like '%tracy%'
UNION ALL
SELECT first_name FROM sakila.actor where first_name like '%je%';

-- 3
(SELECT first_name FROM sakila.actor
ORDER BY actor_id DESC LIMIT 5) 
UNION 
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION 
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15) 
ORDER BY first_name;

-- 4
(SELECT first_name, last_name FROM sakila.customer
ORDER BY first_name , last_name LIMIT 60) 
UNION 
(SELECT  first_name, last_name FROM sakila.actor
ORDER BY first_name , last_name LIMIT 60) 
ORDER BY first_name , last_name LIMIT 15 OFFSET 45;

-- EXISTS
-- 1
SELECT * FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;

SELECT B.id, B.title FROM hotel.Books as B
WHERE not exists (
	SELECT * FROM hotel.Books_Lent
    WHERE B.id = book_id
);

-- 2

SELECT B.id, B.title FROM hotel.Books as B

WHERE exists (
	SELECT * FROM hotel.Books_Lent
    WHERE B.id = book_id and B.title like '%lost%'
);

-- 3
SELECT * from hotel.Customers;
SELECT * from hotel.CarSales;

SELECT C.CustomerID, `Name` from hotel.Customers as C
WHERE exists (
	SELECT * FROM hotel.CarSales
    WHERE CustomerID  = C.CustomerID
);
-- CustomerID  = C.CustomerID  C.CustomerID = CustomerID

-- 4 
SELECT cus.name, car.name FROM hotel.Cars AS car
INNER JOIN hotel.Customers AS cus
WHERE EXISTS( 
    SELECT * FROM hotel.CarSales
	WHERE CustomerID = cus.CustomerId AND carID = car.ID
);
