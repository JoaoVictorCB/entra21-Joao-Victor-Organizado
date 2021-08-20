const { Usuario } = require("../db/models");
const createError = require("http-errors")

async function getUsuarios() {
    const usuarios = await Usuario.findAll();

    return usuarios;
};

async function getUsuario(id) {
    const usuario = await Usuario.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!usuario) {
        throw new createError(404, "Usuario não encontrado!");
    }

    res.json(usuario);
}

async function createUsuario(usuario) {
    const [usuario, criadoAgora] = await Usuario.findOrCreate({
        where: { email: novoUsuario.email },
        defaults: novoUsuario
    });

    if (!criadoAgora) throw new createError(409, "Usuário já está cadastrado!");

    return usuario;
}

async function updateUsuario(usuarioAtualizado) {
        const usuario = await Usuario.findOne({ where: { id } });

        if (!usuario) {
            throw new createError(404, "Usuário não existe!");
        }

        Object.assign(usuario, usuarioAtualizado);
        await usuario.save();
        return usuario;
    }

async function removeUsuario(id) {
    const usuario = await Usuario.findOne({
        where: {
            id
        }
    });

    if (!usuario) throw new createError(404, "Usuário não existe!");

    await usuario.destroy();
}

module.exports = {
    getUsuarios,
    getUsuario,
    // createUsuario,
    // updateUsuario,
    // removeUsuario
}