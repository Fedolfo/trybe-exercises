SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('sandy', 'robrson',10 ,'sandy@gmail.com', 2, 0,'eby', null),
('myFriend', 'cleyton',11 ,'cleytin@gmail.com', 2, 0,'el', null);

SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;
INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.customer
	WHERE customer_id between 10 AND 20;

SELECT * FROM sakila.category; 
INSERT INTO sakila.category (name)
VALUES
('Terror'),
('Comedia'),
('Ação');

SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);


