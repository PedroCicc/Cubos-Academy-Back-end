function celular (modelo, fabricante) {
    this.modelo = modelo;
    this.fabricante = fabricante;
};

const celular_1 = new celular('Mi 9 SE', 'Xiaomi');
console.log(celular_1.modelo, celular_1.fabricante);
const celular_2 = new celular('510e', 'Samsung');
console.log(celular_2.modelo, celular_2.fabricante);