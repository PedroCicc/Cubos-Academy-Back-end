// Grupo 2 - Funções de funcionalidade

// Obtenção de um correntista

// Questão 1: Sabendo dos dados presentes em um correntista, represente uma forma de
// armazenar um correntista ou mais correntistas em javascript.

// Nome do Correntista: string - Nome completo de uma pessoa física.
// CPF do Correntista: string, formato '000.000.000-00' -	Número do CPF de uma pessoa física.
// Código do Banco:	string, formato '000'	- Número do código do banco representado em string.
// Agência:	string, formato '0000-0' - Número da agência representado em forma de string.
// Conta corrente: string, formato '000000-0' - Número da conta corrente representado em forma de string.
// Saldo: number - Valor em centavos do saldo.

// Questão 2: Crie uma função que percorra uma lista de correntistas a partir de um CPF
// e retorne o objeto deste correntista caso exista, do contrário, imprima uma mensagem
// ao usuário dizendo "Não existe CPF cadastrado".

// Criação de novo correntista

// Questão 3: Crie uma função que adicione um novo correntista a uma lista de correntistas,
// salve essas informações em uma variável. Lembre-se que o CPF armazenado deve ser apenas
// uma string com apenas números, utilize a função criada no Grupo 1 para remover caracteres
// não-numéricos de uma string.
// Observação: Não devemos permitir que tenha-se mais de um correntista com os mesmos dados.

// Resolução das questões 1, 2 e 3

// Importação de módulos

const helper = require('./helper');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// Declaração de variáveis globais

let novoCorrentista = {
    nome: '',
    cpf: '',
    codigoDoBanco: '',
    agencia: '',
    contaCorrente: '',
    saldo: 0,
};

let listaDeCorrentistas = [];

// Declaração de funções das questões 1 e 3 - Atendimento para cadastrar e armazenar correntistas

const mensagemDeApertura = () => {
    rl.question('Seja bem-vindo(a)! \n Para realizar um novo cadastro, escreva "cadastro". \n Para consultar as informações de um correntista, escreva "consulta". \n Para encerrar o atendimento, escreva "encerrar". ', (resposta) => {

        if (resposta === "Cadastro" || resposta === "cadastro" || resposta === "CADASTRO") {
            primeiraPergunta();
        } else if (resposta === "Consulta" || resposta === "consulta" || resposta === "CONSULTA") {
            verificarCPF();
        } else if (resposta === "Encerrar" || resposta === "encerrar" || resposta === "ENCERRAR") {
            console.log('Muito obrigado pelo seu tempo! ');
            rl.close();
        } else {
            console.log('Por favor, escreva uma resposta válida. ');
            mensagemDeApertura();
        };

    });
};

const adicionarNovoCorrentista = () => {
    listaDeCorrentistas.push(novoCorrentista);
    novoCorrentista = {
        nome: '',
        cpf: '',
        codigoDoBanco: '',
        agencia: '',
        contaCorrente: '',
        saldo: 0,
    };
    console.log('Pronto! Seu cadastro foi concluido com sucesso!');
    console.log(listaDeCorrentistas);
    mensagemDeApertura();
};

const primeiraPergunta = () => {
    rl.question('Qual é seu nome? ', (resposta) => {
        novoCorrentista.nome = resposta;
        perguntarCPF();
    });
};

const perguntarCPF = (resposta) => {
    rl.question('Qual é o seu CPF? Lembre-se que o número deve conter onze (11) digitos. ', (resposta) => {
        
        if (resposta.length === 11) {
            
            let correntistaCadastrado = false;

            for (let i = 0; i < listaDeCorrentistas.length; i++) {
                if (helper.formatarCPF(resposta) === listaDeCorrentistas[i].cpf) {
                    correntistaCadastrado = true;
                    break;
                };
            };

            if (correntistaCadastrado !== true) {
                novoCorrentista.cpf = helper.formatarCPF(resposta)
                perguntarBanco();
            } else {
                console.log('O CPF desse correntista já está cadastrado na nossa base de dados.');
                perguntarCPF();
            };
            
        } else {
            console.log('Opa! Parece que seu CPF não tem onze (11) digitos. Por favor, escreva um CPF válido. ')
            perguntarCPF();
        };

    });
};

const perguntarBanco = () => {
    rl.question('Qual é o seu banco? Escreva o código de três (3) digitos correspondente. ', (resposta) => {
        
        if (resposta.length === 3) {
            novoCorrentista.codigoDoBanco = helper.obterNomeDoBanco(resposta);
            if (novoCorrentista.codigoDoBanco === false) {
                console.log('Seu código está errado. Por favor, escreva um código válido. ')
                perguntarBanco();
            }
            perguntarAgencia();
        } else {
            console.log('Seu código está errado. Por favor, escreva um código válido. ')
            perguntarBanco();
        };

    });
};

const perguntarAgencia = () => {
    rl.question('Qual é a sua agência? Escreva um código de cinco (5) digitos. ', (resposta) => {
    
        if (resposta.length === 5) {
            novoCorrentista.agencia = helper.formatarAgencia(resposta);
            perguntarContaCorrente();
        } else {
            console.log('Seu código não corresponde à uma agência existente. Por favor, escreva um código válido. ')
            perguntarAgencia();
        };
        
    });
};

const perguntarContaCorrente = () => {
    rl.question('Escreva o número da sua conta corrente. Ele deve ter sete (7) digitos. ', (resposta) => {
        
        if (resposta.length === 7) {
            novoCorrentista.contaCorrente = helper.formatarConta(resposta);
            perguntarSaldo();
        } else {
            console.log('Seu número não corresponde à uma conta existente. Por favor, escreva um número válido. ')
            perguntarContaCorrente();
        };

    });
};

const perguntarSaldo = () => {
    rl.question('Para finalizar, pode nos informar quanto saldo disponível tem atualmente? Coloque o número em centavos. ', (resposta) => {
        
        if (isNaN(parseInt(resposta))) {
            console.log('Sua resposta não é valida. ')
            perguntarSaldo();
        } else {
            novoCorrentista.saldo = parseInt(resposta);
            adicionarNovoCorrentista(novoCorrentista);
        };

    });
};

// Declaração da função da questão 2 - Verificar os dados de um correntista

const verificarCPF = () => {
    rl.question('Escreva um número de CPF para comprovar se já está cadastrado na nossa base de dados. ', (resposta) => {
        if (resposta.length === 11) {
            
            let correntistaCadastrado = false, correntistaAtual;

            for (let i = 0; i < listaDeCorrentistas.length; i++) {
                if (helper.formatarCPF(resposta) === listaDeCorrentistas[i].cpf) {
                    correntistaCadastrado = true;
                    correntistaAtual = listaDeCorrentistas[i];
                    break;
                };
            };

            if (correntistaCadastrado !== true) {
                console.log('Esse CPF não existe na nossa base de dados.');
                rl.close();
            } else {
                console.log('Aqui estão os dados vinculados com esse CPF: ');
                console.log(correntistaAtual);
                mensagemDeApertura();
            };
            
        } else {
            console.log('Opa! Parece que seu CPF não tem onze (11) digitos. Por favor, escreva um CPF válido. ')
            verificarCPF();
        };
    
    });
};

// Chamada da função inicial para dar início ao programa

mensagemDeApertura();