use GGBowling;

INSERT INTO ggbowling.usuario
(user_name, contrasena, nombre, primer_apellido, segundo_apellido, email, telefono, fecha_nacimiento)
VALUES('Robert24', 'Abc123..', 'Robert', 'Martinez', 'Perez', 'Robert@gmail.com', 658789632, '1994-10-12');

/*select * from usuario us;*/

INSERT INTO ggbowling.reserva
(usuario_id, fecha_hora_inicio, fecha_hora_final, personas, partidas, precio_persona)
VALUES(1,'2023-01-01 17:00:00', '2023-01-01 18:00:00', 5, 1, 6);

/*select * from reserva re;*/

INSERT INTO ggbowling.pista
(capacidad_pista,reserva_id)
VALUES(6,1);

/*select * from pista pi;*/

INSERT INTO ggbowling.mesa
(capacidad_mesa,reserva_id)
VALUES(4,1);

/*select * from mesa me;*/

