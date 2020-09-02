const fs = require("fs");

const cartas = fs.readFileSync("cartas.txt");
const enderecos = fs.readFileSync("enderecos.txt");

let separarCartas = cartas.toString().split("---");
let separarEnderecos = enderecos.toString().split("---");

const mensagens = (separarCartas) => {
    for (let i = 0; i < separarCartas.length; i++) {
        separarCartas[i] = separarCartas[i].trim().split('\n');
    };

    for (let j = 0; j < separarCartas.length; j++) {
        console.log("[INICIO DA MENSAGEM]");
        console.log("Remetente: " + separarCartas[j][0]);
        console.log("Destinatário: " + separarCartas[j][1]);
        console.log("Mensagem: " + separarCartas[j][2]);
        console.log("[FIM DA MENSAGEM]");
    };
};

const mensagensComEnderecos = (separarCartas, separarEnderecos) => {
    for (let i = 0; i < separarCartas.length; i++) {
        separarCartas[i] = separarCartas[i].trim().split('\n');
    };

    for (let j = 0; j < separarEnderecos.length; j++) {
        separarEnderecos[j] = separarEnderecos[j].trim().split('\n');
    };

    for (let k = 0; k < separarCartas.length; k++) {
        console.log("[INICIO DA MENSAGEM]");
        console.log("Remetente: " + separarCartas[k][0]);
        console.log("Destinatário: " + separarCartas[k][1]);
        for (let l = 0; l < separarEnderecos.length; l++) {
            if (separarEnderecos[l][0] === separarCartas[k][1]) {
                console.log("Endereço: " + separarEnderecos[l][1]);
                break;
            } else {
                continue;
            };
        };
        console.log("Mensagem: " + separarCartas[k][2]);
        console.log("[FIM DA MENSAGEM]");
    };
};

// mensagens(separarCartas);
mensagensComEnderecos(separarCartas, separarEnderecos);