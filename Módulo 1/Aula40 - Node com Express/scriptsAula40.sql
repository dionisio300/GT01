/*
usuarios
Crie uma tabela para armazenar os usuários do sistema:
id: inteiro, chave primária, auto incremento
username: texto de até 50 caracteres, único, obrigatório
senha: texto de até 255 caracteres, obrigatório
nome: texto de até 100 caracteres, obrigatório
ativo: booleano, padrão verdadeiro (true)
tipo: texto com os valores possíveis:
'admin', 'aluno' ou 'professor'
*/

create database escola1;
use escola1;

CREATE Table usuarios (
    id int PRIMARY key AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(255) not null,
    nome varchar(100) not null,
    ativo BOOLEAN DEFAULT true,
    tipo ENUM ('admin','aluno','professor')
);

/*
 alunos
id: inteiro, chave primária, auto incremento
usuario_id: inteiro, chave estrangeira para usuarios(id), única
matricula: texto de até 20 caracteres, único, obrigatório
data_nascimento: data
turma_id: inteiro, chave estrangeira para turmas(id)
*/

CREATE Table alunos (
    id int PRIMARY key AUTO_INCREMENT,
    usuario_id int UNIQUE,
    matricula VARCHAR(20) not null UNIQUE,
    data_nascimento DATE,
    turma_id int,
    Foreign Key (usuario_id) REFERENCES usuarios(id) on delete CASCADE,
    Foreign Key (turma_id) REFERENCES turmas(id) on delete CASCADE
);

/*
turmas
id: inteiro, chave primária, auto incremento
nome: texto de até 50 caracteres
ano: inteiro
*/
create table turmas(
    id int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    ano int
);

/*
 professores
id: inteiro, chave primária, auto incremento
especialidade: texto de até 100 caracteres
usuario_id: inteiro, chave estrangeira para usuarios(id), única
*/
CREATE Table professores(
    id int AUTO_INCREMENT PRIMARY key,
    especialidade VARCHAR(100),
    usuario_id int,
    Foreign Key (usuario_id) REFERENCES usuarios(id) on delete CASCADE
);

/*
disciplinas
id: inteiro, chave primária, auto incremento
nome: texto de até 50 caracteres
professor_id: inteiro, chave estrangeira para professores(id)
*/

create table disciplinas (
    id int PRIMARY key AUTO_INCREMENT,
    nome VARCHAR(50),
    professor_id int,
    Foreign Key (professor_id) REFERENCES professores(id) on delete CASCADE
);

/*
matriculas_disciplinas
Essa tabela representa as disciplinas em que os alunos estão matriculados.
id: inteiro, chave primária, auto incremento
aluno_id: inteiro, chave estrangeira para alunos(id)
disciplina_id: inteiro, chave estrangeira para disciplinas(id)
data_matricula: data
*/

CREATE Table matriculas_disciplinas (
    id int PRIMARY key AUTO_INCREMENT,
    aluno_id int,
    disciplina_id int,
    data_matricula DATE,
    Foreign Key (aluno_id) REFERENCES alunos(id) on delete CASCADE,
    Foreign Key (disciplina_id) REFERENCES disciplinas(id) on delete CASCADE
);


INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (1, 'user01', 'i&r2Fl9a)PuP', 'Isadora Melo', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (2, 'user02', '!0XNfE&n333k', 'Pietro Gomes', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (3, 'user03', 'c)s7mHpQR*aZ', 'Leandro Novaes', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (4, 'user04', '126IBwnX$K!E', 'Maria Julia Martins', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (5, 'user05', '_+t9dlYb334T', 'Vinicius Aragão', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (6, 'user06', '@CY0daI28wUo', 'Sr. Pietro Rezende', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (7, 'user07', '4^6R6wk!R@@@', 'Eloah Jesus', false, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (8, 'user08', 'eVXFXQsp!6HS', 'Luigi Alves', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (9, 'user09', '%3lWrxR8&pwL', 'Sr. Emanuel da Cruz', false, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (10, 'user10', 'KuJY8L$Z!5Df', 'Lorena Teixeira', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (11, 'user11', '*3QE$I3o^&Yy', 'Ana Vitória Peixoto', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (12, 'user12', 'WF^hurqg$@2I', 'Luiz Otávio da Rocha', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (13, 'user13', '#5rBuvuSQT(X', 'Joaquim Lima', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (14, 'user14', 'l%$J4Wa4!T7@', 'Isadora Nogueira', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (15, 'user15', '1#EIwIpbr%93', 'Ana Laura Campos', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (16, 'user16', 'Kr8!RZlt+m)b', 'Dr. João Vitor Rezende', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (17, 'user17', '$($yzB%rTi0p', 'João Gabriel Ferreira', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (18, 'user18', 'FaSS1Blj@ZU2', 'Melissa Pires', false, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (19, 'user19', '%I91KiSgA2GI', 'Noah Sales', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (20, 'user20', '^d2tvMtb93F7', 'Thomas Correia', true, 'aluno');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (21, 'user21', 'N&LQIPgn_2HI', 'Lorena Alves', true, 'professor');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (22, 'user22', '8n1@olp9_4kU', 'Cauã Pires', true, 'professor');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (23, 'user23', 'qX)c8CpyW!qK', 'Igor Rezende', true, 'professor');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (24, 'user24', 'h2jHUOqD%2kc', 'Luiz Felipe Novaes', true, 'professor');
INSERT INTO usuarios (id, username, senha, nome, ativo, tipo) VALUES (25, 'user25', 'BRYAenk5^GW4', 'Maria Vitória Rocha', false, 'professor');




INSERT INTO turmas (id, nome, ano) VALUES (1, 'Turma A', 2025);
INSERT INTO turmas (id, nome, ano) VALUES (2, 'Turma B', 2025);
INSERT INTO turmas (id, nome, ano) VALUES (3, 'Turma C', 2025);



INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (1, 1, '20250001', '2007-05-02', 3);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (2, 2, '20250002', '2015-05-27', 1);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (3, 3, '20250003', '2007-10-13', 1);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (4, 4, '20250004', '2009-11-15', 1);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (5, 5, '20250005', '2010-11-02', 1);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (6, 6, '20250006', '2015-05-11', 2);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (7, 7, '20250007', '2007-05-12', 1);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (8, 8, '20250008', '2007-10-26', 3);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (9, 9, '20250009', '2006-05-30', 3);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (10, 10, '20250010', '2008-02-29', 2);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (11, 11, '20250011', '2009-03-25', 1);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (12, 12, '20250012', '2014-07-09', 3);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (13, 13, '20250013', '2012-01-28', 1);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (14, 14, '20250014', '2006-11-24', 1);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (15, 15, '20250015', '2013-06-24', 2);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (16, 16, '20250016', '2006-08-03', 2);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (17, 17, '20250017', '2012-01-22', 3);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (18, 18, '20250018', '2010-09-28', 3);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (19, 19, '20250019', '2013-03-02', 1);
INSERT INTO alunos (id, usuario_id, matricula, data_nascimento, turma_id) VALUES (20, 20, '20250020', '2011-03-15', 1);



INSERT INTO professores (id, usuario_id, especialidade) VALUES (1, 21, 'Matemática');
INSERT INTO professores (id, usuario_id, especialidade) VALUES (2, 22, 'Português');
INSERT INTO professores (id, usuario_id, especialidade) VALUES (3, 23, 'História');
INSERT INTO professores (id, usuario_id, especialidade) VALUES (4, 24, 'Geografia');
INSERT INTO professores (id, usuario_id, especialidade) VALUES (5, 25, 'Ciências');



INSERT INTO disciplinas (id, nome, professor_id) VALUES (1, 'Disciplina 1', 5);
INSERT INTO disciplinas (id, nome, professor_id) VALUES (2, 'Disciplina 2', 1);
INSERT INTO disciplinas (id, nome, professor_id) VALUES (3, 'Disciplina 3', 5);
INSERT INTO disciplinas (id, nome, professor_id) VALUES (4, 'Disciplina 4', 1);
INSERT INTO disciplinas (id, nome, professor_id) VALUES (5, 'Disciplina 5', 2);
INSERT INTO disciplinas (id, nome, professor_id) VALUES (6, 'Disciplina 6', 5);
INSERT INTO disciplinas (id, nome, professor_id) VALUES (7, 'Disciplina 7', 2);
INSERT INTO disciplinas (id, nome, professor_id) VALUES (8, 'Disciplina 8', 1);
INSERT INTO disciplinas (id, nome, professor_id) VALUES (9, 'Disciplina 9', 5);
INSERT INTO disciplinas (id, nome, professor_id) VALUES (10, 'Disciplina 10', 5);




INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (1, 1, 10, '2025-05-11');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (2, 1, 4, '2025-05-05');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (3, 1, 5, '2025-05-15');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (4, 1, 7, '2025-05-14');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (5, 2, 4, '2025-05-24');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (6, 2, 1, '2025-05-19');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (7, 2, 5, '2025-05-23');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (8, 2, 6, '2025-05-04');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (9, 3, 3, '2025-05-07');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (10, 3, 8, '2025-05-06');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (11, 3, 5, '2025-05-03');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (12, 3, 10, '2025-05-18');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (13, 4, 4, '2025-05-06');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (14, 4, 7, '2025-05-11');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (15, 4, 1, '2025-05-16');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (16, 4, 3, '2025-05-01');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (17, 5, 9, '2025-05-25');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (18, 5, 3, '2025-05-08');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (19, 5, 4, '2025-05-14');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (20, 5, 10, '2025-05-01');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (21, 6, 10, '2025-05-06');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (22, 6, 3, '2025-05-06');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (23, 6, 2, '2025-05-02');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (24, 6, 9, '2025-05-28');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (25, 7, 6, '2025-05-18');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (26, 7, 5, '2025-05-21');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (27, 7, 4, '2025-05-13');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (28, 7, 3, '2025-05-21');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (29, 8, 3, '2025-04-29');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (30, 8, 4, '2025-05-07');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (31, 8, 9, '2025-05-04');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (32, 8, 1, '2025-05-11');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (33, 9, 10, '2025-05-20');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (34, 9, 4, '2025-05-11');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (35, 9, 3, '2025-05-18');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (36, 9, 1, '2025-05-20');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (37, 10, 7, '2025-05-18');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (38, 10, 3, '2025-05-25');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (39, 10, 9, '2025-05-23');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (40, 10, 5, '2025-05-04');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (41, 11, 3, '2025-05-07');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (42, 11, 10, '2025-05-15');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (43, 11, 5, '2025-05-23');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (44, 11, 7, '2025-05-22');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (45, 12, 6, '2025-05-27');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (46, 12, 4, '2025-05-15');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (47, 12, 8, '2025-05-04');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (48, 12, 1, '2025-05-21');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (49, 13, 2, '2025-05-15');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (50, 13, 9, '2025-05-10');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (51, 13, 1, '2025-05-21');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (52, 13, 7, '2025-05-11');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (53, 14, 4, '2025-05-06');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (54, 14, 7, '2025-05-17');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (55, 14, 1, '2025-05-03');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (56, 14, 8, '2025-05-18');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (57, 15, 7, '2025-05-01');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (58, 15, 4, '2025-05-04');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (59, 15, 3, '2025-05-24');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (60, 15, 5, '2025-05-22');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (61, 16, 1, '2025-04-29');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (62, 16, 8, '2025-05-14');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (63, 16, 6, '2025-05-19');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (64, 16, 9, '2025-05-02');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (65, 17, 9, '2025-05-14');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (66, 17, 5, '2025-04-29');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (67, 17, 2, '2025-05-02');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (68, 17, 7, '2025-05-18');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (69, 18, 8, '2025-05-10');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (70, 18, 5, '2025-05-05');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (71, 18, 2, '2025-05-27');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (72, 18, 1, '2025-05-15');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (73, 19, 7, '2025-05-09');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (74, 19, 9, '2025-05-13');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (75, 19, 1, '2025-05-27');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (76, 19, 10, '2025-05-10');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (77, 20, 3, '2025-05-07');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (78, 20, 4, '2025-05-09');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (79, 20, 1, '2025-05-10');
INSERT INTO matriculas_disciplinas (id, aluno_id, disciplina_id, data_matricula) VALUES (80, 20, 10, '2025-05-05');







select * from usuarios;
SELECT * from turmas;
SELECT * from alunos;
SELECT * from professores;
SELECT * from disciplinas;
SELECT * from matriculas_disciplinas;


-- 1. Listar todos os usuários ativos1. Listar todos os usuários ativos
-- 2. Buscar o nome dos alunos e a turma em que estão matriculados
-- 3. Listar o nome das disciplinas e o nome do professor responsável
-- 4. Mostrar os alunos matriculados em uma disciplina específica (ex: Matemática)
-- 5. Listar todas as disciplinas que um determinado aluno está cursando (ex: matrícula = '20230045')
-- 6. Contar quantos alunos estão matriculados em cada turma
-- 7. Mostrar o nome de todos os professores que ministram mais de uma disciplina
-- 8. Listar todos os alunos nascidos depois de 01/01/2010
-- 9. Buscar todos os professores com a especialidade "Matemática"
-- 10. Listar o nome dos alunos, suas turmas e todas as disciplinas em que estão matriculados

