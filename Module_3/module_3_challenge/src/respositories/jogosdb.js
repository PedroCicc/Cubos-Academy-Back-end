const database = require('../utils/database');

const obterJogosDeUmaRodada = async (rodada) => {
	const query = 'SELECT * FROM jogos WHERE rodada = $1;';

	const result = await database.query({
		text: query,
		values: [rodada],
	});

	return result.rows;
};

module.exports = { obterJogosDeUmaRodada };
