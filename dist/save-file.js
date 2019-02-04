"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs")); // fs == file system
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
