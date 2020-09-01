const chalk = require("chalk");
const numerais = require("./utils/numerais");

const transformarNumero = (numero) => {
    if (numerais.isEven(numero) === true) {
        return `O número é ${chalk.blue(numero)}, sua transformação é ${chalk.red(numero * numero)}`;
    } else if (numerais.isOdd(numero) === true) {
        return `O número é ${chalk.blue(numero)}, sua transformação é ${chalk.red(numero / 3)}`;
    }
}

console.log(transformarNumero(2));
console.log(transformarNumero(1));
console.log(transformarNumero(0.5));
console.log(transformarNumero(15));
console.log(transformarNumero(10));