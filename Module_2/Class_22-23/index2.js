const Koa = require("koa");

const server = new Koa();

server.use((ctx) => {
    if (ctx.method === 'GET') {
        ctx.body = 'GET';
    } else if (ctx.method === 'POST') {
        ctx.body = 'POST';
    } else {
        ctx.status = 405; // Método não permitido
        ctx.body = 'Método não permitido.';
    };
});

server.listen(8081, () => console.log('Rodando na porta 8081.'));
