const koa = require("koa");
const server = new koa();

const contexto = async (ctx) => {
    ctx.body = "Olá, mundo!";

    if (ctx.originalUrl === "/world") {
        ctx.body = "Olá, mundo!";
    } else if (ctx.originalUrl === "/cubos") {
        ctx.body = "Olá, Cubos!"
    };
    
    console.log("Requisição para:", ctx.originalUrl);
};

server.use(contexto);

server.listen(8081, () => {
    console.log("O servidor está rodando!");
});