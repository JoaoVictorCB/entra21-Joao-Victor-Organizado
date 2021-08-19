const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        console.log(req.params);
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!usuario) {
            return res.status(404).json({ message: "Usuário não foi encontrado!" });
        }

        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Ocorreu um erro" });
    }
});

router.get("/", async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();

        res.json(usuarios);
    } catch (err) {
        console.log(error);
        res.status(400).json({ message: "Ocorreu um erro" });
    }
});

router.post("/", async (req, res) => {
    // Validar se o usuário já existe através do e-mail
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (err) {
        console.log(error);
        res.status(400).json({ message: "Ocorreu um erro" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!usuario) {
            return res.status(404).json({ message: "Usuário não foi encontrado!" });
        }

        await usuario.destroy();

        res.status(204).end();
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Ocorreu um erro" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!usuario) {
            return res.status(404).json({ message: "Usuário não foi encontrado!" });
        }

        const usuarioAtualizado = req.body;

        Object.assign(usuario, usuarioAtualizado);

        await usuario.save();

        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Ocorreu um erro" });
    }
});

module.exports = router;