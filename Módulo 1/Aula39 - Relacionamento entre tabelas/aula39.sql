create database aula39;
use aula39;

-- Relação de um para muitos (1:N)

create table clientes(
id int primary key auto_increment,
nome varchar(50),
cidade varchar(50)
);
create table pedidos(
id int primary key auto_increment,
data_pedido datetime default(current_timestamp()),
valor_compra decimal(10,2),
id_cliente int,
descricao text,
foreign key (id_cliente) references clientes(id) on delete cascade
/*set null, set defalut(0)*/
);
insert into clientes (nome,cidade) values
('Ana','Fortaleza'),
('Maria', 'Caucaia'),
('Pedro', 'Fortaleza');

insert into clientes (nome,cidade) values('Maria', 'Caucaia');

select * from clientes;


insert into pedidos (valor_compra, id_cliente,descricao) values
(1500,1,'Tablet A10'),
(2000,1,'Notebook positivo'),
(5000,4,'PS5'),
(300,3,'Fone'),
(1000,3,'Monitor');


select * from pedidos;

select clientes.nome, pedidos.descricao,pedidos.valor_compra
from clientes join pedidos on clientes.id = pedidos.id_cliente;

delete from clientes where id = 2;
select * from clientes;

delete from pedidos where id_cliente = 2;
select * from pedidos;

delete from clientes where id = 1;

-- Relação de um para um (1:1)

create table alunos (
id int primary key auto_increment,
nome varchar(50)
);

create table carteirinhas (
id int primary key auto_increment,
id_aluno int unique,
numeroCarteirinha varchar(12),
foreign key (id_aluno) references alunos(id)
);

insert into alunos (nome) values ('Maria'),('Carlos'),('Luis');
insert into carteirinhas (id_aluno,numeroCarteirinha) values
(3,'123'),
(2,'456'),
(1,'789');
select * from alunos;
select * from carteirinhas;

insert into carteirinhas (id_aluno, numeroCarteirinha) values
(1,'987');

select alunos.nome,carteirinhas.numeroCarteirinha from
alunos join carteirinhas on alunos.id = carteirinhas.id_aluno;

-- Relaçlão de muitos para muitos

create table alunos (
id int primary key auto_increment,
nome varchar(50)
);

create table cursos (
    id int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    carga_horaria int
);

CREATE Table matricula (
    id_aluno int,
    id_curso int,
    data_matricula date default(current_date()),
    PRIMARY KEY(id_aluno,id_curso),
    Foreign Key (id_aluno) REFERENCES alunos(id),
    Foreign Key (id_curso) REFERENCES cursos(id)
);

INSERT into cursos (nome, carga_horaria) VALUES
('JS',200),
('Python', 200),
('C++', 200);

INSERT into alunos (nome) VALUES
('Wellington'),
('Ulisses'),
('Caio'),
('Luis');

select * from alunos;
select * from cursos;
select * from matricula;
insert into matricula (id_aluno, id_curso) values 
(1,3),
(1,2),
(2,1),
(2,3),
(3,1),
(4,2),
(5,3),
(6,1),
(7,2);

-- Listar os cursos de um aluno

select alunos.nome, cursos.nome, matricula.data_matricula
from alunos
join matricula on alunos.id = matricula.id_aluno
join cursos on cursos.id = matricula.id_curso
where alunos.nome = 'Carlos';




