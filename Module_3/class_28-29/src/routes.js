const Router = require('koa-router');
const response = require('./utils/response');
const posts = require('./controllers/code');
const { obterAutores } = require('./controllers/code');
const { adicionarAutor } = require('./controllers/code');
const { atualizarAutor } = require('./controllers/code');
const { deletarAutor } = require('./controllers/code');
const { obterPosts } = require('./controllers/code');
const { adicionarPost } = require('./controllers/code');
const { atualizarPost } = require('./controllers/code');
const { deletarPost } = require('./controllers/code');

const router = new Router();

router.get('/autores', obterAutores);
router.post('/autores/:id', adicionarAutor);
router.put('/autores/:id', atualizarAutor);
router.delete('/autores/:id', deletarAutor);

router.get('/posts', obterPosts);
router.post('/posts/:id', adicionarPost);
router.put('/posts/:id', atualizarPost);
router.delete('/posts/:id', deletarPost);

const rotasAutores = (ctx, path) => {
	const id = path[2];
	const autores = obterAutores();
	const autor = adicionarAutor(ctx);
	const autorAtualizado = atualizarAutor(ctx);
	const autorDeletado = deletarAutor(ctx);

	switch (ctx.method) {
		case 'GET':
			if (id) {
				const autorAtual = autores[id - 1];
				if (autorAtual) {
					response(ctx, autorAtual);
				} else {
					response(ctx, 'Autor não encontrado', 404);
				}
			} else {
				response(ctx, autores);
			}
			break;
		case 'POST':
			if (autor) {
				response(ctx, autor, 201);
			}
			break;
		case 'PUT':
			if (autorAtualizado) {
				response(ctx, autorAtualizado, 200);
			}
			break;
		case 'DELETE':
			if (autorDeletado) {
				response(ctx, autorDeletado, 200);
			}
			break;
		default:
			response(ctx, 'Método não permitido', 405);
			break;
	}
};

const rotasPosts = (ctx, path) => {
	const id = path[2];
	const post = obterPosts();
	const postAtual = posts[id - 1];
	const novoPost = adicionarPost(ctx);
	const postAtualizado = atualizarPost(ctx);
	const postDeletado = deletarPost(ctx);

	switch (ctx.method) {
		case 'GET':
			if (id) {
				if (postAtual) {
					response(ctx, postAtual);
				} else {
					response(ctx, 'Post não encontrado', 404);
				}
			} else {
				response(ctx, post);
			}
			break;
		case 'POST':
			if (novoPost) {
				response(ctx, novoPost, 201);
			}
			break;
		case 'PUT':
			if (postAtualizado) {
				response(ctx, postAtualizado, 200);
			}
			break;
		case 'DELETE':
			if (postDeletado) {
				response(ctx, postDeletado, 200);
			}
			break;
		default:
			response(ctx, 'Método não permitido', 405);
			break;
	}
};

const rotas = (ctx) => {
	const path = ctx.url.split('/'); // ["", "autor / post", "1"];

	if (path[1] === 'autor') {
		rotasAutores(ctx, path);
	} else if (path[1] === 'posts') {
		rotasPosts(ctx, path);
	} else {
		response(ctx, 'Conteúdo não encontrado', 404);
	}
};

module.exports = router;
