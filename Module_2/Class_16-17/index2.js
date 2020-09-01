// Aula 16-17

// Vídeo 6 - Tratamento de dados e csv-parser
// +
// Vídeo 7 - Salvando um arquivo csv

const fs = require("fs");
const csvParser = require("csv-parser");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const stream = fs.createReadStream("countries.csv");

let conteudo = [];

stream.pipe(csvParser(0)).on("data", (data) => {
    conteudo.push({
        Id: conteudo.length + 1,
        Country: data['Country'].trim(),
        Region: data['Region'].trim(),
        Population: Number(data['Population']),
        'Area (sq. mi.)': Number(data['Area (sq. mi.)'].replace(",", ".")),
        'Pop. Density (per sq. mi.)': Number(data['Pop. Density (per sq. mi.)'].replace(",", ".")),
        'Coastline (coast/area ratio)': Number(data['Coastline (coast/area ratio)'].replace(",", ".")),
        'Net migration': Number(data['Net migration'].replace(",", ".")),
        'Infant mortality (per 1000 births)': Number(data['Infant mortality (per 1000 births)'].replace(",", ".")),
        'GDP ($ per capita)': Number(data['GDP ($ per capita)'].replace(",", ".")),
        'Literacy (%)': Number(data['Literacy (%)'].replace(",", ".")),
        'Phones (per 1000)': Number(data['Phones (per 1000)'].replace(",", ".")),
        Birthrate: Number(data['Birthrate'].replace(",", ".")),
        Deathrate: Number(data['Deathrate'].replace(",", ".")),
        Agriculture: Number(data['Agriculture'].replace(",", ".")),
        Industry: Number(data['Industry'].replace(",", ".")),
        Service: Number(data['Service'].replace(",", "."))
    });
});

stream.on("end", () => {
    const csvWriter = createCsvWriter({
        path: 'countries_saida.csv',
        header: [
            {id: 'Id', title: 'id'},
            {id: 'Country', title: 'pais'},
            {id: 'Region', title: 'regiao'},
            {id: 'Population', title: 'populacao'},
            {id: 'Area (sq. mi.)', title: 'area'},
            {id: 'Pop. Density (per sq. mi.)', title: 'densidade_populacional'},
            {id: 'Coastline (coast/area ratio)', title: 'area_costeira_por_area'},
            {id: 'Net migration', title: 'taxa_migratoria'},
            {id: 'Infant mortality (per 1000 births)', title: 'mortalidade_infantil'},
            {id: 'GDP ($ per capita)', title: 'pib'},
            {id: 'Literacy (%)', title: 'alfabetizacao'},
            {id: 'Phones (per 1000)', title: 'telefonia_movel'},
            {id: 'Birthrate', title: 'taxa_natalidade'},
            {id: 'Deathrate', title: 'taxa_mortalidade'},
            {id: 'Agriculture', title: 'agricultura_porcentagem'},
            {id: 'Industry', title: 'industria_porcentagem'},
            {id: 'Service', title: 'servicos_porcentagem'}
        ]
    });
    
    csvWriter.writeRecords(conteudo);
});
