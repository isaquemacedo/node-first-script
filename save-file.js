const fs = require('fs') // fs == file system

const yargs = require('yargs')
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv

fs.writeFile(yargs.filename, yargs.content, (error) => {
    if (error) throw error
    console.log(`Arquivo ${yargs.filename} foi salvo com sucesso.`)
})