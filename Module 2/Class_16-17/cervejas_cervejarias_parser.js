const fs = require("fs");
const csvParser = require("csv-parser");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const stream = fs.createReadStream("breweries.csv");
const stream2 = fs.createReadStream("beers.csv");

let cervejarias = [], cervejas = [];

stream.pipe(csvParser(0)).on("data", (data) => {
    cervejarias.push({
        id: Number(data['id']),
        name: data['name'].trim().replace(/'/g, "").replace(/`/g, ""),
        city: data['city'].trim().replace(/'/g, "").replace(/`/g, ""),
        state: data['state'].trim(),
    });
});

stream.on("end", () => {
    const csvWriter = createCsvWriter({
        path: 'breweries_formatado.csv',
        header: [
            {id: 'id', title: 'id'},
            {id: 'name', title: 'nome'},
            {id: 'city', title: 'cidade'},
            {id: 'state', title: 'estado'},
        ]
    });
    
    csvWriter.writeRecords(cervejarias);
});

stream2.pipe(csvParser(0)).on("data", (data) => {
    cervejas.push({
        id: Number(data['id']),
        abv: Number(data['abv']),
        ibu: Number(data['ibu']),
        national_id: Number(data['national_id']),
        name: data['name'].trim().replace(/'/g, "").replace(/`/g, "").replace(/"/g, ""),
        style: data['style'].trim().replace(/'/g, "").replace(/`/g, "").replace(/"/g, ""),
        brewery_id: Number(data['brewery_id']),
        ounces: Number(data['ounces']),
    });
});

stream2.on("end", () => {
    const csvWriter = createCsvWriter({
        path: 'beers_formatado.csv',
        header: [
            {id: 'id', title: 'id'},
            {id: 'abv', title: 'abv'},
            {id: 'ibu', title: 'ibu'},
            {id: 'national_id', title: 'id_nacional'},
            {id: 'name', title: 'nome'},
            {id: 'style', title: 'estilo'},
            {id: 'brewery_id', title: 'id_cervejaria'},
            {id: 'ounces', title: 'oncas'},
        ]
    });
    
    csvWriter.writeRecords(cervejas);
});