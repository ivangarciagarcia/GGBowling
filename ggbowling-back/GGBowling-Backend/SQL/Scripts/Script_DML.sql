use GGBowling;

INSERT INTO ggbowling.usuario
(user_name, contrasena, nombre, primer_apellido, segundo_apellido, email, telefono, fecha_nacimiento)
VALUES('Robert24', 'Abc123..', 'Robert', 'Martinez', 'Perez', 'Robert@gmail.com', 123123123, '1994-10-12');

INSERT INTO ggbowling.usuario
(user_name, contrasena, nombre, primer_apellido, segundo_apellido, email, telefono, fecha_nacimiento)
VALUES('Ivangg', 'qwert', 'Ivan', 'Garcia', 'Garcia', 'garciaivan200@gmail.com', 111222333, '2002-01-11');

/*select * from usuario us;*/

INSERT INTO ggbowling.pista
(capacidad_pista)
VALUES(6);

INSERT INTO ggbowling.pista
(capacidad_pista)
VALUES(6);

INSERT INTO ggbowling.pista
(capacidad_pista)
VALUES(6);

INSERT INTO ggbowling.pista
(capacidad_pista)
VALUES(6);

INSERT INTO ggbowling.pista
(capacidad_pista)
VALUES(6);

INSERT INTO ggbowling.pista
(capacidad_pista)
VALUES(6);

/*select * from pista pi;*/

INSERT INTO ggbowling.mesa
(capacidad_mesa)
VALUES(4);

INSERT INTO ggbowling.mesa
(capacidad_mesa)
VALUES(4);

INSERT INTO ggbowling.mesa
(capacidad_mesa)
VALUES(4);

INSERT INTO ggbowling.mesa
(capacidad_mesa)
VALUES(4);



/*select * from mesa me;*/

INSERT INTO ggbowling.reserva
(usuario_id, pista_id, mesa_id, fecha, hora, personas, partidas)
VALUES(1,1,1,'2023-01-01', '17:00', 5, 1);

INSERT INTO ggbowling.reserva
(usuario_id, pista_id, mesa_id, fecha, hora, personas, partidas)
VALUES(2,2,2,'2023-01-11', '21:00', 8, 2);

/*select * from reserva re;*/