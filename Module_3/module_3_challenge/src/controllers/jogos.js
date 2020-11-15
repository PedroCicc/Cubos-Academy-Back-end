const response = require('./response');
const JogosDB = require('../repositories/jogosdb');

async function obterJogosDeUmaRodada(ctx) {
	const { rodada = null } = ctx.params;

	if (rodada !== null) {
		const result = await JogosDB.obterJogosDeUmaRodada(rodada);

		if (result) {
			return response(ctx, 200, result);
		}

		return response(ctx, 400, {
			mensagem: 'A rodada deve ser um número entre 1 e 38.',
		});
	}
	return response(ctx, 400, { mensagem: 'Mal formatado.' });
}

module.exports = { obterJogosDeUmaRodada };
