const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./src/routes');
const logger = require('./src/middlewares/logger');

const server = new Koa();
const PORT = process.env.PORT || 8000;
server.use(bodyparser());
server.use(logger);
server.use(router.routes());

server.listen(PORT, () => console.log('Servidor rodando na porta: ', PORT));
