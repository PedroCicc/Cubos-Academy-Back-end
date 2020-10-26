const Router = require('koa-router');
const Jogos = require('./controllers/jogos');

const router = new Router();

router.get('/jogos/:rodada', Jogos.obterJogos);

module.exports = router;
