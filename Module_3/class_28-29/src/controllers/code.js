const response = require('../utils/response');

const autor = {
	id: 1,
	nome: 'Nícolas',
	sobrenome: 'Deçordi',
	email: 'nicolas.decordi@cubos.io',
	senha: '102030',
	deletado: false,
};

const post = {
	id: 1,
	titulo: 'Como se tornar uma dev Back-end',
	subtitulo: 'Os passos listados...',
	conteudo: 'Os passos para se tornar uma dev Back-end são 3...',
	autor: 1,
	publicado: false,
	deletado: false,
};

const autores = [];
autores.push(autor);

const posts = [];
posts.push(post);

const obterAutores = (ctx) => {
	return autores.filter((item) => !item.deletado);
};

const adicionarAutor = (ctx) => {
	const { body } = ctx.request;

	if (!body.nome || !body.sobrenome || !body.email || !body.senha) {
		response(ctx, 400, { mensagem: 'Pedido mal-formatado.' });
		return;
	}

	const autor = {
		id: autores.length + 1,
		nome: body.nome,
		sobrenome: body.sobrenome,
		email: body.email,
		senha: body.senha,
		deletado: false,
	};

	autores.push(autor);

	// eslint-disable-next-line consistent-return
	return autor;
};

const atualizarAutor = (ctx) => {
	const id = ctx.url.split('/')[2];
	const { body } = ctx.request;

	if (!body.nome && !body.sobrenome && !body.email && !body.senha) {
		response(ctx, 400, { mensagem: 'Pedido mal-formatado.' });
		return;
	}

	if (id) {
		const autorAtual = autores[id - 1];
		if (autorAtual) {
			const autorAtualizado = {
				id: Number(id),
				nome: body.nome ? body.nome : autorAtual.nome,
				sobrenome: body.sobrenome
					? body.sobrenome
					: autorAtual.sobrenome,
				email: body.email ? body.email : autorAtual.email,
				senha: body.senha ? body.senha : autorAtual.senha,
				deletado: autorAtual.deletado,
			};

			autores[id - 1] = autorAtualizado;

			// eslint-disable-next-line consistent-return
			return autorAtualizado;
		}
	} else {
		response(ctx, 404, { mensagem: 'Autor não encontrado.' });
	}
};

const obterPostsDeAutor = (autorId) => {
	const postsDoAutor = posts.filter((post) => {
		return post.autor === autorId && post.deletado === false;
	});

	console.log(postsDoAutor);
	return postsDoAutor;
};

const deletarAutor = (ctx) => {
	const id = ctx.url.split('/')[2];
	const { body } = ctx.request;

	if (typeof body.estado !== 'boolean') {
		response(ctx, 400, { mensagem: 'Pedido mal-formatado.' });
		return;
	}

	if (id) {
		const autorAtual = autores[id - 1];
		if (autorAtual) {
			if (body.estado === true && obterPostsDeAutor(id).length > 0) {
				response(ctx, 403, { mensagem: 'Ação proibida.' });
				return;
			}

			const autorAtualizado = {
				id: autorAtual.id,
				nome: autorAtual.nome,
				sobrenome: autorAtual.sobrenome,
				email: autorAtual.email,
				senha: autorAtual.senha,
				deletado: body.estado,
			};

			autores[id - 1] = autorAtualizado;

			// eslint-disable-next-line consistent-return
			return autorAtualizado;
		}
	} else {
		response(ctx, 404, { mensagem: 'Usuário não encontrado.' });
	}
};

// eslint-disable-next-line no-unused-vars
const obterPosts = (_ctx, _path) => {
	return posts.filter((post) => !post.deletado && !post.publicado);
};

const adicionarPost = (ctx) => {
	const { body } = ctx.request;

	if (!body.titulo || !body.conteudo || !body.subtitulo || !body.autor) {
		response(ctx, 400, { mensagem: 'Pedido mal-formatado.' });
		return;
	}
	if (autores[body.autor - 1].deletado === true) {
		response(ctx, 403, { mensagem: 'Pedido proibido.' });
		return;
	}

	const post = {
		id: posts.length + 1,
		titulo: body.titulo,
		conteudo: body.conteudo,
		subtitulo: body.subtitulo,
		autor: body.autor,
		publicado: false,
		deletado: false,
	};

	posts.unshift(post);

	// eslint-disable-next-line consistent-return
	return post;
};

const atualizarPost = (ctx) => {
	const id = ctx.url.split('/')[2];
	const { body } = ctx.request;

	if (
		(!body.conteudo && !body.titulo && !body.subtitulo) ||
		typeof body.publicado !== 'boolean'
	) {
		response(ctx, 400, { mensagem: 'Pedido mal-formatado.' });
		return;
	}

	if (id) {
		const postAtual = posts[id - 1];
		if (postAtual) {
			const postAtualizado = {
				id: Number(id),
				conteudo: body.conteudo ? body.conteudo : postAtual.conteudo,
				titulo: body.titulo ? body.titulo : postAtual.titulo,
				subtitulo: body.subtitulo
					? body.subtitulo
					: postAtual.subtitulo,
				senha: body.senha ? body.senha : postAtual.senha,
				autor: postAtual.autor,
				publicado: !!body.publicado,
				deletado: postAtual.deletado,
			};

			posts[id - 1] = postAtualizado;

			// eslint-disable-next-line consistent-return
			return postAtualizado;
		}
	} else {
		response(ctx, 404, { mensagem: 'Autor não encontrado.' });
	}
};

const deletarPost = (ctx) => {
	const id = ctx.url.split('/')[2];
	const { body } = ctx.request;

	if (typeof body.estado !== 'boolean') {
		response(ctx, 400, { mensagem: 'Pedido mal-formatado.' });
		return;
	}

	if (id) {
		const postAtual = posts[id - 1];
		if (postAtual) {
			const postAtualizado = {
				id: postAtual.id,
				titulo: postAtual.titulo,
				subtitulo: postAtual.subtitulo,
				conteudo: postAtual.conteudo,
				autor: postAtual.autor,
				publicado: postAtual.publicado,
				deletado: body.estado,
			};

			posts[id - 1] = postAtualizado;

			// eslint-disable-next-line consistent-return
			return postAtualizado;
		}
	} else {
		response(ctx, 404, { mensagem: 'Post não encontrado.' });
	}
};

module.exports = {
	obterAutores,
	adicionarAutor,
	atualizarAutor,
	deletarAutor,
	obterPosts,
	adicionarPost,
	atualizarPost,
	deletarPost,
	posts,
};
