// Grupo 1 - Funções de suporte

// Questão 1: Crie uma função que receba um código de três digitos e retorne o nome do banco.
// O nome retornado não deve conter as palavras S.A., (antigo), (Brasil), Holding.

const obterNomeDoBanco = (codigo) => {
    const bancos = {
    001: 'Banco do Brasil S.A.',
    033: 'Banco Santander (Brasil) S.A.',
    104: 'Caixa Econômica Federal',
    237: 'Banco Bradesco S.A.',
    341: 'Banco Itaú S.A.',
    356: 'Banco Real S.A. (antigo)',
    389: 'Banco Mercantil do Brasil S.A.',
    399: 'HSBC Bank Brasil S.A.',
    422: 'Banco Safra S.A.',
    453: 'Banco Rural S.A.',
    633: 'Banco Rendimento S.A.',
    652: 'Itaú Unibanco Holding S.A.',
    745: 'Banco Citibank S.A.',
};

    if (bancos[codigo] === undefined) {
        return false;
    };

    const nomeDoBanco = bancos[codigo]
        .replace('S.A.', '')
        .replace('antigo', '')
        .replace('Brasil', '')
        .replace('Holding', '')
        .trim();

    return nomeDoBanco;
};

// console.log(obterNomeDoBanco(652));

// Questão 2: Crie uma função que remova quaisquer caracteres que não seja número
// dentro de uma string. O retorno deve ser uma string.

const limparTexto = (texto) => {
    let textoTransformado = texto;

    while (textoTransformado.indexOf('.') !== -1) {
        textoTransformado = textoTransformado.replace('.', '');
    };

    while (textoTransformado.indexOf('-') !== -1) {
        textoTransformado = textoTransformado.replace('-', '');
    };

    return textoTransformado;
};

// console.log(limparTexto('190.012.840-35'));
// console.log(limparTexto('1234-5'));
// console.log(limparTexto('123456-3'));

// Questão 3: Crie uma função que receba uma string de 11 digitos que represente um CPF
// apenas em números e formate para o formato a seguir: 190.012.840-35

const formatarCPF = (numero) => {
    const cpf = `${numero.substr(0, 3)}.${numero.substr(3, 3)}.${numero.substr(6, 3)}-${numero.substr(9, 2)}`;
    return cpf;
};

// Questão 4: Crie uma função que receba uma string de 5 digitos que represente o número
// da agência em string e formate para o formato a seguir: 1234-5

const formatarAgencia = (numero) => {
    const agencia = `${numero.substr(0, 4)}-${numero.substr(4, 1)}`;
    return agencia;
};

// Questão 5: Crie uma função que receba uma string de 7 digitos que represente o número
// da conta corrente em string e formate para o formato a seguir: 123456-3

const formatarConta = (numero) => {
    const contaBancaria = `${numero.substr(0, 6)}-${numero.substr(6, 1)}`;
    return contaBancaria;
};

// Questões 3, 4 e 5: formatador para todas as questões;

const formatador = (numero) => {
    if (numero.length === 11) {
        return formatarCPF(numero);
    } else if (numero.length === 5) {
        return formatarAgencia(numero);
    } else if (numero.length === 7) {
        return formatarConta(numero);
    };
};

// console.log(formatador('19001284035'));
// console.log(formatador('12345'));
// console.log(formatador('1234563'));

// Questão 6: Adicione todas as funções criadas neste grupo em um módulo, helpers.js.
// Exporte todas as funções desse módulo. Caso você tenha esquecido como módulos funcionam,
// reassista a aula #15, vídeo 7 e 8 de back-end.

// Questão 6 - Parte 1: Exportando o módulo.

module.exports = {
    obterNomeDoBanco: obterNomeDoBanco,
    limparTexto: limparTexto,
    formatarCPF: formatarCPF,
    formatarAgencia: formatarAgencia,
    formatarConta: formatarConta,
    formatador: formatador,
};