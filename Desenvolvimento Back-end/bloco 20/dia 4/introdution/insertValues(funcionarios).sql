SELECT * FROM `database(funcionarios)`.contatos_funcionarios;
SELECT * FROM `database(funcionarios)`.funcionarios;
SELECT * FROM `database(funcionarios)`.setores;

USE `database(funcionarios)`;
INSERT INTO funcionarios(nome, sobrenome, data_cadastro, id_setor)
values
('Joseph', 'Rodrigues', '2020-05-05 08:50:25', 6),
('André', 'Freeman', '5 de Fevereiro de 2020', 7),
('Cíntia', 'Duval', '2020-05-05 10:55:35', 8),
('Fernanda', 'Mendes', '2020-05-05 11:45:40', 9);

INSERT INTO setores(nome_setor)
values
('Administração, Vendas'),
('Operacional'),
('Estratégico, Vendas'),
('Marketing');


INSERT INTO contatos_funcionarios(id_funcionario, `e-mail`, telefone)
values
(5,'jo@gmail.com
', '(35)998552-1445'),
(6,'andre1990@gmail.com
', '(47)99522-4996'),
(7,'cindy@outlook.com
', '(33)99855-4669'),
(8,'fernandamendes@yahoo.com', 
'(33)99200-1556');