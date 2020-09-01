/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const chalk = require("chalk");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

/**
 * Escreva seu código aqui embaixo;
 */

const { RSA_X931_PADDING } = require("constants");
 const listaDeProdutos = [
  {
    nome: "camisa",
    preco: 3000,
    qtd: 2000
  },
  {
    nome: "tenis",
    preco: 4000,
    qtd: 1000
  },
  {
    nome: "calças",
    preco: 4500,
    qtd: 1500
  }
 ];

let indexProdutoAtual;
let sacolaDeCompras = [];

const buscarProduto = (nome, primeiraPergunta) => {
  let produtoAchado = false;
  
  for (i = 0; i < listaDeProdutos.length; i++) {
    if (listaDeProdutos[i].nome === nome) {
      indexProdutoAtual = i;
      produtoAchado = true;
      console.log(`Yay! Temos seu produto ${chalk.blue(nome)}!`);
      perguntarQtd();
    };
  };

  if (produtoAchado === false) {
    console.log(`Não temos o produto ${chalk.blue(nome)}.`);
    perguntarProduto(false);
  };
};

const perguntarProduto = (primeiraPergunta) => {
  let pergunta = "Qual produto você está procurando? ";

  if (primeiraPergunta === false) {
    pergunta = "Deseja procurar outro produto na nossa loja? Digite o nome do produto ou 'não' para encerrar o atendimento. ";
  }

  rl.question(pergunta, (resposta) => {
    if (resposta === "não" || resposta === "Não") {
      console.log("Certo! Muito obrigado pela sua visita. Volte sempre!");
      rl.close();
    };
    buscarProduto(resposta);
  });
};

const perguntarQtd = () => {
  const produtoAtual = listaDeProdutos[indexProdutoAtual];

  rl.question(`Quantas unidades do produto ${produtoAtual.nome}? `, (resposta) => {
    const qtdDisponivel = produtoAtual.qtd;
    const qtdAComprar = resposta;

    if (qtdAComprar <= qtdDisponivel) {
      rl.question(`Você deseja adicionar ese produto na sua sacola de compras? `, (resposta) => {
        if (resposta === "sim" || resposta === "Sim") {
          sacolaDeCompras.push({
            nome: produtoAtual.nome,
            qtd: qtdAComprar,
            precoUnd: produtoAtual.preco / 100,
            subtotal: (produtoAtual.preco / 100) * qtdAComprar
          });
          perguntarPagamento(resposta);
        } else {
          perguntarProduto();
        };
      });
    } else {
      rl.question(`Infelizmente, só temos ${qtdDisponivel} unidades de ${produtoAtual.nome} disponíveis. \n Deseja comprar a maior quantidade disponível? `, (resposta) => {
        if (resposta === "sim" || resposta === "Sim") {
          sacolaDeCompras.push({
            nome: produtoAtual.nome,
            qtd: qtdDisponivel,
            precoUnd: produtoAtual.preco / 100,
            subtotal: (produtoAtual.preco / 100) * qtdDisponivel
          });
          perguntarPagamento(qtdDisponivel);
        } else {
          console.log("Certo! Muito obrigado pela sua visita. Volte sempre!");
          rl.close();
        };
      });
    };
  });
};

const perguntarPagamento = (qtd) => {
  let valorTotalAPagar = 0;
  for (i = 0; i < sacolaDeCompras.length; i++) {
    valorTotalAPagar += sacolaDeCompras[i].subtotal;
  };

  rl.question("Se você deseja continuar para o pagamento, escreva 'pagar'. \n Para ver sua sacola de compras, escreva 'sacola'. \n Para selecionar outro produto, escreva 'produto'. \n Para encerrar o atendimento, escreva 'sair'. ", (resposta) => {
    if (resposta === "pagar" || resposta === "Pagar") {
      console.log(`Perfeito! Segue o resumo da sua compra:`)
      for (i = 0; i < sacolaDeCompras.length; i++) {
        console.log(sacolaDeCompras[i]);
      };
      console.log(`Valor total à pagar: R$ ${chalk.green(valorTotalAPagar)}.
      \n Volte sempre!`);
      rl.close();
    } else if (resposta === "sacola" || resposta === "Sacola") {
      console.log(sacolaDeCompras);
      perguntarPagamento();
    } else if (resposta === "produto" || resposta === "Produto") {
      perguntarProduto();
    } else {
      console.log("Certo! Muito obrigado pela sua visita. Volte sempre!");
      rl.close();
    };
  });
};

perguntarProduto(true);