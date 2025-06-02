-- Active: 1748431368381@@127.0.0.1@3306@escola1
SELECT usuarios.nome, disciplinas.nome from usuarios JOIN
professores on  usuarios.id = professores.usuario_id join disciplinas on disciplinas.professor_id = professores.id;

SELECT * from usuarios;

SELECT * from professores

SELECT * from disciplinas