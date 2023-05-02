drop database if exists GGBowling;

create database if not exists GGBowling;

use GGBowling;

create table if not exists usuario(
usuario_id integer primary key auto_increment,
user_name varchar(50)not null ,
contrasena varchar (50)not null,
nombre varchar(50)not null,
primer_apellido varchar(100)not null,
segundo_apellido varchar(100)not null,
email varchar(100) unique not null,
telefono integer not null,
fecha_nacimiento varchar(20) not null
);

create table if not exists reserva(
reserva_id integer primary key auto_increment,
usuario_id integer references usuario(usuario_id),
fecha varchar(20),
hora varchar (10),
personas integer,
partidas integer
);


create table if not exists pista(
pista_id integer primary key auto_increment,
capacidad_pista integer,
reserva_id integer references reserva(reserva_id)
);

create table if not exists mesa(
mesa_id integer primary key auto_increment,
capacidad_mesa integer,
reserva_id integer references reserva(reserva_id)
);

