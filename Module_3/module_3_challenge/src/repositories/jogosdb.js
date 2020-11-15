const database = require('../utils/database');

async function obterJogosDeUmaRodada(rodada) {
	const query = 'SELECT * FROM jogos WHERE rodada = $1;';

	const result = await database.query({
		text: query,
		values: [rodada],
	});

	return result.rows;
}

async function obterTodosOsJogos() {
	const query = 'SELECT * FROM jogos';

	const result = await database.query({
		text: query,
	});

	return result.rows;
}

module.exports = {
	obterJogosDeUmaRodada,
	obterTodosOsJogos,
};
