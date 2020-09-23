/* Criando servidor */

const Koa = require('koa');
const bodyparser = require('koa-bodyparser');

const server = new Koa();

server.use(bodyparser());

/* Função para formatar sucessos */

const formatarSucesso = (ctx, dados, status = 200) => {
    ctx.status = status;
    ctx.body = {
        status: 'sucesso',
        dados: dados,
    };
};

/* Função para formatar erros */

const formatarErro = (ctx, mensagem, status = 404) => {
    ctx.status = status;
    ctx.body = {
        status: 'erro',
        dados: {
            mensagem: mensagem,
        },
    };
};

/* Declaração de arrays */

const listaDeProdutos = [];
const listaDePedidos = [];

/* Função para obter todos os produtos, filtrando os que foram deletados */

const obterProdutos = () => {
    return listaDeProdutos.filter((produto) => !produto.deletado);
};

/* Função para adicionar/criar um produto */

const adicionarProduto = (ctx) => {
    const body = ctx.request.body;

    if (!body.nome || !body.qtdDisponivel || !body.valor) {
        formatarErro(ctx, 'Pedido mal-formatado.', 400);
        return;
    };

    const produto = {
        id: listaDeProdutos.length + 1,
        nome: body.nome,
        qtdDisponivel: body.qtdDisponivel,
        valor: body.valor,
        deletado: false,
    };

    listaDeProdutos.push(produto);

    return produto;
};

/* Função para atualizar um produto */

const atualizarProduto = (ctx) => {
    const id = ctx.url.split("/")[2];
    const body = ctx.request.body;

    if (!body.nome && !body.qtdDisponivel && !body.valor) {
        formatarErro(ctx, 'Pedido mal-formatado.', 400);
        return;
    }

    if (id) {
        const produtoAtual = listaDeProdutos[id - 1];
        if (produtoAtual) {
            const produtoAtualizado = {
                id: Number(id),
                nome: body.nome ? body.nome : produtoAtual.nome,
                qtdDisponivel: body.qtdDisponivel ? body.qtdDisponivel : produtoAtual.qtdDisponivel,
                valor: body.valor ? body.valor : produtoAtual.valor,
                deletado: produtoAtual.deletado,
            };

            listaDeProdutos[id - 1] = produtoAtualizado;

            return produtoAtualizado;
        }
    } else {
        formatarErro(ctx, 'Produto não encontrado.', 404);
    };
};

/* Função para deletar um produto */

const deletarProduto = (ctx) => {
    const id = ctx.url.split("/")[2];
    const body = ctx.request.body;

    if (typeof body.estado !== 'boolean') {
        formatarErro(ctx, 'Pedido mal-formatado', 400);
        return;
    };

    if (id) {
        const produtoAtual = listaDeProdutos[id - 1];

        if (produtoAtual) {
            const produtoAtualizado = {
                id: produtoAtual.id,
                nome: produtoAtual.nome,
                qtdDisponivel: produtoAtual.qtdDisponivel,
                valor: produtoAtual.valor,
                deletado: body.estado,
            };

            listaDeProdutos[id - 1] = produtoAtualizado;

            return produtoAtualizado;
        }
    }
};

/* Função para obter todos os pedidos, filtrando os que foram deletados */

const obterPedidos = () => {
    return listaDePedidos.filter((pedido) => !pedido.deletado);
};

/* Função para adicionar/criar um pedido */

const adicionarPedido = (ctx) => {
    const body = ctx.request.body;

    if (!body.produtos || !body.estado || !body.idCliente) {
        formatarErro(ctx, 'Pedido mal-formatado.', 400);
        return;
    };

    const pedido = {
        id: listaDePedidos.length + 1,
        produtos: body.produtos,
        estado: body.estado,
        idCliente: body.idCliente,
        deletado: false,
        valorTotal: 0,
    };

    listaDePedidos.push(pedido);

    return pedido;
};

/* Função para selecionar como o pedido vai ser atualizado */

const atualizarPedido = (ctx) => {
    const body = ctx.request.body;

    if (body.estado) {
        return atualizarEstadoDoPedido(ctx);
    } else if (body.produto) {
        return adicionarProdutosNoPedido(ctx);
    } else {
        formatarErro(ctx, 'Pedido mal-formatado.', 400);
        return;
    };
};

/* Função para atualizar o estado de um pedido */

const atualizarEstadoDoPedido = (ctx) => {
    const id = ctx.url.split("/")[2];
    const body = ctx.request.body;

    if (!body.estado) {
        formatarErro(ctx, 'Pedido mal-formatado.', 400);
        return;
    }

    if (id) {
        const pedidoAtual = listaDePedidos[id - 1];
        if (pedidoAtual) {

            if (pedidoAtual.produtos.length === 0) {
                formatarErro(ctx, 'Pedido mal-formatado.', 400);
                return;
            }

            if (pedidoAtual.estado === 'cancelado' || pedidoAtual.estado === 'processando' || pedidoAtual.estado === 'pago' || pedidoAtual.estado === 'entregue') {
            
                const pedidoAtualizado = {
                    id: Number(id),
                    produtos: pedidoAtual.produtos,
                    estado: body.estado ? body.estado : pedidoAtual.estado,
                    idCliente: pedidoAtual.idCliente,
                    deletado: pedidoAtual.deletado,
                    valorTotal: pedidoAtual.valorTotal
                };

                listaDePedidos[id - 1] = pedidoAtualizado;

                return pedidoAtualizado;
            }
        }
    } else {
        formatarErro(ctx, 'Pedido não encontrado.', 404);
    };
};

/* Função para adicionar produtos em um pedido */

const adicionarProdutosNoPedido = (ctx) => {
    const id = ctx.url.split("/")[2];
    const body = ctx.request.body;

    if (!body.produto) {
        formatarErro(ctx, 'Pedido mal-formatado.', 400);
        console.log('entrou aqui');
        return;
    }

    if (id) {
        const pedidoAtual = listaDePedidos[id - 1];
        if (pedidoAtual) {
            if (body.produto.id && body.produto.qtd) {

                if (listaDeProdutos[id - 1]) {
                 
                    if (body.produto.qtd <= listaDeProdutos[id - 1].qtdDisponivel) {
                        
                        listaDeProdutos[id - 1] -= body.produto.qtd;
                        
                        pedidoAtual.produtos.push({
                            id: listaDeProdutos.length + 1,
                            nome: body.nome,
                            qtdDisponivel: body.qtdDisponivel,
                            valor: body.valor,
                        });

                        const pedidoAtualizado = {
                            id: Number(id),
                            produtos: pedidoAtual.produtos,
                            estado: pedidoAtual.estado,
                            idCliente: pedidoAtual.idCliente,
                            deletado: pedidoAtual.deletado,
                            valorTotal: pedidoAtual.valorTotal
                        };
            
                        listaDePedidos[id - 1] = pedidoAtualizado;
            
                        return pedidoAtualizado;
                
                    }
                }                
            }
        }
    } else {
        formatarErro(ctx, 'Pedido não encontrado.', 404);
    };
};

/* Função para deletar um pedido */

const deletarPedido = (ctx) => {
    const id = ctx.url.split("/")[2];
    const body = ctx.request.body;

    if (typeof body.deletado !== 'boolean') {
        formatarErro(ctx, 'Pedido mal-formatado', 400);
        return;
    };

    if (id) {
        const pedidoAtual = listaDePedidos[id - 1];

        if (pedidoAtual) {
            const pedidoAtualizado = {
                id: pedidoAtual.id,
                produtos: pedidoAtual.produtos,
                estado: pedidoAtual.estado,
                idCliente: pedidoAtual.idCliente,
                deletado: body.deletado,
                valorTotal: pedidoAtual.valorTotal
            };

            listaDePedidos[id - 1] = pedidoAtualizado;

            return pedidoAtualizado;
        }
    }
};

/* Estrutura de rotas do produto */

const rotasProdutos = (ctx, path) => {
    if (ctx.method === 'GET') {
        /* Filtrando se a requisição é de um produto ou de todos eles */
        const id = path[2];
        if (id) {
            const produtoAtual = listaDeProdutos[id - 1];
            if (produtoAtual) {
                formatarSucesso(ctx, produtoAtual);
            } else {
                formatarErro(ctx, 'Produto não encontrado.', 404);
            };
        } else {
            const listaDeProdutos = obterProdutos();
            formatarSucesso(ctx, listaDeProdutos);
        }
    } else if (ctx.method === 'POST') {
        const produto = adicionarProduto(ctx);

        if (produto) {
            formatarSucesso(ctx, produto, 201);
        };
    } else if (ctx.method === 'PUT') {
        const produto = atualizarProduto(ctx);

        if (produto) {
            formatarSucesso(ctx, produto, 200)
        };
    } else if (ctx.method === 'DELETE') {
        const produtoDeletado = deletarProduto(ctx);

        if (produtoDeletado) {
            formatarSucesso(ctx, produtoDeletado, 200);
        };
    } else {
        formatarErro(ctx, 'Método não permitido.', 405);
    };
};

/* Estrutura de rotas do pedido */

const rotasPedidos = (ctx, path) => {
    if (ctx.method === 'GET') {
        /* Filtrando se a requisição é de um pedido ou de todos eles */
        const id = path[2];
        if (id) {
            const pedidoAtual = listaDePedidos[id - 1];
            if (pedidoAtual) {
                formatarSucesso(ctx, pedidoAtual);
            } else {
                formatarErro(ctx, 'Pedido não encontrado.', 404);
            };
        } else {
            const listaDePedidos = obterPedidos();
            formatarSucesso(ctx, listaDePedidos);
        }
    } else if (ctx.method === 'POST') {
        const pedido = adicionarPedido(ctx);

        if (pedido) {
            formatarSucesso(ctx, pedido, 201);
        };
    } else if (ctx.method === 'PUT') {
        const pedido = atualizarPedido(ctx);

        if (pedido) {
            formatarSucesso(ctx, pedido, 200)
        };
    } else if (ctx.method === 'DELETE') {
        const pedidoDeletado = deletarPedido(ctx);

        if (pedidoDeletado) {
            formatarSucesso(ctx, pedidoDeletado, 200);
        };
    } else {
        formatarErro(ctx, 'Método não permitido.', 405);
    };
};

/* Função que chama a rota correspondente em cada caso */

const rotas = (ctx) => {
    const path = ctx.url.split("/");

    if (path[1] === 'products') {
        rotasProdutos(ctx, path);
    } else if (path[1] === 'orders') {
        rotasPedidos(ctx, path);
    } else {
        formatarErro(ctx, 'Conteúdo não encontrado.', 404);
    };
};

/* Definindo o 'body' da repsosta */

server.use((ctx) => {
    rotas(ctx);
});

server.listen(8081, () => console.log('Servidor rodando na porta 8081.'));
