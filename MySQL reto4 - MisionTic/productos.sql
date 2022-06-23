CREATE TABLE producto (
	id INTEGER,
    autor_id INTEGER NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    precio INTEGER NOT NULL,
    genero VARCHAR(20) NOT NULL,    
    PRIMARY KEY (id),
    FOREIGN KEY (autor_id) REFERENCES autor (id)
);
INSERT INTO producto (autor_id, nombre, precio, genero) VALUES (1, 'Honey, no estás', 1500, 'Pop');
INSERT INTO producto (autor_id, nombre, precio, genero) VALUES (2, 'Love', 3000, 'Rock');
INSERT INTO producto (autor_id, nombre, precio, genero) VALUES (3, 'Roi', 2000, 'Electropop');
INSERT INTO producto (autor_id, nombre, precio, genero) VALUES (4, 'Stay', 5000, 'Pop');
INSERT INTO producto (autor_id, nombre, precio, genero) VALUES (5, 'Favorito', 2500, 'Pop latino');
INSERT INTO producto (autor_id, nombre, precio, genero) VALUES (6, 'X 100pre', 20000, 'Trap');
INSERT INTO producto (autor_id, nombre, precio, genero) VALUES (7, 'Historias tristes para dormir bien', 15000, 'Post-punk');
INSERT INTO producto (autor_id, nombre, precio, genero) VALUES (4, 'Purpose', 40000, 'Pop');
INSERT INTO producto (autor_id, nombre, precio, genero) VALUES (8, 'Living Things', 25000, 'Rock alternativo');
INSERT INTO producto (autor_id, nombre, precio, genero) VALUES (9, 'Vida', 26500, 'Rap');

