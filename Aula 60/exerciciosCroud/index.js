// Exercício 1 -

const { Pool } = require("pg");
require("dotenv").config();
const db = require("./db");

const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
});

module.exports = pool;

console.log(process.env);

// (async () => {
//     try {
//         const res = await db.query("SELECT NOW()");
//         console.log(res.rows[0]);
//     } catch (err) {
//         console.log(err.message);
//     } finally {
//         db.end();
//     }
// })();


// Exercicio 2 -

try {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS clientes (
        id UUID PRIMARY KEY gen_random_uuid (), dados JSONB,
        nome text NOT NULL,
        email text NOT NULL UNIQUE,
        telefone text NOT NULL UNIQUE,
        numero_documento text NOT NULL UNIQUE,
        tipo_pessoa text NOT NULL UNIQUE,
        pontos numeric NOT NULL UNIQUE,
    );

    CREATE TABLE IF NOT EXISTS enderecos (
        id UUID PRIMARY KEY gen_random_uuid (), dados JSONB,
        rua text NOT NULL,
        numero integer NOT NULL,
        cidade text NOT NULL,
        estado text NOT NULL,
        cep integer, NOT NULL,
        id_cliente integer NOT NULL REFERENCES funcionarios
    );

    CREATE TABLE IF NOT EXISTS livros (
        isbn UUID PRIMARY KEY gen_random_uuid (), dados JSONB,
        nome_autor text NOT NULL UNIQUE,
        assunto text NOT NULL,
        quantidade_estoque integer NOT NULL,
        preco integer NOT NULL UNIQUE,
        id_editora integer NOT NULL UNIQUE
    )

    CREATE TABLE IF NOT EXISTS compra (
        id_cliente UUID PRIMARY KEY gen_random_uuid (), dados JSONB,
        id_livro integer NO NULL UNIQUE,
        data date NOT NULL,
        valor numeric NOT NULL UNIQUE
    )

    CREATE TABLE IF NOT EXISTS editoras (
        id UUID PRIMARY KEY gen_random_uuid (), dados JSONB,
        nome_gerente text NOT NULL UNIQUE,
        telefone text NOT NULL UNIQUE
    )
    `);
    console.log("Tabelas criadas com sucesso!");
} catch (error) {
    console.log(error.message);
} finally {
    pool.end();
}

// Exercicio 3 - 


// Exercicio 4 - 


// Exercicio 5 - 


// Exercicio 6 - 