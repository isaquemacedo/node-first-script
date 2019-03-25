/*
  Forma de carregamento do node.js:
  
  1º Pasta -> Package.json
  2º Arquivo no mesmo nível
  3º Pasta
*/

import { fatorial } from './fatorial'

const yargs = require('yargs').demandOption('num').argv

console.log('===== n-fatorial =====')

const num = yargs.num

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)

// console.log(module.paths)