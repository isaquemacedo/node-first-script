const fatorial = (num) => {
    if(num === 0) return 1

    return num * fatorial(num - 1)
}

// module.exports = {
//     fatorial,
//     funcao: funcao2
// }

module.exports = fatorial