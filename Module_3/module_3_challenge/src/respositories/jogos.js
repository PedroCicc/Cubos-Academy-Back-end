const database = require('../utils/database');

const obterJogos = async (rodada) => {
	const query = `select * from jogos where rodada = $1;`;

	const result = await database.query({
		text: query,
		values: [rodada],
	});

	return result.rows;
};

module.exports = { obterJogos };
