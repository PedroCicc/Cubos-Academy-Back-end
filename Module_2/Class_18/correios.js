const fs = require("fs");

const arquivo = fs.readFileSync("cartas.txt");

console.log(arquivo);