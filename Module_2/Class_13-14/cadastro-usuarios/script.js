/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
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

// rl.close();

const cadastros = [
   {
     nome: "Fábio Silva",
     dataDeNascimento: "19/07/2002",
     cpf: "52475614288",
     profissao: "Desenvolvedor",
     deletado: false
   }
];

function listarUsuarios() {
   console.log(cadastros);
};

const deletarUsuario = (cpf) => {
  let possuiDeletado = false;
  for (let i = 0; i < cadastros.length; i++) {
    if (cadastros[i].cpf === cpf) {
      possuiDeletado = true;
      cadastros[i].deletado = true;
      console.log(`Usuário de CPF ${cpf} foi deletado!`);
    };
  };

  if (!possuiDeletado) {
    console.log("Usuário não encontrado.");
  };
};

const cadastrar = (usuario) => {
  cadastros.push(usuario);
};

// Ex. 5

cadastrar({
  nome: "Bruno Henrique",
  dataDeNascimento: "30/12/1990",
  cpf: "71772834988",
  profissao: "Advogado",
  deletado: false
});

console.log(cadastros);

// Ex. 9-15

rl.question("O que você deseja fazer? Cadastrar, listar ou deletar? ", (resposta) => {
    console.log("A resposta foi", resposta);
    if (resposta === "listar" || resposta === "Listar") {
      listarUsuarios();
    } else if (resposta === "deletar" || resposta === "Deletar") {
      rl.question("Você quer deletar qual usuário? Me passe um cpf: ", (resposta) => {
        console.log("A resposta foi", resposta);
        deletarUsuario(resposta);
        console.log(cadastros);
        rl.close();
      });
    } else if (resposta === "cadastrar" || resposta === "Cadastrar") {
      const novoUsuario = {
        deletado: false,
      };
      rl.question("Qual é o nome do usuário cadastrado? ", (resposta) => {
        console.log("A resposta foi", resposta);
        novoUsuario["nome"] = resposta;
        rl.question("Qual é a data de nascimento deste usuário? ", (resposta) => {
          console.log("A resposta foi", resposta);
          novoUsuario["dataDeNascimento"] = resposta;
          rl.question("Qual é a profissão deste usuário? ", (resposta) => {
            console.log("A resposta foi", resposta);
            novoUsuario["profissao"] = resposta;
            rl.question("Qual é o CPF deste usuário? ", (resposta) => {
              console.log("A resposta foi", resposta);
              novoUsuario["cpf"] = resposta;
              cadastrar(novoUsuario);
              console.log(`O usuário ${novoUsuario.nome} foi cadastrado com sucesso!`);
              console.log(cadastros);
              rl.close();
            });
          });
        });
      });
    };
  }
);

// Ex. 4

// deletarUsuario("52475614288");
// console.log(cadastros);

// Ex. 3
// listarUsuarios();