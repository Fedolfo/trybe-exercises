SELECT "This is SQL Exercise, Practice and Solution" AS 'exercise1';
SELECT '1' AS 'one', '2' AS 'two', '3' AS 'three', CONCAT('one', ' ', 'two', ' ', 'three') AS 'exercise2';
SELECT 10 + 15 AS 'exercise3';
SELECT (21 / 7) AS 'exercise4';

SELECT * FROM Scientists.Scientists; # exercise 5

SELECT * FROM Scientists.Projects;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects; # exercise 6

SELECT * FROM Scientists.Scientists ORDER BY Name ASC; # exercise 7

SELECT * FROM Scientists.Projects ORDER BY Name DESC; # exercise 8

SELECT * FROM Scientists.Projects; 
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluido') AS 'Phrase' FROM Scientists.Projects; # exercise 9
# output 'O projeto Winds: Studying Bernoullis Principle precisou de 156 horas para ser concluido'

SELECT * FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3; # exercise 10

SELECT DISTINCT Scientist, Project FROM  Scientists.AssignedTo; # exercise 11

SELECT * FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1; # exercise 12

SELECT * FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1 OFFSET 1;# exercise 13

SELECT * FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5; # exercise 14

SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') AS 'Phrase' FROM Scientists.Scientists; # exercise 15
