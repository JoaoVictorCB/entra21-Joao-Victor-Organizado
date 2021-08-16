require("dotenv").config();
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;

// Testando conexão
// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Conexão bem sucedida!');
//     } catch (error) {
//         console.error('Conexão falhou!', error);
//     } finally {
//         sequelize.close();
//     }
// })();