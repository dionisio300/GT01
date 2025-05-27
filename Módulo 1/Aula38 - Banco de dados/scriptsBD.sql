create database dripstore;
use dripstore;

/* int, decimal(a,b), float (real)
,varchar(n), char(n), text, date, time, datetime, boolean ...*/

create table clientes (
id int primary key auto_increment,
nome varchar(50) not null,
descricao text,
email varchar(100) not null unique,
telefone varchar(14),
data_nascimento date,
genero char(1), /*M,F,O*/
data_cadastro datetime default(current_timestamp())
);

create table produtos (
id int primary key auto_increment,
nome varchar(100) not null,
decricao text not null,
preco decimal(10,2) not null,
estoque int default(0),
categoria varchar(50),
ativo boolean default true
);

-- CREATE, READ, UPDATE, DELETE
-- create
insert into clientes (nome,descricao,email,telefone,data_nascimento,genero) values
('Ana','desc1','ana@mail.com','9898989898','2020-04-15','F');

INSERT INTO clientes (nome, descricao, email, telefone, data_nascimento, genero) VALUES
('Bruno', 'desc2', 'bruno@mail.com', '9998887777', '1990-03-12', 'M'),
('Carla', 'desc3', 'carla@mail.com', '9888877777', '1985-07-25', 'F'),
('Daniel', 'desc4', 'daniel@mail.com', '9777666555', '1993-11-30', 'M'),
('Eduarda', 'desc5', 'eduarda@mail.com', '9666655555', '1996-01-05', 'F'),
('Fernando', 'desc6', 'fernando@mail.com', '9555544444', '1988-09-19', 'M'),
('Gabriela', 'desc7', 'gabriela@mail.com', '9444433333', '1994-06-21', 'F'),
('Bruno', 'desc8', 'henrique@mail.com', '9333322222', '1992-10-10', 'M'),
('Isabela', 'desc9', 'isabela@mail.com', '9222211111', '2000-12-01', 'F'),
('João', 'desc10', 'joao@mail.com', '9111100000', '1998-02-28', 'M'),
('Karen', 'desc11', 'karen@mail.com', '9000099999', '1995-05-15', 'F'),
('Lucas', 'desc12', 'lucas@mail.com', '9888812345', '1989-08-17', 'M'),
('Marina', 'desc13', 'marina@mail.com', '9777723456', '1991-04-03', 'F'),
('Nathan', 'desc14', 'nathan@mail.com', '9666634567', '1987-07-22', 'M'),
('Olívia', 'desc15', 'olivia@mail.com', '9555545678', '1999-09-09', 'F'),
('Quésia', 'desc17', 'quesia@mail.com', '9333367890', '1997-03-18', 'F'),
('Rafael', 'desc18', 'rafael@mail.com', '9222278901', '1990-06-06', 'M'),
('Sofia', 'desc19', 'sofia@mail.com', '9111189012', '2002-01-14', 'F'),
('Thiago', 'desc20', 'thiago@mail.com', '9000090123', '1984-10-30', 'M'),
('Úrsula', 'desc21', 'ursula@mail.com', '9888821234', '1993-12-25', 'F');



insert into clientes (nome,email,telefone,data_nascimento,genero) values
('Pedro','pedro@mail.com','20202020','2010-04-15','M');

-- read

select * from clientes;
select * from produtos;

select nome,email from clientes;
select * from clientes where genero = 'O';
select id,nome, email, data_cadastro from clientes where id > 30;



-- update

update clientes set email = 'isabela2@mail.com' where id = 31;
update clientes set nome = 'Ana Lucia';

update clientes set descricao = 'Não falamos do Bruno' where nome = 'Bruno'



