create database Conexion_Java;
use Conexion_Java;
create table Registro(
id_user int not null identity(1,1) primary key,
nombre varchar(100)
);

select * from Registro;