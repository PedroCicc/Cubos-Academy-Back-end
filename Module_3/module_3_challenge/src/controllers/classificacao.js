/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
const response = require('./response');
const JogosDB = require('../repositories/jogosdb');

async function obterClassificacao(ctx) {
	const jogos = await JogosDB.obterTodosOsJogos();
	const tabela = [];
	calcularTabela(tabela, jogos);
	ordenarTabela(tabela);
	return response(ctx, 200, tabela);
}

const calcularTabela = (tabela, jogos) => {
	const inserirOuAtualizarTime = (nome, pontos, golsFeitos, golsSofridos) => {
		const timeEncontrado = tabela.find((time) => time.nome === nome);

		if (timeEncontrado) {
			timeEncontrado.pontos += pontos;
			timeEncontrado.jogos++;
			timeEncontrado.vitorias += pontos === 3 ? 1 : 0;
			timeEncontrado.derrotas += pontos === 0 ? 1 : 0;
			timeEncontrado.empates += pontos === 1 ? 1 : 0;
			timeEncontrado.golsFeitos += golsFeitos;
			timeEncontrado.golsSofridos += golsSofridos;
		} else {
			tabela.push({
				nome,
				pontos,
				jogos: 1,
				vitorias: pontos === 3 ? 1 : 0,
				derrotas: pontos === 0 ? 1 : 0,
				empates: pontos === 1 ? 1 : 0,
				golsFeitos,
				golsSofridos,
			});
		}
	};

	for (jogo of jogos) {
		if (jogo.gols_casa > jogo.gols_visitante) {
			// t1 venceu
			inserirOuAtualizarTime(
				jogo.time_casa,
				3,
				jogo.gols_casa,
				jogo.gols_visitante
			);
			inserirOuAtualizarTime(
				jogo.time_visitante,
				0,
				jogo.gols_casa,
				jogo.gols_visitante
			);
		} else if (jogo.gols_casa < jogo.gols_visitante) {
			// t2 venceu
			inserirOuAtualizarTime(
				jogo.time_casa,
				0,
				jogo.gols_casa,
				jogo.gols_visitante
			);
			inserirOuAtualizarTime(
				jogo.time_visitante,
				3,
				jogo.gols_casa,
				jogo.gols_visitante
			);
		} else {
			// empate
			inserirOuAtualizarTime(
				jogo.time_casa,
				1,
				jogo.gols_casa,
				jogo.gols_visitante
			);
			inserirOuAtualizarTime(
				jogo.time_visitante,
				1,
				jogo.gols_casa,
				jogo.gols_visitante
			);
		}
	}
};

const ordenarTabela = (tabela) => {
	tabela.sort((a, b) => {
		if (a.pontos > b.pontos) {
			return -1;
		} else if (b.pontos > a.pontos) {
			return 1;
		} else {
			// mesma quantidade de pontos
			if (a.vitorias > b.vitorias) {
				return -1;
			} else if (b.vitorias > a.vitorias) {
				return 1;
			} else {
				const saldoA = a.golsFeitos - a.golsSofridos;
				const saldoB = b.golsFeitos - b.golsSofridos;

				if (saldoA > saldoB) {
					return -1;
				} else if (saldoB > saldoA) {
					return 1;
				} else {
					// eslint-disable-next-line no-lonely-if
					if (a.golsFeitos > b.golsFeitos) {
						return -1;
					} else if (b.golsFeitos > a.golsFeitos) {
						return 1;
					} else {
						return a.nome.localCompare(b.nome);
					}
				}
			}
		}
	});
};

module.exports = { obterClassificacao };
