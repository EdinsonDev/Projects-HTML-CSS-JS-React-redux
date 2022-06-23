CREATE TABLE venta (
	id INTEGER,
    comprador_documento VARCHAR(20),    
    producto_id INTEGER,
    fecha TIMESTAMP,     
    PRIMARY KEY (id),
    FOREIGN KEY (comprador_documento) REFERENCES comprador (documento),
    FOREIGN KEY (producto_id) REFERENCES producto (id)
);
INSERT INTO venta (comprador_documento, producto_id, fecha) VALUES ('3245142', 4, '2017-10-25 20:00:00');
INSERT INTO venta (comprador_documento, producto_id, fecha) VALUES ('135478632', 9, '2020-10-25 16:00:00');
INSERT INTO venta (comprador_documento, producto_id, fecha) VALUES ('11243412', 1, '2020-11-20 15:00:00');
INSERT INTO venta (comprador_documento, producto_id, fecha) VALUES ('11243412', 3, '2017-10-25 20:00:00');
INSERT INTO venta (comprador_documento, producto_id, fecha) VALUES ('10000001', 2, '2021-01-03 13:00:00');
INSERT INTO venta (comprador_documento, producto_id, fecha) VALUES ('12478412', 9, '2021-02-14 02:00:00');
INSERT INTO venta (comprador_documento, producto_id, fecha) VALUES ('123014510', 10, '2020-11-13 23:00:00');
INSERT INTO venta (comprador_documento, producto_id, fecha) VALUES ('11243412', 6, '2020-11-01 20:00:00');
INSERT INTO venta (comprador_documento, producto_id, fecha) VALUES ('123014510', 7, '2021-05-20 21:00:00');
INSERT INTO venta (comprador_documento, producto_id, fecha) VALUES ('3245142', 7, '2020-12-16 06:00:00');

