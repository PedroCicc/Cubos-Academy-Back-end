const gerarCodigo = require('../utils/code');
const response = require('./response');

/**
 * Uma lista de urls
 * Cada url é um objeto do seguinte formato { codigo: url_original }
 */
const urls = [];

/**
 *
 * Obtendo uma url a partir de um código, se existir.
 */
const obterUrl = (codigo) => {
	for (let i = 0; i < urls.length; i++) {
		return urls[i][codigo];
	}

	return null;
};

/**
 * Funçãõ responsável por encurtar uma url.
 */
const shorter = (ctx) => {
	const { url } = ctx.request.body;

	if (!url) {
		response(ctx, 400, { mensagem: 'Pedido mal-formatado.' });
		return;
	}

	const codigo = gerarCodigo();
	urls.push({ [codigo]: url });
	response(ctx, 201, {
		urlOriginal: url,
		urlEncurtada: `localhost:8081/${codigo}`,
	});
};

/**
 * Funçãõ responsável pelo redirect.
 */
const redirect = (ctx) => {
	const urlDesejada = ctx.params.id;
	const urlOriginal = obterUrl(urlDesejada);

	if (urlOriginal) {
		ctx.status = 301;
		ctx.redirect(urlOriginal);
	} else {
		response(ctx, 404, {
			mensagem: 'Conteúdo não encontrado.',
		});
	}
};

module.exports = { shorter, redirect };
