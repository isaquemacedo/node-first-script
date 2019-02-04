/*
  Forma de carregamento do node.js:
  
  1º Pasta -> Package.json
  2º Arquivo no mesmo nível
  3º Pasta
*/
const fatorial = require('./fatorial')

console.log('n-fatorial')

/* console.log(`Executando o script a partir do diretorio ${process.cwd()}`)

process.on('exit', () => {
    console.log('script está prestes a terminar')
}) */

const num =  parseInt(process.argv[2])

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)