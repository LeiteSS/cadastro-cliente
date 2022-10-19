create database webII;
use webII;

create table Usuario (
  id int primary key auto_increment,
  nome varchar(255) not null,
  senha varchar(8) not null,
);

create table Produto (
  id int primary key auto_increment,
  nome varchar(255) not null,
  quantidade int not null,
  preco float(5, 2) not null
);

