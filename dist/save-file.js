"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs"); // fs == file system
const agrv = require('yargs')
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv;
fs_1.default.writeFile(agrv.filename, agrv.content, (error) => {
    if (error)
        throw error;
    console.log(`Arquivo ${agrv.filename} foi salvo com sucesso.`);
});
//# sourceMappingURL=save-file.js.map