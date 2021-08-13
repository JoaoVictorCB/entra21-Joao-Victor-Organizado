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

function insereCliente(cliente) {
    try {
        await pool.query(`
        INSERT INTO clientes (numero_documento, tipo_pessoa, rua, numero, cidade, estado, cep) VALUES
            (55, ''Branca', 'Getúlio Vargas', 2, 'Timbó', 'SC', 89120-000)
        )
        `);
    }
    catch (error) {
        console.log(error.message);
    } finally {
        pool.end();
    }
}

function inserirEndereco() {
    try {
        await pool.query(`
        INSERT INTO endereco (rua, numero, cidade, estado, cep, id_cliente) VALUES
            ('Getúlio Vargas', 2, 'Timbó', 'SC', 89120-000, 50)
        `);
    }
    catch (error) {
        console.log(error.message);
    } finally {
        pool.end();
    }
}

// Exercicio 4 - 


// Exercicio 5 - 

function insereEditoras(editora) {
    try {
        await pool.query(`
        INSERT INTO endereco (nome_gerente, telefone) VALUES
            ('Marcos', (47) 9999-9999)
            ('Carlos', (47) 8888-8888)
            ('Roger', (47) 7777-7777)
            ('Cleison', (47) 6666-6666)
            ('Roberto', (47) 5555-5555)
        `)
    }
    catch (error) {
        console.log(error.message);
    } finally {
        pool.end();
    }
}

// Exercicio 6 - 

function inserelivros(livros) {
    try {
        await pool.query(`
        INSERT INTO endereco (isbn, nome_autor, assunto, preco, quantidade_estoque, id_editora) VALUES
        `)
    }
    catch (error) {
        console.log(error.message);
    } finally {
        pool.end();
    }
}