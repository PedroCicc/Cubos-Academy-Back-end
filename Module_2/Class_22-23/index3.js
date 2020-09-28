const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const { createContext } = require('vm');

const server = new Koa();

server.use(bodyparser());

/*
Tarefa
Lista de tarefas
Adicionar uma nova tarefa - POST [X]
Deletar uma atividade - DELETE [X]
Atualizar o estado de concluido - PUT [X]
Listar a lista de tarefas - GET [X]
*/

const tarefa = {
    titulo: 'Preparar aula',
    descricao: 'Aula do dia 1',
    concluida: false,
    deletada: false,
};

const listaDeTarefas = [
    {
        titulo: 'Preparar aula',
        descricao: 'Aula do dia 1',
        concluida: false,
        deletada: false,
    }
];

const obterListaDeTarefas = () => {
    const listaSemDeletados = [];

    listaDeTarefas.forEach((elemento) => {
        if (elemento.deletada === false) {
            listaSemDeletados.push(elemento);
        };
    });

    return listaSemDeletados;
};

const obterTarefa = (index) => {
    const tarefa = listaDeTarefas[index];

    if (tarefa) {
        return tarefa;
    } else {
        return null;
    };
};

const deletarTarefa = (index) => {
    const tarefa = obterTarefa(index);

    if (tarefa) {
        listaDeTarefas.splice(index, 1);
        return true;
    } else {
        return false;
    };
};

const adicionarTarefa = (tarefa) => {
    const novaTarefa = {
        titulo: tarefa.titulo ? tarefa.titulo : 'sem titulo',
        descricao: tarefa.descricao ? tarefa.descricao : 'sem descrição',
        concluida: tarefa.concluida ? tarefa.concluida : false,
        deletada: false
    };
    listaDeTarefas.push(novaTarefa);

    return novaTarefa;
};

const atualizarConclusao = (index, estado) => {
    const tarefa = obterTarefa(index);

    const tarefaAtualizada = {
        titulo: tarefa.titulo,
        descricao: tarefa.descricao,
        concluida: estado,
        deletada: tarefa.deletada
    };

    if (tarefa) {
        listaDeTarefas.splice(index, 1, tarefaAtualizada);
        return tarefaAtualizada;
    } else {
        return false;
    };
};

server.use((ctx) => {
    const path = ctx.url;
    const method = ctx.method;
    if (path === '/tarefas') {
        if (method === 'GET') {
            ctx.body = obterListaDeTarefas();
        } else if (method === 'POST') {
            const tarefa = adicionarTarefa(ctx.request.body);
            ctx.body = tarefa;
        } else {
            ctx.status = 404;
            ctx.body = 'Não encontrado';
        };
    } else if (path.includes('/tarefas/')) {
        const pathQuebrado = path.split('/');
        if (pathQuebrado[1] === 'tarefas') {
            const index = pathQuebrado[2];
            if (index) {
                if (method === 'GET') {
                    ctx.body = obterTarefa(index);
                } else if (method === 'DELETE') {
                    const resposta = deletarTarefa(index);
                    if (resposta === true) {
                        ctx.body = 'Tarefa deletada com sucesso!';
                    } else {
                        ctx.body = 'Não foi possível deletar essa tarefa.';
                    }
                } else if (method === 'PUT') {
                    const estado = ctx.request.body.estado;
                    if (index && estado === true && estado === false) {
                        ctx.status = 400;
                        ctx.body = 'Requisição mal formatada';
                    } else {
                        const resposta = atualizarConclusao(index, estado);
                        if (resposta) {
                            ctx.body = resposta;
                        } else {
                            ctx.status = 404;
                            ctx.body = resposta;
                        };
                    };
                };        
            } else {
                ctx.status = 404;
                ctx.body = 'Não encontrado';
            };
        };
    } else {
        ctx.status = 404;
        ctx.body = 'Não encontrado';
    };
});

server.listen(8081, () => console.log('Rodando na porta 8081.'));
