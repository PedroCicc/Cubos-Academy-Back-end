/**
 * Criando o servidor
 */
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const server = new Koa();
const router = require('./src/routes');

server.use(bodyparser());

server.use(router.routes());

server.listen(PORT, () =>
	console.log(`O servidor está rodando na porta ${PORT}.`)
);
