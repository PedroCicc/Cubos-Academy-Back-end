const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

require('dotenv').config();

const server = new Koa();
const router = require('./src/routes');

server.use(bodyparser());
server.use(router.routes()); // Retorna um middleware

server.listen(8081, () => console.log('Rodando!'));