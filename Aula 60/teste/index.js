
// const { Pool } = require("pg");
const db = require("./db");
const format = require("pg-format");

// postgres://usuario:senha@servidor:porta/banco_dados
// const connectionString = "postgres://postgres:123456@localhost:5432/node";
// const pool = new Pool({connectionString});

// const pool = new Pool({
// host: "localhost",
// user: "postgres",
// password: "123456",
// database: "node"
// });

(async () => {
    // try {
    // const res = await pool.query("SELECT NOW()");
    // console.log(res.rows[0].now);
    // } catch (error) {
    // console.log(error.message);
    // } finally {
    // pool.end();
    // }

    // try {
    // await pool.query(`
    // CREATE TABLE IF NOT EXISTS funcionarios (
    // id SERIAL PRIMARY KEY,
    // nome text NOT NULL,
    // email text NOT NULL UNIQUE,
    // telefone text NOT NULL UNIQUE
    // );
    // CREATE TABLE IF NOT EXISTS enderecos (
    // id SERIAL PRIMARY KEY,
    // rua text NOT NULL,
    // numero integer NOT NULL,
    // cidade text NOT NULL,
    // estado text NOT NULL,
    // id_funcionario integer NOT NULL REFERENCES funcionarios
    // );`);
    // console.log("Tabelas criadas com sucesso!");
    // } catch (error) {
    // console.log(error.message);
    // } finally {
    // pool.end();
    // }

    // try {
    // const res = await pool.query(`
    // INSERT INTO
    // funcionarios (nome, email, telefone)
    // VALUES
    // ($1, $2, $3)
    // RETURNING *;`,
    // ["pedro", "pedro@email.com", "(47) 9 9999-9999"]);
    // console.log(res.rows[0]);
    // } catch (error) {
    // console.log(error.message);
    // } finally {
    // pool.end();
    // }

    // try {
    // const funcionarios = [
    // ["joão", "joão@email.com", "(47) 9 8888-8888"],
    // ["maria", "maria@email.com", "(47) 9 7777-7777"]
    // ];

    // const query = format("INSERT INTO funcionarios (nome, email, telefone) VALUES %L RETURNING *", funcionarios);

    // const res = await pool.query(query);

    // console.log(res.rows);
    // } catch (error) {
    // console.log(error.message);
    // } finally {
    // pool.end();
    // }

    try {
        const { rows } = await db.query("SELECT * FROM funcionarios WHERE nome ILIKE $1", ['p%']);
        console.log(rows);
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
})();