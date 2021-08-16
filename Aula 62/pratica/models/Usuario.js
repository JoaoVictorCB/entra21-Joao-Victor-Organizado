const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../database");

const Usuario = sequelize.define("Usuario", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "E-mail inválido"
            }
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("senha", hashSync(value, 10));
        }
    } 
});

(async () => {
    // Criando tabela Usuarios
    try {
        await Usuario.sync({ force: true });
        console.log("Tabela criada com sucesso!");
    // Inserindo um usuário
    const pedro = await Usuario.create({
        nome: "Pedro",
        email: "pedro@email.com",
        senha: "123456"
    });

    // Modificando o pedro
    pedro.email = "pedrao@email.com"
    pedro.save();
    console.log("E-mail do Pedro atualizado!");

    // Remover Pedro
    await pedro.destroy();
    console.log(("Pedro foi removido d banco de dados"));

    // Inserindo varios usuários
    const usuarios = await Usuario.bulkCreate([
        {
            nome: "Pedro",
            email: "pedro@email.com",
            senha: 123456
        },
        {
            nome: "José",
            email: "jose@email.com",
            senha: "123456"
        }
    ])
    console.log("Usuários inseridos com sucesso!");
    console.log(usuarios);

    // Comparando as senhas
    console.log(compareSync("123456", usuarios[0].toJSON().senha));

    // // Criando todas as tabelas
    // await sequelize.sync({ force: true });
    } catch (err) {
        console.error("Ocorreu um erro ao criar a tabela!", err);
    } finally {
        sequelize.close();
    }
})();