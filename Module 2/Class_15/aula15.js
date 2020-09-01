// Back-end - A15 - 15/08

const transformarString = (texto, transformadora) => {
    if (texto.length === 0) {
        console.log("Utilize um texto maior!");
    }

    let resultado = transformadora(texto);

    resultado += "!\n\ncódigo feito por Pedro";

    return resultado;

};

const transformaA = (texto) => {
    let novoTexto = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "A" || texto[i] === "a") {
            novoTexto += 4;
        } else {
            novoTexto += texto[i];
        }
    }

    return novoTexto;
};

// Exercícios dos vídeos

// 1. Crie uma função que receba um texto e que transforme
// qualquer A em 4, E em 3, I em 1 e O em 0.
// Essa função deve retornar o texto transformado.

const transformaTexto = (texto) => {
    let novoTexto = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "A" || texto[i] === "a") {
            novoTexto += 4;
        } else if (texto[i] === "E" || texto[i] === "e") {
            novoTexto += 3;
        } else if (texto[i] === "I" || texto[i] === "i") {
            novoTexto += 1;
        } else if (texto[i] === "O" || texto[i] === "o") {
            novoTexto += 0;
        } else {
            novoTexto += texto[i];
        }
    }

    return novoTexto;
}

const textinho = transformarString("Abacate com açúcar", transformaTexto);
console.log(textinho);

// 2. Crie uma função que receba um texto e que remova
// quaisquer espaços em branco (    ).
// Essa função deve retornar o texto transformado.

const removeBlank = (texto) => {
    let novoTexto = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " ") {
            novoTexto += "";
        } else {
            novoTexto += texto[i];
        }
    }

    return novoTexto;
}

// const textinho = transformarString("Abacate com açúcar", removeBlank);
// console.log(textinho);