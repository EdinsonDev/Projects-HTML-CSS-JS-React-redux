CREATE TABLE album (
	id INTEGER,
    producto_id INTEGER NOT NULL,
    numero_canciones INTEGER NOT NULL,
    rating DOUBLE NOT NULL,
    autor_id INTEGER,    
    PRIMARY KEY (id),
    FOREIGN KEY (producto_id) REFERENCES producto (id)
); 
INSERT INTO album (producto_id, numero_canciones, rating, autor_id) VALUES (6, 13, 9.5, 6);
INSERT INTO album (producto_id, numero_canciones, rating, autor_id) VALUES (7, 5, 9, 7);
INSERT INTO album (producto_id, numero_canciones, rating, autor_id) VALUES (8, 18, 9.3, 4);
INSERT INTO album (producto_id, numero_canciones, rating, autor_id) VALUES (9, 8, 9.8, 8);
INSERT INTO album (producto_id, numero_canciones, rating, autor_id) VALUES (10, 13, 9.9, 9);
