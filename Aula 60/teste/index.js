// const { Pool } = require("pg");

// const pool = new Pool({
//     host: "localhost",
//     user: "postgres",
//     password: "123456",
//     database: "node"
// });

// (async () => {
//     try {
//         const res = await pool.query("SELECT NOW()");
//         console.log(res.row[0].now);
//     } catch(error) {
//         console.log(error.message);
//     } finally {
//         pool.end();
//     }
// })();

// try {
//     await pool.query(`
//     CREATE TABLE IF NOT EXISTS funcionarios (
//     id SERIAL PRIMARY KEY,
//     nome text NOT NULL,
//     email text NOT NULL UNIQUE,
//     telefone text NOT NULL UNIQUE
//     );
//     CREATE TABLE IF NOT EXISTS enderecos (
//     id SERIAL PRIMARY KEY,
//     rua text NOT NULL,
//     numero integer NOT NULL,
//     cidade text NOT NULL,
//     estado text NOT NULL,
//     id_funcionario integer NOT NULL REFERENCES funcionarios
//     );`);
//     console.log("Tabelas criadas com sucesso!");
// } catch (error) {
//     console.log(error.message);
// } finally {
//     pool.end();
// }

// try {
// const nome = "Pedro", email = "pedro@email.com", telefone = "(47) 9 9999-9999"
// `SELECT * FROM funcionarios WHERE nome = ${nome}`;
//         const res = await pool.query(`
//             INSERT INTO 
//                 funcionarios (nome, email, telefone) 
//             VALUES
//                 ($1, $2, $3)
//             RETURNING *; `,
//             ["Pedro", "pedro@email.com", "(47) 9 9999-9999"]);
//         console.log(res.rows[0]);
//     } catch (error) {
//         console.log(error.message);
//     } finally {
//         pool.end();
//     }
// })();

const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123456",
    database: "node"
// });

// (async () => {
//     try {
//         const funcionarios = [
//             ["joão", "joão@email.com", "(47) 9 8888-8888"],
//             ["maria", "maria@email.com", "(47) 9 7777-7777"],
//         ];

//         const query = format("INSER INTO funcionarios (nome, email, telefone) VALUES %L RETURNING *", funcionarios)
//         console.log(query);

//         const res = await pool.query(`
//     INSERT INTO
//     funcionarios (nome, email, telefone)
//     VALUES
//     ($1, $2, $3)
//     RETURNING *;`,
//             ["pedro", "pedro@email.com", "(47) 9 9999-9999"]);
//         console.log(res.rows[0]);
//     } catch (error) {
//         console.log(error.message);
//     } finally {
//         pool.end();
//     }
// })();

// try {
//     const { rows } = await pool.query("SELECT * FROM funcionarios WHERE  nome ILIKE $1", ['p%'])
//     console.log(rows);
//     } catch (error) {
//         console.log(error.message);
//     } finally {
//         pool.end();
//     }
// })();