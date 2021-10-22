SELECT * FROM hr.employees;
SELECT MAX(salary) FROM hr.employees; -- 1

SELECT  MAX(salary) - MIN(salary) -- 2
FROM hr.employees;

SELECT  JOB_ID, AVG(salary) AS 'average_salary' -- 3
FROM hr.employees
GROUP BY JOB_ID
ORDER BY `average_salary` DESC;

SELECT SUM(salary) -- 4
FROM hr.employees;

SELECT 
    MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) -- 5
FROM
    hr.employees;
    
SELECT JOB_ID , COUNT(*) AS 'Trabalham' -- 6
FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

SELECT JOB_ID, SUM(salary) -- 7
FROM hr.employees
GROUP BY JOB_ID;

SELECT JOB_ID, SUM(salary) -- 8
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

SELECT job_id, AVG(salary) AS 'average_salary' -- 9
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary` DESC;

SELECT department_id, -- 10
    AVG(salary) 'average_salary' ,
    COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;

SELECT * ,REPLACE(PHONE_NUMBER,'515', '777') FROM hr.employees; -- 11

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777') -- 12
WHERE EMPLOYEE_ID IN('100');

SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8; -- 13

SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees; -- 14

SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees; -- 15

SELECT UCASE(FIRST_NAME) FROM hr.employees; -- 16

SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE YEAR(HIRE_DATE) = 1987;

SELECT first_name,
    last_name,
    DATEDIFF(CURRENT_DATE() , HIRE_DATE) AS 'dias trabalhado'
FROM hr.employees;