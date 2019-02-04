/*
  Forma de carregamento do node.js:
  
  1º Pasta -> Package.json
  2º Arquivo no mesmo nível
  3º Pasta
*/
const fatorial = require('./fatorial')
const yargs = require('yargs').demandOption('num').argv

console.log('n-fatorial')

const num = yargs.num

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)

/* 
    Todos os lugares aonde o node busca os required's 
*/
console.log(module.paths)