const Router = require('koa-router');

const router = new Router();

const Auth = require('./controllers/auth');
const Jogos = require('./controllers/jogos');
const Classificacao = require('./controllers/classificacao');

router.post('/auth', Auth.autenticar);

router.get('/jogos/:rodada', Jogos.obterJogosDeUmaRodada);
router.get('/classificacao', Classificacao.obterClassificacao);

module.exports = router;
