CREATE TABLE cancion (
	id INTEGER, 
    producto_id INTEGER NOT NULL,    
    duracion INTEGER NOT NULL,
    tiene_colaboracion INTEGER NOT NULL,
    autor_id INTEGER NOT NULL,         
    PRIMARY KEY (id),
    FOREIGN KEY (producto_id) REFERENCES producto (id)    
);
INSERT INTO cancion (producto_id, duracion, tiene_colaboracion, autor_id) VALUES (1, 270, 0, 1);
INSERT INTO cancion (producto_id, duracion, tiene_colaboracion, autor_id) VALUES (2, 120, 0, 2);
INSERT INTO cancion (producto_id, duracion, tiene_colaboracion, autor_id) VALUES (3, 260, 0, 3);
INSERT INTO cancion (producto_id, duracion, tiene_colaboracion, autor_id) VALUES (4, 157, 1, 4);
INSERT INTO cancion (producto_id, duracion, tiene_colaboracion, autor_id) VALUES (5, 210, 0, 5);
