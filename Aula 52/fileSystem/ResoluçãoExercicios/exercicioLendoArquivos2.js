const fsPromises = require("fs/promises");
const path = require("path");

async function getUserByName(name) {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "users.json"));
        const users = JSON.parse(data.toString("utf-8"));
        
        const user = users.find(user => user.nome === name);

        return user
    } catch (err) {
        console.log(err.message);
    }
}

(async () => {
    const user = await getUserByName("Pedr");

    if (user) {
        console.log(`Usuário encontrado:\nnome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);
    } else {
        console.log("Usuário não foi encontrado!");
    }
})();