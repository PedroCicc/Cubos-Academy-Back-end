// Aula 16-17

// Vídeo 1 - Buffer, to.String()

const texto = "Meu nome é Pedro";
const buffer = Buffer.from(texto);
console.log(texto);
console.log(buffer);
console.log(buffer.toString());

// Vídeo 2 - Ler arquivos com readFile

const fs = require("fs");

fs.readFile("texto.txt", (err, buffer) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(buffer.toString());
});

// Vídeo 3 - Escrever arquivos com writeFile

const fs = require("fs");

const conteudo = "Uau, eu criei meu primeiro arquivo!"

fs.writeFile("saida2.txt", conteudo, (err) => {
    if (err) {
        console.log(err);
    }
});

// Vídeo 4 - Programação orientada à eventos

const fs = require("fs");

const stream = fs.createReadStream("texto.txt");

let texto = "";

stream.on("data", (data) => {
    texto += data;
    // console.log(data.toString());
    console.log("Código 2: ", texto);
});

stream.on("end", () => {
    console.log("Código 3: ", texto + "!");
});

console.log("Código 1: ", texto);