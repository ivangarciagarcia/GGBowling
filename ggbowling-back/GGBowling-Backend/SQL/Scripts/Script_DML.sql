use GGBowling;

INSERT INTO ggbowling.usuario
(user_name, contrasena, nombre, primer_apellido, segundo_apellido, email, telefono, fecha_nacimiento)
VALUES('Ivangg', '$2a$12$iHotyfHYhfzc7wpQ4zLBxOiRNYVXzq1FGBWkFR9y1e1.17YeTxUL.', 'Ivan', 'Garcia', 'Garcia', 'garciaivan200@gmail.com', 111222333, '2002-01-11');

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
VALUES(6);

INSERT INTO ggbowling.mesa
(capacidad_mesa)
VALUES(6);

INSERT INTO ggbowling.mesa
(capacidad_mesa)
VALUES(6);

INSERT INTO ggbowling.mesa
(capacidad_mesa)
VALUES(6);



/*select * from mesa me;*/

INSERT INTO ggbowling.reserva
(usuario_id, pista_id, mesa_id, fecha, hora, personas, partidas)
VALUES(1,1,1,'2023-01-01', '17:00', 5, 1);


/*select * from reserva re;*/