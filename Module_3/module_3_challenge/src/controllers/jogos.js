const response = require('./response');
const Jogos = require('../respositories/jogos');

const obterJogos = async (ctx) => {
	const { rodada } = ctx.params;
	const result = await Jogos.obterJogos(rodada);
	return response(ctx, 200, result);
};

module.exports = { obterJogos };
