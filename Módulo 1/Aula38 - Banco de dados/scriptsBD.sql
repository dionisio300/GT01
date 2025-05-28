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
descricao text not null,
preco decimal(10,2) not null,
estoque int default(0),
categoria varchar(50),
ativo boolean default true
);

-- CREATE, READ, UPDATE, DELETE
-- create

INSERT INTO produtos (nome, descricao, preco, estoque, categoria, ativo) VALUES
('Smartphone X200', 'Celular com 128GB, câmera dupla e processador octa-core.', 1999.90, 50, 'Eletrônicos', TRUE),
('Camiseta Polo Azul', 'Camiseta polo 100% algodão, tamanho M.', 89.90, 100, 'Roupas', TRUE),
('Notebook Gamer R9', 'Notebook com RTX 3060 e 16GB RAM.', 6499.00, 30, 'Eletrônicos', TRUE),
('Livro - Inteligência Artificial', 'Livro técnico sobre fundamentos da IA.', 120.00, 20, 'Livros', TRUE),
('Chocolate ao Leite 90g', 'Chocolate cremoso com 40% cacau.', 5.50, 200, 'Alimentos', TRUE),
('Fone Bluetooth Pro', 'Fone de ouvido com cancelamento de ruído.', 299.99, 75, 'Eletrônicos', TRUE),
('Calça Jeans Skinny', 'Calça jeans azul escuro, tamanho 42.', 139.00, 60, 'Roupas', TRUE),
('Tênis Esportivo Runner', 'Tênis para corrida, leve e confortável.', 199.90, 40, 'Calçados', TRUE),
('TV 50" 4K Ultra HD', 'Smart TV com acesso a aplicativos de streaming.', 2599.90, 15, 'Eletrônicos', TRUE),
('Café Gourmet 500g', 'Café moído premium de torra média.', 28.90, 80, 'Alimentos', TRUE),
('Mouse Gamer RGB', 'Mouse com iluminação e 6 botões programáveis.', 159.00, 120, 'Informática', TRUE),
('Blusa de Frio Feminina', 'Blusa com capuz e forro térmico.', 179.90, 35, 'Roupas', TRUE),
('Geladeira Inverter 400L', 'Eletrodoméstico com economia de energia.', 3899.00, 10, 'Eletrodomésticos', TRUE),
('Bola de Futebol Oficial', 'Bola tamanho padrão da FIFA.', 99.90, 45, 'Esportes', TRUE),
('Creme Hidratante 200ml', 'Hidratante com fragrância de lavanda.', 22.50, 150, 'Beleza', TRUE),
('Livro - O Senhor dos Anéis', 'Trilogia completa em edição especial.', 189.90, 25, 'Livros', TRUE),
('Panela Antiaderente 5L', 'Panela grande com revestimento cerâmico.', 89.00, 60, 'Utensílios Domésticos', TRUE),
('Perfume Floral 100ml', 'Fragrância feminina suave e marcante.', 139.99, 70, 'Beleza', TRUE),
('Cadeira Gamer Confort', 'Cadeira com ajuste de altura e apoio lombar.', 899.00, 12, 'Móveis', TRUE),
('Tablet 10.1" Wi-Fi', 'Tablet com Android 12 e 64GB de memória.', 1149.00, 25, 'Eletrônicos', TRUE);




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
update clientes set descricao = 'Não falamos do Bruno' where nome = 'Bruno';


-- delete
select * from clientes;
delete from clientes where id = 42;



-- SELECTs

select * from clientes;
select * from produtos;

-- Where por igualdade
select * from produtos where categoria = 'Roupas';
select * from clientes where genero = 'M';
select * from clientes where genero = 'F';

-- Where por like
select nome, preco,descricao from produtos where descricao like 'Tri%';
select nome, preco,descricao from produtos where nome like '%l';
select nome, preco,descricao from produtos where descricao like '%com%';

-- Where por faixa de datas
select * from clientes;
select * from produtos;


select nome, telefone,data_cadastro from
clientes where data_nascimento > '1995-01-01';

select nome, telefone,data_cadastro,data_nascimento from
clientes where year(data_nascimento) > '1995';

select nome, telefone,data_cadastro from
clientes where data_nascimento between '1995-01-01' and '2000-01-01';

-- Where por comparação numérica
select * from clientes;
select * from produtos;

select nome, preco from produtos where preco < 500;
select nome, preco from produtos where preco between 1000 and 2000;

-- Where por in e not in

select * from produtos where categoria in ('Roupas','Livros');
select * from produtos where categoria not in ('Roupas','Livros');



-- Where por is null ou is not null
select * from clientes;
select * from produtos;

update produtos set categoria = null where id in (9,10,15);
select* from produtos where categoria is null;
select * from produtos where categoria is not null;

-- Where por operadores lógicos
select * from produtos where categoria = 'roupas' and preco <= 100;
select * from produtos where categoria = 'roupas' and preco >= 100;
select * from produtos where categoria = 'eletronicos' or preco > 1000;
update produtos set ativo = false where id in (1,5,7,9);
select * from produtos where not ativo;


/*
crie um novo banco de dados chamado loja1

1. Crie uma tabela chamada Funcionarios com os seguintes campos:
id (inteiro, chave primária)
nome (texto até 100 caracteres)
cargo (texto até 50 caracteres)
salario (decimal com duas casas)
data_contratacao (data (dia, mês e ano))
ativo (booleano)

2. Crie uma tabela chamada Produtos com os campos:
id (inteiro, chave primária)
nome (texto até 80 caracteres)
preco (decimal com duas casas)
estoque (inteiro)

3. Insira 10 registros na tabela Funcionarios com dados fictícios de diferentes cargos e salários.

4. Insira 10 produtos na tabela Produtos, com pelo menos um deles com preço acima de 100 e um com estoque zerado.

5. Exiba todos os produtos cadastrados na tabela Produtos.

6. Mostre os nomes e cargos dos funcionários contratados após 01/01/2022.

7. Liste os funcionários cujo cargo contenha a palavra "Analista".

8. Mostre os funcionários com salário entre 2500 e 4000.

9. A empresa decidiu aumentar o salário de todos os funcionários com cargo "Analista" em R$ 300,00.
Atualize os salários desses funcionários.

10. O funcionário com id = 4 pediu demissão. Atualize seu status para inativo.

11. Exclua todos os funcionários contratados antes de 01/01/2021.

12. A empresa decidiu desligar todos os funcionários com salário acima de 5000.
Remova esses registros da tabela.
*/