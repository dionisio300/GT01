
-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS sistema_gestao_escolar;
USE sistema_gestao_escolar;

-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('admin', 'professor', 'aluno') NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de Turmas
CREATE TABLE IF NOT EXISTS Turmas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    ano INT NOT NULL
);

-- Tabela de Disciplinas
CREATE TABLE IF NOT EXISTS Disciplinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

-- Tabela de Professores_Disciplinas (vincula professores a disciplinas)
CREATE TABLE IF NOT EXISTS Professores_Disciplinas (
    professor_id INT NOT NULL,
    disciplina_id INT NOT NULL,
    PRIMARY KEY (professor_id, disciplina_id),
    FOREIGN KEY (professor_id) REFERENCES Usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (disciplina_id) REFERENCES Disciplinas(id) ON DELETE CASCADE
);

-- Tabela de Alunos_Turmas (matrícula de alunos em turmas)
CREATE TABLE IF NOT EXISTS Alunos_Turmas (
    aluno_id INT NOT NULL,
    turma_id INT NOT NULL,
    PRIMARY KEY (aluno_id, turma_id),
    FOREIGN KEY (aluno_id) REFERENCES Usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (turma_id) REFERENCES Turmas(id) ON DELETE CASCADE
);

-- Tabela de Alunos_Disciplinas (matrícula de alunos em disciplinas)
CREATE TABLE IF NOT EXISTS Alunos_Disciplinas (
    aluno_id INT NOT NULL,
    disciplina_id INT NOT NULL,
    PRIMARY KEY (aluno_id, disciplina_id),
    FOREIGN KEY (aluno_id) REFERENCES Usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (disciplina_id) REFERENCES Disciplinas(id) ON DELETE CASCADE
);

-- Tabela de Notas_Frequencia
CREATE TABLE IF NOT EXISTS Notas_Frequencia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT NOT NULL,
    disciplina_id INT NOT NULL,
    nota DECIMAL(4,2),
    frequencia DECIMAL(5,2),
    FOREIGN KEY (aluno_id) REFERENCES Usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (disciplina_id) REFERENCES Disciplinas(id) ON DELETE CASCADE
);

-- Tabela de Comunicados
CREATE TABLE IF NOT EXISTS Comunicados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    professor_id INT NOT NULL,
    disciplina_id INT,
    turma_id INT,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (professor_id) REFERENCES Usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (disciplina_id) REFERENCES Disciplinas(id) ON DELETE CASCADE,
    FOREIGN KEY (turma_id) REFERENCES Turmas(id) ON DELETE CASCADE
);




-- Inserção de dados de exemplo

-- Usuários (Administradores)
INSERT INTO Usuarios (nome, email, senha, tipo_usuario) VALUES
("Admin Master", "admin.master@escola.com", "senha123", "admin"),
("Admin Geral", "admin.geral@escola.com", "senha456", "admin"),
("Admin Suporte", "admin.suporte@escola.com", "senha789", "admin");

-- Usuários (Professores)
INSERT INTO Usuarios (nome, email, senha, tipo_usuario) VALUES
("Prof. Ana Silva", "ana.silva@escola.com", "prof123", "professor"),
("Prof. Bruno Costa", "bruno.costa@escola.com", "prof456", "professor"),
("Prof. Carla Dias", "carla.dias@escola.com", "prof789", "professor"),
("Prof. Daniel Souza", "daniel.souza@escola.com", "prof101", "professor"),
("Prof. Erika Lima", "erika.lima@escola.com", "prof112", "professor");

-- Usuários (Alunos)
INSERT INTO Usuarios (nome, email, senha, tipo_usuario) VALUES
("Aluno 01", "aluno01@escola.com", "aluno123", "aluno"),
("Aluno 02", "aluno02@escola.com", "aluno123", "aluno"),
("Aluno 03", "aluno03@escola.com", "aluno123", "aluno"),
("Aluno 04", "aluno04@escola.com", "aluno123", "aluno"),
("Aluno 05", "aluno05@escola.com", "aluno123", "aluno"),
("Aluno 06", "aluno06@escola.com", "aluno123", "aluno"),
("Aluno 07", "aluno07@escola.com", "aluno123", "aluno"),
("Aluno 08", "aluno08@escola.com", "aluno123", "aluno"),
("Aluno 09", "aluno09@escola.com", "aluno123", "aluno"),
("Aluno 10", "aluno10@escola.com", "aluno123", "aluno"),
("Aluno 11", "aluno11@escola.com", "aluno123", "aluno"),
("Aluno 12", "aluno12@escola.com", "aluno123", "aluno"),
("Aluno 13", "aluno13@escola.com", "aluno123", "aluno"),
("Aluno 14", "aluno14@escola.com", "aluno123", "aluno"),
("Aluno 15", "aluno15@escola.com", "aluno123", "aluno"),
("Aluno 16", "aluno16@escola.com", "aluno123", "aluno"),
("Aluno 17", "aluno17@escola.com", "aluno123", "aluno"),
("Aluno 18", "aluno18@escola.com", "aluno123", "aluno"),
("Aluno 19", "aluno19@escola.com", "aluno123", "aluno"),
("Aluno 20", "aluno20@escola.com", "aluno123", "aluno"),
("Aluno 21", "aluno21@escola.com", "aluno123", "aluno"),
("Aluno 22", "aluno22@escola.com", "aluno123", "aluno"),
("Aluno 23", "aluno23@escola.com", "aluno123", "aluno"),
("Aluno 24", "aluno24@escola.com", "aluno123", "aluno"),
("Aluno 25", "aluno25@escola.com", "aluno123", "aluno"),
("Aluno 26", "aluno26@escola.com", "aluno123", "aluno"),
("Aluno 27", "aluno27@escola.com", "aluno123", "aluno"),
("Aluno 28", "aluno28@escola.com", "aluno123", "aluno"),
("Aluno 29", "aluno29@escola.com", "aluno123", "aluno"),
("Aluno 30", "aluno30@escola.com", "aluno123", "aluno");

-- Turmas
INSERT INTO Turmas (nome, ano) VALUES
("1A - Ensino Médio", 2025),
("2B - Ensino Médio", 2025),
("3C - Ensino Médio", 2025),
("1o Ano - Fundamental", 2025),
("2o Ano - Fundamental", 2025);

-- Disciplinas
INSERT INTO Disciplinas (nome) VALUES
("Matemática"),
("Português"),
("História"),
("Geografia"),
("Ciências"),
("Física"),
("Química"),
("Biologia"),
("Inglês"),
("Educação Física");

-- Professores_Disciplinas (vinculando professores a disciplinas)
-- Prof. Ana Silva (id: 4)
INSERT INTO Professores_Disciplinas (professor_id, disciplina_id) VALUES
(4, 1), -- Matemática
(4, 6); -- Física

-- Prof. Bruno Costa (id: 5)
INSERT INTO Professores_Disciplinas (professor_id, disciplina_id) VALUES
(5, 2), -- Português
(5, 9); -- Inglês

-- Prof. Carla Dias (id: 6)
INSERT INTO Professores_Disciplinas (professor_id, disciplina_id) VALUES
(6, 3), -- História
(6, 4); -- Geografia

-- Prof. Daniel Souza (id: 7)
INSERT INTO Professores_Disciplinas (professor_id, disciplina_id) VALUES
(7, 5), -- Ciências
(7, 8); -- Biologia

-- Prof. Erika Lima (id: 8)
INSERT INTO Professores_Disciplinas (professor_id, disciplina_id) VALUES
(8, 7), -- Química
(8, 10); -- Educação Física

-- Alunos_Turmas (matrícula de alunos em turmas)
-- Alunos 1-10 na Turma 1A (id: 1)
INSERT INTO Alunos_Turmas (aluno_id, turma_id) VALUES
(9, 1), (10, 1), (11, 1), (12, 1), (13, 1), (14, 1), (15, 1), (16, 1), (17, 1), (18, 1);

-- Alunos 11-20 na Turma 2B (id: 2)
INSERT INTO Alunos_Turmas (aluno_id, turma_id) VALUES
(19, 2), (20, 2), (21, 2), (22, 2), (23, 2), (24, 2), (25, 2), (26, 2), (27, 2), (28, 2);

-- Alunos 21-30 na Turma 3C (id: 3)
INSERT INTO Alunos_Turmas (aluno_id, turma_id) VALUES
(29, 3), (30, 3), (31, 3), (32, 3), (33, 3), (34, 3), (35, 3), (36, 3), (37, 3), (38, 3);

-- Alunos_Disciplinas (matrícula de alunos em disciplinas)
-- Alunos da Turma 1A (id: 1) matriculados em Matemática (id: 1) e Português (id: 2)
INSERT INTO Alunos_Disciplinas (aluno_id, disciplina_id) VALUES
(9, 1), (10, 1), (11, 1), (12, 1), (13, 1), (14, 1), (15, 1), (16, 1), (17, 1), (18, 1),
(9, 2), (10, 2), (11, 2), (12, 2), (13, 2), (14, 2), (15, 2), (16, 2), (17, 2), (18, 2);

-- Alunos da Turma 2B (id: 2) matriculados em História (id: 3) e Geografia (id: 4)
INSERT INTO Alunos_Disciplinas (aluno_id, disciplina_id) VALUES
(19, 3), (20, 3), (21, 3), (22, 3), (23, 3), (24, 3), (25, 3), (26, 3), (27, 3), (28, 3),
(19, 4), (20, 4), (21, 4), (22, 4), (23, 4), (24, 4), (25, 4), (26, 4), (27, 4), (28, 4);

-- Alunos da Turma 3C (id: 3) matriculados em Ciências (id: 5) e Física (id: 6)
INSERT INTO Alunos_Disciplinas (aluno_id, disciplina_id) VALUES
(29, 5), (30, 5), (31, 5), (32, 5), (33, 5), (34, 5), (35, 5), (36, 5), (37, 5), (38, 5),
(29, 6), (30, 6), (31, 6), (32, 6), (33, 6), (34, 6), (35, 6), (36, 6), (37, 6), (38, 6);

-- Notas_Frequencia (exemplo para alguns alunos em algumas disciplinas)
INSERT INTO Notas_Frequencia (aluno_id, disciplina_id, nota, frequencia) VALUES
(9, 1, 8.5, 90.0),
(9, 2, 7.0, 85.0),
(10, 1, 9.0, 95.0),
(10, 2, 6.5, 80.0),
(19, 3, 7.5, 92.0),
(19, 4, 8.0, 88.0),
(29, 5, 6.0, 75.0),
(29, 6, 7.0, 80.0);

-- Comunicados (exemplo)
INSERT INTO Comunicados (professor_id, disciplina_id, titulo, conteudo) VALUES
(4, 1, "Aviso de Prova", "A prova de Matemática será na próxima semana."),
(5, 2, "Trabalho de Português", "Entregar o trabalho sobre concordância nominal até sexta-feira.");


select * from alunos_disciplinas;
select * from alunos_turmas;
select * from comunicados;
select * from disciplinas;
select * from notas_frequencia;
select * from professores_disciplinas;
select * from turmas;
select * from usuarios;












