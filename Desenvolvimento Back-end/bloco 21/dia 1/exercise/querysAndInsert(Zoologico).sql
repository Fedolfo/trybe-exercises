USE Zoologico;
SELECT * FROM animais;
SELECT * FROM cuida_animal;
SELECT * FROM cuidadores;
SELECT * FROM gerentes;

INSERT INTO cuida_animal(id_cuidador, id_animal)
values(2,2);

INSERT INTO animais(nome_animal, sexo, idade, especie, localizacao)
values('TUGA', 'M', 13, 'ovelha','Norte');

INSERT INTO gerentes(nome_gerente)
values('José');

INSERT INTO cuidadores(nome_cuidador, id_gerente)
values('José olías', 3);