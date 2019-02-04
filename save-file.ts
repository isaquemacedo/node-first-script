import fs from 'fs' // fs == file system

const agrv = require('yargs')
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv

fs.writeFile(agrv.filename, agrv.content, (error) => {
    if (error) throw error
    console.log(`Arquivo ${agrv.filename} foi salvo com sucesso.`)
})