DROP TABLE IF EXISTS pedidos_produtos;
DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS produtos;

CREATE TABLE IF NOT EXISTS pedidos (
	id SERIAL PRIMARY KEY,
	total_pedido numeric NOT NULL
);

CREATE TABLE IF NOT EXISTS produtos (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL UNIQUE,
	preco numeric NOT NULL CHECK (preco > 0)
);

CREATE TABLE IF NOT EXISTS pedidos_produtos (
	id_pedido integer,
	id_produto integer,
	quantidade integer NOT NULL,
	PRIMARY KEY	(id_pedido, id_produto),
	FOREIGN KEY (id_pedido) REFERENCES pedidos,
	FOREIGN KEY (id_produto) REFERENCES produtos
);

-- INSERT INTO produtos VALUES (1, 'caneta', 2.5);
-- INSERT INTO	produtos (nome, preco) VALUES 
-- 		('borracha', 0.5),
-- 		('grafite', 0.5),
-- 		('régua', 1);

-- UPDATE produtos SET preco = 1 WHERE id = 4;

-- UPDATE produtos SET preco = 1 WHERE preco < 20;

-- DELETE FROM produtos WHERE id = 1;

-- DELETE FROM produtos;

-- INSERT INTO produtos VALUES (1, 'lápis', 1);
-- INSERT INTO pedidos (total_pedido) VALUES (10);
-- INSERT INTO pedidos_produtos VALUES (1, 1, 10);

-- DELETE FROM pedidos_produtos;
-- DELETE FROM produtos WHERE id = 1;