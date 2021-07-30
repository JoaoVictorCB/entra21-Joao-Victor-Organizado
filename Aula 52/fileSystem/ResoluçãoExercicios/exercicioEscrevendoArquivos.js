const { EOL } = require("os");
const os = require("os");
const fsPromises = require("fs/promises");
const path = require("path");

setInterval(async () => {
    const freeMemory = parseInt(os.freemem() / 1024 / 1024),
        totalMemory = parseInt(os.totalmem() / 1024 / 1024),
        usage = parseInt((freeMemory * 100) / totalMemory);

    const content = {
        freeMemory: `${freeMemory} MB`,
        totalMemory: `${totalMemory} MB`,
        usage: `${usage} %`
    }

    const contentInJSON = JSON.stringify(content) + EOL;

    try {
        await fsPromises.appendFile(path.resolve(__dirname, "log.txt"), contentInJSON);
        console.log("Log adicionado");
    } catch (err) {
        console.log(err.message);
    }
}, 5000);