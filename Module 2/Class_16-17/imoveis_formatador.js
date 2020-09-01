// Aula 16-17 - Exercício para aula

const fs = require("fs");
const csvParser = require('csv-parser');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const chalk = require('chalk');

const stream = fs.createReadStream("houses.csv")
    // .pipe(csvParser())

let conteudo = [];

stream.pipe(csvParser(0)).on("data", (data) => {
    conteudo.push({
        Id: conteudo.length + 1,
        city: data['city'].trim(),
        area: Number(data['area'].replace(",", ".")),
        rooms: Number(data['rooms']),
        bathroom: Number(data['bathroom']),
        'parking spaces': Number(data['parking spaces']),
        floor: Number(data['floor'].replace(",", ".")),
        animal: Boolean(data['animal']),
        furniture: Boolean(data['furniture']),
        hoa: Number(data['hoa']) * 100,
        'rent amount': Number(data['rent amount']) * 100,
        'property tax': Number(data['property tax']) * 100,
        'fire insurance': Number(data['fire insurance']) * 100,
        total: Number(data['total']) * 100
    });
});

stream.on("end", () => {
    const csvWriter = createCsvWriter({
        path: 'imoveis_formatado.csv',
        header: [
            {id: 'Id', title: 'id'},
            {id: 'city', title: 'cidade'},
            {id: 'area', title: 'area'},
            {id: 'rooms', title: 'quartos'},
            {id: 'bathroom', title: 'banheiros'},
            {id: 'parking spaces', title: 'vaga_garagem'},
            {id: 'floor', title: 'andar'},
            {id: 'animal', title: 'animais'},
            {id: 'furniture', title: 'moveis'},
            {id: 'hoa', title: 'taxa_proprietarios'},
            {id: 'rent amount', title: 'aluguel'},
            {id: 'property tax', title: 'taxa_contribuicao_predial'},
            {id: 'fire insurance', title: 'seguro_contra_incendios'},
            {id: 'total', title: 'total'}
        ]
    });

    console.log(chalk.blue(`O arquivo começou a ser processado.`));
    csvWriter.writeRecords(conteudo);
    console.log(chalk.green(`O arquivo terminou de ser processado e o arquivo ${"imoveis_formatado.csv"} foi criado.`))
});