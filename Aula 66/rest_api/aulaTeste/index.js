const express = require("express");
const app = express();
const { Usuario } = require("./db/models");

const porta = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    res.send("post endpoint");
});

app.put("/", (req, res) => {
    res.send("put endpoint");
});

app.delete("/", (req, res) => {
    res.send("delete endpoint");
});

app.get("/usuarios/:id", async (req, res) => {
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
        res.status(400).json({ message: "Ocorreu um erro" });
    }
});

app.get("/usuarios", async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();

        res.json(usuarios);
    } catch (err) {
        res.status(400).json({ message: "Ocorreu um erro" });
    }
});

app.post("/usuarios", async (req, res) => {
    // Validar se o usuário já existe através do e-mail
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (err) {
        res.status(400).json({ message: "Ocorreu um erro" });
    }
});

app.delete("/usuarios/:id", async (req, res) => {
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
        res.status(400).json({ message: "Ocorreu um erro" });
    }
});

app.put("/usuarios/:id", async (req, res) => {
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

// Middleware de tratamento de erros
app.use((error, req, res, next) => {
    res.status(error.status);
    res.json({ message: error.message });
});

app.listen(porta, () => {
    console.log(`Servidor está rodando em http://localhost:${porta}`);
});