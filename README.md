# GGBowling
Proyecto final de ciclo superior de Desarrollo de Aplicaciones Web

## Tecnologías Utilizadas

- React con Yarn para la construcción del front-end.
- Visual Studio Code e IntelliJ como entornos de desarrollo integrados (IDE).
- Spring Boot y Maven para construir el back-end.
- MySQL como base de datos relacional.
- Todas las tecnologias en su ultima version a dia 15/05/2023

## Cómo empezar

1. Clone este repositorio a su máquina local.

2. Asegúrese de tener las herramientas mencionadas en las Tecnologías Utilizadas instaladas en su sistema.

3. Ejecute el comando `yarn install` en la carpeta del proyecto de front para instalar las dependencias.

4. Ejecute la aplicación web con el comando `yarn start`. 

5. Configurar el archivo application.properties para establecer la conexión con la base de datos.

      #CONEXION A BBDD

      -spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
      -spring.datasource.url=jdbc:mysql://localhost:3306/ggbowling
      -spring.datasource.username={tu nombre de usuario en tu bbdd}
      -spring.datasource.password={tu password}

      #CONEXION A EMAIL

      -spring.mail.host=smtp.gmail.com
      -spring.mail.port=587
      -spring.mail.username=ggbowlingcoruna@gmail.com
      -spring.mail.password=omabyzfiqjyfmovb
      -spring.mail.properties.mail.smtp.auth=true
      -spring.mail.properties.mail.smtp.starttls.enable=true

6. Ejecute el servidor con el comando `mvn spring-boot:run` o iniciando la clase main que se encuentra en el modulo 'boot'.


## Licencia

Este proyecto está bajo la Licencia Apache 2.0. Consulte el archivo LICENSE para obtener más información.
Ivan Garcia Garcia

