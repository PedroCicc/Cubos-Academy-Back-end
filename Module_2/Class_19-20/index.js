// Questão 6: Adicione todas as funções criadas neste grupo em um módulo, helpers.js.
// Exporte todas as funções desse módulo. Caso você tenha esquecido como módulos funcionam,
// reassista a aula #15, vídeo 7 e 8 de back-end.

// Questão 6 - Parte 2: importando o módulo.

const helper = require('./helper');

console.log(helper.formatador('19001284035'));
console.log(helper.formatador('12345'));
console.log(helper.formatador('1234563'));