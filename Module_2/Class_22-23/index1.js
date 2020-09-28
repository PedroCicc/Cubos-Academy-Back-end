const Koa = require("koa");
const { userInfo } = require("os");

const server = new Koa();

server.use((ctx) => {
    ctx.status = 201;
    const name = ctx.query.name;
    const redirect = ctx.query.redirect;
    if (!name) {
        ctx.status = 400;
        ctx.body = 'Você precisa passar um nome.';
        return;
    };
    
    if (redirect) {
        ctx.redirect('https://www.google.com/');
        return;
    };
    ctx.body = `Olá, ${name}!`
});

server.listen(8081, () => console.log('Rodando na porta 8081!'));