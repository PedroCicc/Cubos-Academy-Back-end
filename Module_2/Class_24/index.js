/* Criando o servidor */

const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

const server = new Koa();

server.use(bodyparser());

/* Gerando um código pra a url encurtada */

const gerarCodigo = () => Math.random().toString(36).substr(2, 9);

const urls = [];

const obterUrl = (codigo) => {
    for (let i = 0; i < urls.length; i++) {
        return urls[i][codigo];
    };

    return null;
};

/* Tratando requisições com POST */

const tratarRequisicaoPost = (ctx) => {
    const url = ctx.request.body.url;
            
    if (!url) {
        ctx.status = 400;
        ctx.body = {
            status: "erro",
            dados: {
                mensagem: "Pedido mal-formatado."
            }
        };
    } else {
        const codigo = gerarCodigo();
        urls.push({[codigo]: url});

        ctx.status = 201;
        ctx.body = {
            status: 'sucesso',
            dados: {
                url_original: url,
                url_encurtada: `localhost:8081/${codigo}`,
            }
        };
    };
};

/* Tratando requisições com GET */

const tratarRequisicaoGet = (ctx) => {
    const url_desejada = ctx.url.split('/')[1];
    const url_original = obterUrl(url_desejada);

    if (url_original) {
        ctx.status = 301;
        ctx.redirect(url_original);
    } else {
        ctx.status = 404;
        ctx.body = {
            status: 'erro',
            dados: {
                mensagem: 'Conteúdo não encontrado.'
            }
        }
    };
};

/* Tratando erros */

const tratarErro = (ctx, status, mensagem) => {
    ctx.status = status;
    ctx.body = {
        status: 'erro',
        dados: {
            mensagem: mensagem
        }
    };
};

/* Rotas da entidade */

server.use((ctx) => {
    if (ctx.url.includes('/encurta')) {
        if (ctx.method === 'POST') {
            tratarRequisicaoPost(ctx);
        };
    } else if (ctx.method === 'GET') {
        tratarRequisicaoGet(ctx);
    } else {
        tratarErro(ctx, 404, 'Conteúdo não encontrado.');
    };
});

server.listen(8081, () => console.log('O servidor está rodando na porta 8081.'));
