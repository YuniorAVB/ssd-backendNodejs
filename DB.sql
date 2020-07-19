

CREATE TABLE personas(
id_persona VARCHAR(250) NOT NULL,
nombre VARCHAR(30) NOT NULL,
dni CHAR(8) NOT NULL,
apellido VARCHAR(50) NOT NULL ,
edad INT NOT NULL,
PRIMARY KEY(id_persona)
);

CREATE  TABLE sesiones(
id_sesion VARCHAR(250) NOT NULL,
tipo CHAR(1) DEFAULT 'c',
usuario VARCHAR(20) NOT NULL,
contrasenia VARCHAR(20) NOT NULL,
id_persona VARCHAR(250) NOT NULL,
PRIMARY KEY(id_sesion),
CONSTRAINT FK_SPersona FOREIGN KEY(id_persona) REFERENCES personas(id_persona)
);


CREATE TABLE clientes(
id_cliente VARCHAR(250) NOT NULL,
id_persona VARCHAR(250) NOT NULL,
correo VARCHAR(100) NOT NULL,
PRIMARY KEY(id_cliente),
CONSTRAINT FK_CPersona FOREIGN KEY(id_persona)
REFERENCES personas(id_persona)
);
DROP TABLE sesiones;


SELECT * FROM personas;

SELECT * FROM sesiones;