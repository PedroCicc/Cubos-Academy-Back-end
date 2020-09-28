/**
 * Gerando um código pra a url encurtada.
 */
const gerarCodigo = () => Math.random().toString(36).substr(2, 9);

module.exports = gerarCodigo;
