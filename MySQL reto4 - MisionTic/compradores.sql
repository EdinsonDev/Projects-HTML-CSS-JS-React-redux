CREATE TABLE comprador (
	documento varchar(20),
    tipo_de_documento VARCHAR(5),   
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    celular VARCHAR(20),
    correo VARCHAR(50),    
    PRIMARY KEY (documento)    
); 
INSERT INTO comprador VALUES ('10000001', 'CC', 'Brayan', 'Garcia', '3122561241', 'bsgarciac@gmail.com');
INSERT INTO comprador VALUES ('123014510', 'CC', 'Sebastian', 'Molina', '3144577814', 'sebascrack88@gmail.com');
INSERT INTO comprador VALUES ('3245142', 'TI', 'Diana', 'Cardenás', '3112345677', 'dianasofia1@gmail.com');
INSERT INTO comprador VALUES ('12478412', 'CC', 'Jessica', 'Guzman', '3201423536', 'jesslyz@gmail.com');
INSERT INTO comprador VALUES ('11243412', 'CE', 'Walter', 'Black', '3133264571', 'walterxd@gmail.com');
INSERT INTO comprador VALUES ('135478632', 'CC', 'Juan', 'Solano', '3141232598', 'chikisasori@gmail.com');

