"use strict";
/*
  Forma de carregamento do node.js:
  
  1º Pasta -> Package.json
  2º Arquivo no mesmo nível
  3º Pasta
*/
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
const yargs = require('yargs').demandOption('num').argv;
console.log('===== n-fatorial =====');
const num = yargs.num;
console.log(`O fatorial de ${num} é igual a ${fatorial_1.fatorial(num)}`);
// console.log(module.paths)
//# sourceMappingURL=main.js.map