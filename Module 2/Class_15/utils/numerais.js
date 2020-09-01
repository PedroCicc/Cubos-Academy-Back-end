//parOuImpar

const isOdd = (numero) => {
    if (typeof numero !== "number") {
        console.log("Erro: não foi passado um número.")
        return false;
    }

    if (numero % 2 !== 0) {
        return true;
    } else {
        return false;
    }
};

const isEven = (numero) => {
    if (typeof numero !== "number") {
        console.log("Erro: não foi passado um número.")
        return false;
    }

    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(3));

module.exports = {
    isOdd: isOdd,
    isEven: isEven
};